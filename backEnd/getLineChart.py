from flask_restful import Resource, reqparse
from flask_cors import cross_origin
from sqlalchemy import desc
from database import db

from order import Order

class get_line_chart(Resource):
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

            # 存储过去的月份
            months = []
            for date in list(date_order_dict.keys())[:7]:
                months.append(date)

            # 存储每个月的环境值和销售值
            monthly_env = []
            monthly_sale = []
            monthly_order_number = []
            for orders in list(date_order_dict.values())[:7]:
                env_value = 0
                sale_value = 0
                order_num = 0
                for order in orders:
                    if order.state == 1:
                        order_num = order_num + 1
                        goods = list(order.goods)
                        for good in goods:
                            env_value = env_value + good.environmental_value
                            sale_value = sale_value + good.value
                monthly_order_number.append(round_to_three_decimals(order_num))
                monthly_env.append(round_to_three_decimals(env_value))
                monthly_sale.append(round_to_three_decimals(sale_value))

            months.reverse()
            monthly_sale.reverse()
            monthly_env.reverse()
            monthly_order_number.reverse()

            response_data = {
                "date": months,
                "value1": monthly_sale,
                "value2": monthly_env,
                "value3": monthly_order_number
            }

            return response_data, 200

        except Exception as e:
            return {"error": str(e)}, 400
        
def round_to_three_decimals(number):
    # 将数字转换为字符串，分割小数部分
    number_str = str(number)
    if '.' in number_str:
        integer_part, decimal_part = number_str.split('.')
        if len(decimal_part) > 3:
            # 如果小数部分超过三位，进行四舍五入
            return round(number, 3)
    # 如果小数部分不超过三位，直接返回原数字
    return number