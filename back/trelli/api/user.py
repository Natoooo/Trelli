from flask import request, g
from trelli import app
from trelli.models import *
from trelli.api.authToken import auth

@app.route("/users/self", methods=["GET"])
@auth
def get_user():
	user = User.query.filter(User.id == g.user.id).first()
	return user_schema.jsonify(user)

@app.route("/users/self", methods=["PUT"])
@auth
def update_user():
    updt_user = User.query.filter(User.id == g.user.id).first_or_404()
    updt_user.name = request.json['name']
    db.session.commit()
    return user_schema.jsonify(updt_user)
