from flask import Blueprint, request, jsonify
from flask_login import login_user, logout_user, login_required, current_user
from models import db, User, bcrypt

auth = Blueprint('auth', __name__)

# Sign-Up Route
@auth.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    if not username or not email or not password:
        return jsonify({"msg": "Missing fields"}), 400

    if User.query.filter_by(username=username).first() or User.query.filter_by(email=email).first():
        return jsonify({"msg": "User already exists"}), 400

    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
    new_user = User(username=username, email=email, password=hashed_password)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({"msg": "User created"}), 201

# Login Route
@auth.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    user = User.query.filter_by(username=username).first()

    if user and bcrypt.check_password_hash(user.password, password):
        login_user(user)  # Log in the user
        return jsonify({"msg": "Login successful"}), 200

    return jsonify({"msg": "Bad username or password"}), 401

# Logout Route
@auth.route('/logout', methods=['POST'])
@login_required
def logout():
    logout_user()  # Log out the user
    return jsonify({"msg": "Logout successful"}), 200

# Profile Route (Protected)
@auth.route('/profile', methods=['GET'])
@login_required
def profile():
    return jsonify({"msg": f"Hello, {current_user.username}!"}), 200