from flask_script import Command
from trelli import db, app
from trelli.models import *
from dateutil.parser import parse

data = [
    User(name='Natoo', password='Natoo', boards=[
        Board(title='Monsters', image='https://cdn.oboi7.com/content/images/29/18/2918356068ceeda7314460b90eeb4735dc7be06b.jpg?oboi7.com-30141.jpg', posted_at=parse('2018-10-08'), items=[
            Item(title='add likes to my post', posted_at=parse('2018-10-09')),
            Item(title='add comments to my post', posted_at=parse('2018-10-09'))
        ]),
        Board(title='ToDo App', image='http://egnerphotography.co.uk/wp-content/uploads/Egner-Photography-DerwentWater-Keswick-Cumbria-United-Kingdom-IMG_7565-824x550.jpg', posted_at=parse('2018-10-20'), items=[
            Item(title='add sign up', posted_at=parse('2018-10-21')),
            Item(title='update authorization error', posted_at=parse('2018-10-22'))
        ])
    ]),
    User(name='Arnaud', password='Arnaud', boards=[
        Board(title='Prout', image='http://cabschau.c.a.pic.centerblog.net/o/2c5beba3.jpg', posted_at=parse('2018-10-08'), items=[
            Item(title='add prout', posted_at=parse('2018-10-09')),
            Item(title='add prout 2', posted_at=parse('2018-10-09'))
        ]),
        Board(title='Prout2', image='http://www.4usky.com/data/out/69/164618208-paysage-wallpapers.jpg', posted_at=parse('2018-10-20'), items=[
            Item(title='update prout', posted_at=parse('2018-10-21')),
            Item(title='update prout 2', posted_at=parse('2018-10-22'))
        ])
    ])
]

auth_token = 'abee9600-6da0-4874-ac4e-4f4a51e75db6'

class FixturesCommand(Command):
    def run(self):
        with app.app_context():
            for board in data:
                db.session.add(board)

            db.session.add(AuthToken(user=data[0], token=auth_token))
            db.session.commit()
