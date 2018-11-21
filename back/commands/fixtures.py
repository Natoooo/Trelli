from flask_script import Command
from trelli import db, app
from trelli.models import *
from dateutil.parser import parse

data = [
    Board(title='Monsters', posted_at=parse('2018-10-08'), items=[
        Item(title='add likes to my post', posted_at=parse('2018-10-09')),
        Item(title='add comments to my post', posted_at=parse('2018-10-09'))
    ]),
    Board(title='ToDo App', posted_at=parse('2018-10-20'), items= [
        Item(title='add sign up', posted_at=parse('2018-10-21')),
        Item(title='update authorization error', posted_at=parse('2018-10-22'))
    ])
]

class FixturesCommand(Command):
    def run(self):
        with app.app_context():
            for board in data:
                db.session.add(board)

            db.session.commit()
