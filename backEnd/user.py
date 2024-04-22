from database import db

class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(255))
    password = db.Column(db.String(255))
    phone_number = db.Column(db.Integer)
    room = db.Column(db.String(255))
    email = db.Column(db.String(255))

    @staticmethod
    def findRepeat(name, room, email, phone_number):
        existing_user = User.query.filter_by(name=name).first()
        if existing_user:
            return 1  # 用户id已经存在
        existing_department = User.query.filter_by(room=room).first()
        if existing_department:
            return 3  # 部门已经存在
        existing_email = User.query.filter_by(email=email).first()
        if existing_email:
            return 4  # 邮箱已经存在
        existing_phone_number = User.query.filter_by(phone_number=phone_number).first()
        if existing_phone_number:
            return 2  # 电话已经存在
        return 0  # 账号注册成功
    
    @staticmethod
    def addUser(name, department, email, phone_number, password):
        new_user = User(name=name, room=department, email=email, phone_number=phone_number, password=password)
        db.session.add(new_user)
        db.session.commit()

    @staticmethod
    def getUser(username):
        user = User.query.filter_by(name=username).first()
        if not user:
            return {}
        return {
            'uId': user.id,
            'uName': user.name,
            'password': user.password,
            'phone': user.phone_number,
            'room': user.room,
            'email': user.email
        }

    @staticmethod
    def checkLogin(name, password):
        user = User.query.filter_by(name=name).first()
        if not user:
            return 1  # 用户名不存在
        if user.password == password:
            return 0  # 用户名和密码匹配
        return 1  # 密码不匹配
    
    @staticmethod
    def rePassword(name, new_password):
        user = User.query.filter_by(name=name).first()
        if not user:
            return 1  # 用户名不存在
        user.password = new_password
        db.session.commit()
        return 0  # 密码已更新