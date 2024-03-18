from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
# MySQL configurations
# app.config['MYSQL_HOST'] = '10.19.32.179'
# app.config['MYSQL_USER'] = 'root'
# app.config['MYSQL_PASSWORD'] = 'Xingyangniubi1!'
# app.config['MYSQL_DB'] = 'group9'
# mysql = MySQL(app)
# setRouter(app,mysql)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://username:123@10.19.32.179:3306/group9'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
# setRouter(app)

class test(db.Model):
    testid = db.Column(db.Integer, primary_key=True)
    testname = db.Column(db.String(255), unique=True, nullable=False)

db.create_all

@app.route('/')
def database_test():
    try:
        test.query.first()
        return jsonify({'message': 'Database connection successful'})
    except Exception as e:
        return jsonify({'message': 'Database connection failed', 'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)