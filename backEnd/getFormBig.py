from flask import Flask
from flask_restful import Resource, Api
from flask import request
from order import Order
from good import Good
from user import User
from flask_cors import cross_origin
from database import db

app = Flask(__name__)
api = Api(app)

class GetFormBig(Resource):
    @cross_origin()
    def post(self):
        try:
            # Query orders with state=0 from the database
            orders = db.session.query(Order).filter_by(state=0).all()
            
            # Transform the orders into the desired response format
            response_data = {
                "data": []
            }

            for order in orders:
                # Query user info
                user = db.session.query(User).filter_by(id=order.user_id).first()
                user_name = user.name
                user_room = user.room
                
                # Query good info
                good = db.session.query(Good).filter_by(id=order.id).first()
                good_value = good.value
                good_tag = good.tag
                
                response_data["data"].append({
                    "key": order.id,
                    "name": user_name,
                    "value": good_value,
                    "address": user_room,
                    "tag": good_tag
                })

            # Return the response data with a success code
            return response_data, 200

        except Exception as e:
            # Return an error response with an appropriate message
            return {"error": str(e)}, 400
        
class DeleteFormItem(Resource):
    @cross_origin()
    def post(self):
        try:
            # Parse incoming request data
            order_id = request.json.get('id')

            # Check if order exists
            order_to_delete = db.session.query(Order).filter_by(id=order_id).first()

            if not order_to_delete:
                return {"status": 1, "error": "Order not found"}, 200

            # Delete the order
            db.session.delete(order_to_delete)
            db.session.commit()

            return {"status": 0}, 200

        except Exception as e:
            return {"status": 1, "error": str(e)}, 400
