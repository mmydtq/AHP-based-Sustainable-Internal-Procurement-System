from flask import jsonify
from flask_restful import Resource, reqparse
from admin import Admin

class AdminRegister(Resource):
    def post(self):
        parser = reqparse.RequestParser
        parser.add_argument('username', type = str, required = True)
        parser.add_argument('phone', type = int, required = True)
        parser.add_argument('room', type = str, required = True)
        parser.add_argument('email', type = str, required = True)
        parser.add_argument('password', type=str, required=True)
        data = parser.parse_args()

        status = Admin.findRepeat(data['username'], data['phone'], data['room'], data['email'])
        if status == 0:
            Admin.addAdmin(data['name'], data['room'], data['email'], data['phone'], data['password'])

        return jsonify({"status": status}), 200

class AdminLogin(Resource):
    def post(self):
        parser = reqparse.RequestParser
        parser.add_argument('username', type=str, required=True)
        parser.add_argument('password', type=str, required=True)
        data = parser.parse_args()

        status = Admin.checkLogin(data['username'], data['password'])
        return jsonify({"status": status}), 200

