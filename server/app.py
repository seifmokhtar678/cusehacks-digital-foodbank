from flask import Flask, request, jsonify
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from flask_bcrypt import Bcrypt
from models import db, User, Donation, bcrypt
from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user, current_user
from config import Config
from auth import auth

app = Flask(__name__)

# Configuration
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqldb://username:password@localhost/database_name'
app.config['JWT_SECRET_KEY'] = 'your_jwt_secret_key'  # Change this to a secure key
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize extensions
db.init_app(app)
jwt = JWTManager(app)
bcrypt = Bcrypt(app)
login_manager = LoginManager(app)
login_manager.login_view = 'login'
app.register_blueprint(auth)

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

with app.app_context():
    db.create_all()  # Create the database tables

# Sign-Up Route
@app.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')
    role = data.get('role')

    if not username or not email or not password or not role:
        return jsonify({"msg": "Missing fields"}), 400

    if role not in ['dining_hall', 'charity']:
        return jsonify({"msg": "Invalid role"}), 400

    if User.query.filter_by(username=username).first() or User.query.filter_by(email=email).first():
        return jsonify({"msg": "User already exists"}), 400

    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
    new_user = User(username=username, email=email, password=hashed_password, role=role)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({"msg": "User created"}), 201

# Login Route
@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    user = User.query.filter_by(username=username).first()

    if user and bcrypt.check_password_hash(user.password, password):
        access_token = create_access_token(identity={'username': user.username, 'role': user.role})
        return jsonify(access_token=access_token), 200

    return jsonify({"msg": "Bad username or password"}), 401

# Donation Management Routes
@app.route('/donations', methods=['POST'])
@jwt_required()
def create_donation():
    current_user = get_jwt_identity()
    data = request.get_json()
    food_type = data.get('food_type')
    quantity = data.get('quantity')
    pickup_time = data.get('pickup_time')

    if not food_type or not quantity or not pickup_time:
        return jsonify({"msg": "Missing fields"}), 400

    new_donation = Donation(food_type=food_type, quantity=quantity, pickup_time=pickup_time, user_id=current_user['id'])
    db.session.add(new_donation)
    db.session.commit()

    return jsonify({"msg": "Donation created"}), 201

@app.route('/donations', methods=['GET'])
@jwt_required()
def get_donations():
    current_user = get_jwt_identity()
    donations = Donation.query.filter_by(user_id=current_user['id']).all()  # Fetch donations for the logged-in user
    return jsonify([{"id": d.id, "food_type": d.food_type, "quantity": d.quantity, "pickup_time": d.pickup_time} for d in donations]), 200

# Run the application
if __name__ == '__main__':
    app.run(debug=True)