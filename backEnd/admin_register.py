from flask import jsonify
from flask_restful import Resource, reqparse
from flask_cors import cross_origin
from admin import Admin

class AdminRegister(Resource):
    @cross_origin()
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('uName', type = str, required = True)
        parser.add_argument('phone', type = int, required = True)
        parser.add_argument('email', type = str, required = True)
        parser.add_argument('password', type=str, required=True)
        parser.add_argument('room', type=str, required=True)
        data = parser.parse_args()

        status = Admin.findRepeat(data['uName'], data['phone'], data['email'])
        if status == 0:
            Admin.addAdmin(data['uName'], data['email'], data['phone'], data['password'])

        return jsonify({"status": status}), 200

class AdminLogin(Resource):
    @cross_origin()
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('uName', type=str, required=True)
        parser.add_argument('password', type=str, required=True)
        data = parser.parse_args()

        status = Admin.checkLogin(data['uName'], data['password'])
        a = Admin.getAdmin(data['uName'])
        return jsonify({"status": status,
                        "user": a}), 200

