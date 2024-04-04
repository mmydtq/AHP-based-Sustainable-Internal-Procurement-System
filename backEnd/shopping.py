from flask import jsonify
from flask_restful import Resource, reqparse
from database import db


# 定义购物车模型
class ShoppingCart(db.Model):
    __tablename__ = 'shopping_cart'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    user_id = db.Column(db.Integer, nullable=False)
    good_id = db.Column(db.Integer, nullable=False)
    quantity = db.Column(db.Integer, nullable=False, default=1)


class AddToCart(Resource):
    def post(self):
        try:
            parser = reqparse.RequestParser()
            parser.add_argument('id', type=int, required=True, help='ID is required')
            parser.add_argument('uId', type=int, required=True, help='User ID is required')
            args = parser.parse_args()

            good_id = args['id']
            user_id = args['uId']

            # 检查购物车中是否已存在相同的商品
            existing_item = ShoppingCart.query.filter_by(user_id=user_id, good_id=good_id).first()

            if existing_item:
                # 如果已存在相同的商品，则更新数量
                existing_item.quantity += 1
            else:
                # 否则，创建新的购物车条目
                new_item = ShoppingCart(user_id=user_id, good_id=good_id)
                db.session.add(new_item)

            db.session.commit()

            return {'message': 'Good added to cart successfully'}, 200

        except Exception as e:
            return {'error': str(e)}, 400
