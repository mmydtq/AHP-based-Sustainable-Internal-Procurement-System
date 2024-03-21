from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
# app.config['MYSQL_HOST'] = 'LAPTOP-12893DCP'
# app.config['MYSQL_USER'] = 'eric'
# app.config['MYSQL_PASSWORD'] = 'Xingyangniubi1!'
# app.config['MYSQL_DB'] = 'group9'
# mysql = MySQL(app)
# conn = MySQLdb.connect(host='LAPTOP-12893DCP', user='eric', password='Xingyangniubi1!', database='group9')
# setRouter(app,mysql)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://eric:Xingyangniubi1!@LAPTOP-12893DCP:3306/group9?connect_timeout=10'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
#setRouter(app)

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