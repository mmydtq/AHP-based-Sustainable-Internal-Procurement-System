def setRouter(app, mysql):
    @app.route('/test')
    def database_test():
        cur = mysql.connection.cursor()
        cur.execute('SELECT * FROM test')
        data = cur.fetchall()
        cur.close()
        print(str(data))