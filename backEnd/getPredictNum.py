import numpy as np
import pandas as pd
from statsmodels.tsa.arima.model import ARIMA
from flask import Flask
from flask_restful import Resource, Api, reqparse
import json
from flask_cors import cross_origin
from database import db
from order import Order

class getPredictNum(Resource):
    @cross_origin()
    def post(self):
        try:
            sorted_orders = db.session.query(Order).order_by(Order.date.desc())
            # 创建一个空字典，用于存储日期和订单列表的映射
            sorted_orders = list(sorted_orders)
            date_order_dict = {}
            # 遍历已排序的订单
            for order in sorted_orders:
                order_date = order.date  # 获取订单的日期
                if order_date not in date_order_dict:
                    date_order_dict[order_date] = []  # 如果日期不在字典中，创建一个空列表
                date_order_dict[order_date].append(order)  # 将订单添加到对应日期的列表中

            # 存储每个月的环境值和销售值
            monthly_env=[]
            monthly_sale=[]
            for orders in list(date_order_dict.values())[:7]:
                env_value = 0
                sale_value = 0
                for order in orders:
                    if order.state == 1:
                        goods = list(order.goods)
                        for good in goods:
                            env_value = env_value + good.environmental_value
                            sale_value = sale_value + good.value
                monthly_env.append(env_value)
                monthly_sale.append(sale_value)

            # 创建时间序列数据
            monthly_env = pd.Series(monthly_env)
            monthly_sale = pd.Series(monthly_sale)

            # 拟合ARIMA模型
            model = ARIMA(monthly_env, order=(1, 1, 1))  # 这里选择ARIMA(p,d,q)中的p=1, d=1, q=1
            fit_model = model.fit()

            model1 = ARIMA(monthly_sale, order=(1, 1, 1))
            fit_model1 = model1.fit()

            # 预测下一个月的环境值
            forecast_env = fit_model.forecast(steps=1)
            next_month_env = str(forecast_env).split()[1]  # 提取预测值
            next_month_env = round(float(next_month_env))

            # 预测下一个月的交易量
            forecast_sale = fit_model1.forecast(steps=1)
            next_month_sales = str(forecast_sale).split()[1]  # 提取预测值
            next_month_sales = round(float(next_month_sales))

            #环境值变化百分比
            index_of_lastenv = len(monthly_env.values) - 1
            env_change = next_month_env-monthly_env.values[index_of_lastenv]
            if monthly_env.values[index_of_lastenv] == 0:
                env_change_per = (env_change/1)*100
            else:
                env_change_per = (env_change/monthly_env.values[index_of_lastenv]) * 100

            #交易数变化百分比
            index_of_lastsale = len(monthly_sale.values) - 1
            sale_change = next_month_sales - monthly_sale.values[index_of_lastsale]
            if monthly_sale.values[index_of_lastsale]==0:
                sale_change_per = (sale_change/1)*100
            else:
                sale_change_per = (sale_change / monthly_sale.values[index_of_lastsale]) * 100

            response_data = {"value": [next_month_env, next_month_sales, env_change_per, sale_change_per]}
            return response_data, 200

        except Exception as e:
            return {"error": str(e)}, 400
