from database import db
from flask_restful import Resource, reqparse
from flask_cors import cross_origin
from flask import jsonify

order_goods_association = db.Table('order_goods',
    db.Column('order_id', db.Integer, db.ForeignKey('order.id'), primary_key=True),
    db.Column('good_id', db.Integer, db.ForeignKey('goods.id'), primary_key=True)
)

class Order(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    date = db.Column(db.String(255))
    state = db.Column(db.Integer, default=0)
    goods = db.relationship('goods', secondary=order_goods_association, backref=db.backref('orders', lazy='dynamic'))

    @classmethod
    def addOrder(cls, good, order_id, given_user_id, given_date):
        existing_order = cls.query.get(order_id)

        if existing_order:
            if existing_order.user_id == given_user_id and existing_order.date == given_date:
                existing_order.goods.append(good)
            else:
                raise ValueError(f"Order with id {order_id} already exists for a different user")
        else:
            new_order = cls(id=order_id, user_id=given_user_id, date=given_date)
            new_order.goods.append(good)
            db.session.add(new_order)

        db.session.commit()

    @classmethod
    def getNewID(cls):
        max_id_order = cls.query.order_by(cls.id.desc()).first()
        if max_id_order:
            return max_id_order.id + 1
        else:
            return 1
        
class AdminConfirm(Resource):
    @cross_origin()
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('id', type=int, required=True, help="Cart ID is required")
        args = parser.parse_args()
        order_id = args['id']

        order = Order.query.filter_by(id=order_id).first()
        if order:
            order.state = 1
            db.session.commit()
            return jsonify({'message': 'Admin has confirmed the purchase'}), 200
