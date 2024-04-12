import json

from flask import jsonify
from flask_restful import Resource, reqparse

from backEnd.good import Good
from database import db


class Admin(db.Model):
    __tablename__ = 'administrators'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(255))
    password = db.Column(db.String(255))
    room = db.Column(db.String(255))
    phone = db.Column(db.Integer)
    email = db.Column(db.String(255))

    @staticmethod
    def findRepeat(name, phone, room, email):
        existing_user = Admin.query.filter_by(name=name).first()
        if existing_user:
            return 1  # 用户名已经存在
        existing_phone = Admin.query.filter_by(phone=phone).first()
        if existing_phone:
            return 2  # 电话已经存在
        existing_room = Admin.query.filter_by(room=room).first()
        if existing_room:
            return 3  # 科室已存在
        existing_email = Admin.query.filter_by(email=email).first()
        if existing_email:
            return 4  # 邮箱已存在
        return 0  # 账号注册成功

    @staticmethod
    def addAdmin(name, room, email, phone, password):
        new_admin = Admin(name=name, room=room, email=email, phone=phone, password=password)
        db.session.add(new_admin)
        db.session.commit()

    @staticmethod
    def getAdmin(name):
        a = Admin.query.filter_by(name = name).first()
        if not a:
            return None
        return {"uId": a.id,
                "uName": a.name,
                "password": a.password,
                "phone": a.phone,
                "room": a.room,
                "email": a.email}

    @staticmethod
    def checkLogin(name, password):
        a = Admin.query.filter_by(name=name).first()
        if not a:
            return 1  # 账户不存在
        if a.password == password:
            return 0  # 用户名和密码匹配
        return 1  # 密码不匹配

    @staticmethod
    def add_good(good_id, url, environmentalValue, brief, tag, name, value, description, hint):
        tag = json.dumps(tag)
        g = Good.query.filter_by(url=url).first()
        if not g:
            new_good = Good(id=good_id, url=url, environmental_value=environmentalValue, brief=brief, tag=tag,
                            name=name, value=value, description=description, hint=hint)
            db.session.add(new_good)
            db.session.commit()
            return 0  # 修改成功
        return 1


class AddGoods(Resource):
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('good_id', type=int, required=True)
        parser.add_argument('url', type=str, required=True)
        parser.add_argument('environmentalValue', type=int, required=True)
        parser.add_argument('brief', type=str, required=True)
        parser.add_argument('tag', type=str, required=True)
        parser.add_argument('name', type=str, required=True)
        parser.add_argument('value', type=float, required=True)
        parser.add_argument('description', type=str, required=True)
        parser.add_argument('hint', type=int, required=True)
        data = parser.parse_args()

        status = Admin.add_good(data['good_id'], data['url'], data['environmentalValue'], data['brief'], data['tag'],
                                data['name'],
                                data['value'], data['description'], data['hint'])

        return jsonify({"status": status}), 200
