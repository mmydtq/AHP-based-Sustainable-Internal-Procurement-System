from flask import Flask
from flask_restful import Resource, Api
from flask_cors import cross_origin
from sqlalchemy import desc
from database import db
from order import Order


class FormDataList(Resource):
    @cross_origin()
    def post(self):
        try:
            sorted_orders = db.session.query(Order).order_by(Order.date.desc())
            sorted_orders = list(sorted_orders)
            date_order_dict = {}

            # 遍历已排序的订单
            for order in sorted_orders:
                order_date = order.date  
                if order_date not in date_order_dict:
                    date_order_dict[order_date] = []
                date_order_dict[order_date].append(order)

            # 存储过去的月份
            months = []
            for date in list(date_order_dict.keys())[:7]:
                months.append(date)

            # 存储每个月的环境值、销售值和订单数量
            monthly_env = []
            monthly_sale = []
            monthly_order_number = []
            for orders in list(date_order_dict.values())[:7]:
                env_value = 0
                sale_value = 0
                order_num = 0
                for order in orders:
                    if order.state == 1:
                        order_num += 1
                        goods = list(order.goods)
                        for good in goods:
                            env_value += good.environmental_value
                            sale_value += good.value
                monthly_order_number.append(order_num)
                monthly_env.append(env_value)
                monthly_sale.append(sale_value)

            months.reverse()
            monthly_sale.reverse()
            monthly_env.reverse()
            monthly_order_number.reverse()

            # 构建响应数据
            response_data = []
            for i in range(len(months)):
                response_data.append({
                    "month": f"{months[i]}",  # 修改字段名称为 month
                    "transactionAmount": monthly_sale[i],
                    "ecoFriendlyTransactionAmount": monthly_env[i],
                    
                })

            return {"data": response_data}, 200

        except Exception as e:
            return {"error": str(e)}, 400
