from flask import jsonify
from flask_restful import Resource
from good import Good

class Slide(Resource):
    def get(self):
        return Good.findForSlide(), 200
    
class Present(Resource):
    def get(self):
        return Good.findall(), 200