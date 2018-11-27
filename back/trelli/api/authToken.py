from flask import request, jsonify, g
from trelli import app
from trelli.models import *
import uuid

def auth(fn):
    def f(**kwargs):
        token = AuthToken.query.filter(AuthToken.token == request.headers.get('X-Authenticate', "")).first()
        if not token:
            return "", 401

        g.user = token.user
        g.token = token
        return fn(**kwargs)

    f.__name__ = fn.__name__
    return f

@app.route("/login", methods=['POST'])
def login():
    user = User.query.filter(User.name == request.json.get('user', '')).first()

    if not user:
        return "", 401

    if user.password != request.json.get('password', ''):
        return "", 401

    token = AuthToken(user=user, token=str(uuid.uuid4()))
    db.session.add(token)
    db.session.commit()
    return jsonify({'token': token.token})

@app.route("/logout", methods=['DELETE'])
@auth
def logout():
    token = AuthToken.query.filter(AuthToken.user_id == g.user.id).first_or_404()

    db.session.delete(token)
    db.session.commit()
    return "", 200
