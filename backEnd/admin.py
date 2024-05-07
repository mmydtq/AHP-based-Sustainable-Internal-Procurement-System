import json
from flask_cors import cross_origin
from flask import jsonify
from flask_restful import Resource, reqparse

from good import Good
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
    def findRepeat(name, phone, email):
        existing_user = Admin.query.filter_by(name=name).first()
        if existing_user:
            return 1  # 用户名已经存在
        existing_phone = Admin.query.filter_by(phone=phone).first()
        if existing_phone:
            return 2  # 电话已经存在
        existing_email = Admin.query.filter_by(email=email).first()
        if existing_email:
            return 4  # 邮箱已存在
        return 0  # 账号注册成功

    @staticmethod
    def addAdmin(name, email, phone, password):
        new_admin = Admin(name=name, email=email, phone=phone, password=password)
        db.session.add(new_admin)
        db.session.commit()

    @staticmethod
    def getAdmin(name):
        a = Admin.query.filter_by(name=name).first()
        if not a:
            return None
        return {"uId": a.id,
                "name": a.name,
                "password": a.password,
                "phone": a.phone,
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
    def add_good(url, environmentalValue, brief, tag, name, value, description):
        tag = json.dumps(tag)
        g = Good.query.filter_by(url=url).first()
        if not g:
            new_good = Good(url=url, environmental_value=environmentalValue, brief=brief, tag=tag,
                            name=name, value=value, description=description)
            db.session.add(new_good)
            db.session.commit()
            return 0  # 修改成功
        return 1


class AddGoods(Resource):
    @cross_origin()
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('url', type=str, required=True)
        # 后端生成
        parser.add_argument('brief', type=str, required=True)
        parser.add_argument('tag', type=list, required=True)
        parser.add_argument('name', type=str, required=True)
        parser.add_argument('value', type=float, required=True)
        parser.add_argument('description', type=str, required=True)
        data = parser.parse_args()

        tag_array = data['tag']

        carbon_footprint = 0
        resource_efficient = 0
        recyclable = 0
        env_certification = 0
        alt_part = 0

        # assign scores to carbon footprint
        if "Low Carbon Emissions" in tag_array:
            carbon_footprint = 1
        elif "Moderate Carbon Emissions" in tag_array:
            carbon_footprint = 0.6
        elif "High Carbon Emissions" in tag_array:
            carbon_footprint = 0.3

        # assign scores to resource efficient
        if "High Resource Efficiency" in tag_array:
            resource_efficient = 1
        elif "Moderate Resource Efficiency" in tag_array:
            resource_efficient = 0.7
        elif "Low Resource Efficiency" in tag_array:
            resource_efficient = 0.3

        # assign scores to recyclable
        if "Fully Recyclable" in tag_array:
            recyclable = 1
        elif "Partially Recyclable" in tag_array:
            recyclable = 0.5
        elif "Not Recyclable" in tag_array:
            recyclable = 0.2

        # assign scores to environmental certification
        if "Environmental Certification" in tag_array:
            env_certification = 1
        elif "No Environmental Certification" in tag_array:
            env_certification = 0

        # assign scores to alternative part
        if "Alternative Part Available" in tag_array:
            alt_part = 1
        elif "Alternative Part Available 50%" in tag_array:
            alt_part = 0.4
        elif "No Alternative Part Available" in tag_array:
            alt_part = 0

        environmentalValue = (carbon_footprint * 0.293 + resource_efficient * 0.212 + recyclable * 0.143
                              + env_certification * 0.18 + alt_part * 0.172) * 100

        status = Admin.add_good(data['url'], environmentalValue, data['brief'], json.dumps(data['tag']),
                                data['name'],
                                data['value'], data['description'])

        return jsonify({"status": status}), 200
