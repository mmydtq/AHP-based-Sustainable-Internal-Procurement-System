from flask import Flask, request
from flask_restful import Resource, Api, reqparse
from flask_cors import cross_origin
app = Flask(__name__)
api = Api(app)

# 解析器设置
parser = reqparse.RequestParser()
parser.add_argument('data', type=list, location='json', required=True, help="Data cannot be blank!")

class FormDataList(Resource):
    @cross_origin()
    def post(self):
        # 解析请求参数
        args = parser.parse_args()
        data = args['data']

        # 处理数据
        result = []

        for item in data:
            month = item.get('month')
            transaction_amount = item.get('transactionAmount')
            eco_friendly_transaction_amount = item.get('ecoFriendlyTransactionAmount')

            result.append({
                'month': month,
                'transactionAmount': transaction_amount,
                'ecoFriendlyTransactionAmount': eco_friendly_transaction_amount
            })

        return {'data': result}, 200




