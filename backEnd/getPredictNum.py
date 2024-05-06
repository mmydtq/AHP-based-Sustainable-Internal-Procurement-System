import numpy as np
import pandas as pd
from statsmodels.tsa.arima.model import ARIMA
from flask import Flask
from flask_restful import Resource, Api, reqparse
import json
from flask_cors import cross_origin

class getPredictNum(Resource):
    @cross_origin()
    def post(self):
        try:
            parser = reqparse.RequestParser()
            parser.add_argument('monthlyEnv', type=list, required=True,
                                help='Monthly sales environmental number is required')
            parser.add_argument('monthlySale', type=list, required=True, help = "Monthly sales goods' number is required")

            # Parse the incoming request data
            args = parser.parse_args()

            # 创建时间序列数据
            monthly_env = pd.Series(args['monthlyEnv'])
            monthly_sale = pd.Series(args['monthlySale'])

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
            env_change_per = (env_change/monthly_env.values[index_of_lastenv]) * 100

            #交易数变化百分比
            index_of_lastsale = len(monthly_sale.values) - 1
            sale_change = next_month_sales - monthly_sale.values[index_of_lastsale]
            sale_change_per = (sale_change / monthly_sale.values[index_of_lastsale]) * 100

            response_data = {"value": [next_month_env, next_month_sales, env_change_per, sale_change_per]}
            return response_data, 200

        except Exception as e:
            return {"error": str(e)}, 400
