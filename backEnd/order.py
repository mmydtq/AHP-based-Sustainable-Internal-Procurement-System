from datetime import datetime
from database import db

class Order(db.Model):
    __tablename__ = 'orders'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    order_number = db.Column(db.String(255), nullable=False, unique=True)
    order_time = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)
    member_id = db.Column(db.String(255), nullable=False)
    goods_id = db.Column(db.String(255), nullable=False)
    total_price = db.Column(db.Integer, nullable=False)
    order_status = db.Column(db.String(50), nullable=False)
