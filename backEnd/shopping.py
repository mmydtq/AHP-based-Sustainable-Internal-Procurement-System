from flask import jsonify
from flask_restful import Resource, reqparse
from database import db
from good import Good
from flask_cors import cross_origin
from order import Order

# 定义购物车模型
class ShoppingCart(db.Model):
    __tablename__ = 'shopping_cart'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    user_id = db.Column(db.Integer, nullable=False)
    good_id = db.Column(db.Integer, nullable=False)
    quantity = db.Column(db.Integer, nullable=False, default=1)
    is_submit = db.Column(db.Integer, nullable=False, default=0)


class AddToCart(Resource):
    @cross_origin()
    def post(self):
        try:
            parser = reqparse.RequestParser()
            parser.add_argument('id', type=int, required=True, help='ID is required')
            parser.add_argument('uId', type=int, required=True, help='User ID is required')
            args = parser.parse_args()

            good_id = args['id']
            user_id = args['uId']

            # 检查购物车中是否已存在相同的商品
            existing_item = ShoppingCart.query.filter_by(user_id=user_id, good_id=good_id, is_submit=0).first()

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
        
class DeleteGood(Resource):
    @cross_origin()
    def post(self):
        try:
            parser = reqparse.RequestParser()
            parser.add_argument('id', type=int, required=True, help='ID is required')
            parser.add_argument('uId', type=int, required=True, help='User ID is required')
            parser.add_argument('quantity', type=int, required=False, help='Quantity to remove', default=1)
            args = parser.parse_args()

            good_id = args['id']
            user_id = args['uId']
            quantity_to_remove = args['quantity']

            # Find the cart item for the specified user and good
            cart_item = ShoppingCart.query.filter_by(user_id=user_id, good_id=good_id).first()

            if cart_item:
                if cart_item.quantity > quantity_to_remove:
                    # If the quantity is greater than the quantity to remove, just decrease it
                    cart_item.quantity -= quantity_to_remove
                else:
                    # If the quantity to remove is greater than or equal to the current quantity, delete the item
                    db.session.delete(cart_item)
                
                db.session.commit()
                return {'message': 'Good quantity updated in cart successfully'}, 200
            else:
                return {'message': 'Item not found in the cart'}, 404

        except Exception as e:
            return {'error': str(e)}, 400

class ShowGoods(Resource):
    @cross_origin()
    def post(self):
        try:
            parser = reqparse.RequestParser()
            parser.add_argument('uId', type=int, required=True, help='User ID is required')
            args = parser.parse_args()

            user_id = args['uId']

            # 查询购物车中指定用户的商品信息
            cart_goods = ShoppingCart.query.filter_by(user_id=user_id, is_submit=0).all()

            # 构建返回的商品信息列表
            goods_list = []
            for item in cart_goods:
                # 查询购物车商品对应的 Good 对象
                good = Good.query.get(item.good_id)
                if good:
                    # 构建单个商品的信息字典
                    good_info = {
                        'id': good.id,
                        'url': good.url,
                        'environmentalValue': good.environmental_value,
                        'brief': good.brief,
                        'tag': good.tag,  # 假设 tag 存储为以逗号分隔的字符串
                        'name': good.name,
                        'value': good.value,
                        'description': good.description,
                        'hint': good.hint,
                        'quantity': item.quantity 
                    }
                    goods_list.append(good_info)

            response = {'goods': goods_list}
            return jsonify(response), 200

        except Exception as e:
            return {'error': str(e)}, 400
class SubmitCart(Resource):
    @cross_origin()
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('uId', type=int, required=True, help="Cart ID is required")
        parser.add_argument('date', type=str, required=True)
        args = parser.parse_args()
        user_id = args['uId']
        date = args['date']

        cart_goods = ShoppingCart.query.filter_by(user_id=user_id, is_submit=0).all()
        order_id = Order.getNewID()

        for item in cart_goods:
            good = Good.query.get(item.good_id)
            if good:
                Order.addOrder(good, order_id, user_id, date)
                # good_info = {
                #     'id': good.id,
                #     'name': good.name,
                #     'quantity': item.quantity
                #     }
                # goods_list.append(good_info)

        carts = ShoppingCart.query.filter_by(user_id=user_id).all()
        for cart in carts:
            cart.is_submit = 1
        db.session.commit()

        return jsonify({'message': 'Cart submitted successfully'}), 200