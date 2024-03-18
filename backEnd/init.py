from flask import Flask
from flask_mysqldb import MySQL
from router import setRouter

app = Flask(__name__)
# MySQL configurations
app.config['MYSQL_HOST'] = '10.19.32.179'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'Xingyangniubi1!'
app.config['MYSQL_DB'] = 'group9'
mysql = MySQL(app)
setRouter(app,mysql)


if __name__ == '__main__':
    app.run(debug=True)