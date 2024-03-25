from database import db
from init import create_app,create_database

app = create_app()
create_database(app)
with app.app_context():
    db.create_all()

if __name__ == '__main__':
    app.run()