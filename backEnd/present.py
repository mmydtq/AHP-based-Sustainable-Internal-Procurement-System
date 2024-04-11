from flask import jsonify
from flask_restful import Resource
from good import Good

class MainDisplay(Resource):
    def get(self):
        return Good.findForSlide(), 200
    
class Display(Resource):
    def get(self):
        return Good.findall(), 200
    
class SingleDisplay(Resource):
    def get(self):
        return Good.findById(), 200