from flask import jsonify
from database import db;

class test(db.Model):
    testid = db.Column(db.Integer, primary_key=True)

def setRouter(app):
    @app.route('/')
    def database_test():
        try:
            result = test.query.first()
            return "Database connection successful!"
        except Exception as e:
            return "Database connection failed: " + str(e)


# def setRouter(app):