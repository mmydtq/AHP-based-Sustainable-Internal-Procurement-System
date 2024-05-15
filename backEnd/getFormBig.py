from flask import Flask
from flask_restful import Resource, Api
from flask import request
from order import Order
from good import Good
from user import User
from flask_cors import cross_origin
from database import db
import logging

app = Flask(__name__)
api = Api(app)

class GetFormBig(Resource):
    @cross_origin()
    def post(self):
        try:
            # Query orders with state=0
            orders = db.session.query(Order).filter(Order.state == 0).all()

            response_data = {"data": []}

            for order in orders:
                # Get user information
                user = db.session.query(User).filter(User.id == order.user_id).first()
                if not user:
                    continue

                # Get all goods associated with this order
                goods = db.session.query(Good).filter(Good.id == order.id).all()
                if not goods:
                    continue

                # Calculate total value and collect briefs
                value = sum(good.value for good in goods)
                brief_set = {good.brief for good in goods}  # Collect briefs into a set for uniqueness
                tag = list(brief_set)  # Convert set to list for JSON serialization

                response_data["data"].append({
                    "key": order.id,
                    "name": user.name,
                    "value": value,
                    "address": user.room,
                    "tags": tag
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
            order_id = request.json.get('key')
            if not order_id:
                logging.error("ID is required")
                return {"status": 1, "error": "ID is required"}, 400

            logging.info(f"Received request to delete order with ID: {order_id}")

            order_to_delete = db.session.query(Order).filter_by(id=order_id).first()

            if not order_to_delete:
                logging.error(f"Order with ID {order_id} not found")
                return {"status": 1, "error": "Order not found"}, 200

            db.session.delete(order_to_delete)
            db.session.commit()

            logging.info(f"Order with ID {order_id} deleted successfully")

            return {"status": 0}, 200

        except Exception as e:
            logging.error(f"Error occurred: {str(e)}")
            return {"status": 1, "error": str(e)}, 400
