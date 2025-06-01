from flask import Blueprint, request, jsonify
import Mongodb.MongodbOp as db

user_bp = Blueprint('user', __name__)

@user_bp.route('/getAllUser', methods=['GET'])
def route_get_all_user():
    users = db.getAllUser()
    return jsonify(users), 200

@user_bp.route('/addUser', methods=['POST'])
def route_add_user():
    data = request.json
    name = data.get('name')
    password = data.get('password')
    
    success, message = db.addUserToDb(name, password)
    
    if success:
        return jsonify({"message": message}), 201
    else:
        return jsonify({"error": message}), 400

@user_bp.route('/getUser/<name>', methods=['GET'])
def route_get_user(name):
    result = db.getUserData(name)
    if result:
        return jsonify(result), 200
    else:
        return jsonify({"error": "User not found"}), 404

@user_bp.route('/updateUsername', methods=['POST'])
def route_update_username():
    data = request.json
    userid = data.get('userid')
    username = data.get('username')
    result = db.updateUsername(userid, username)
    return jsonify({"message": result})



@user_bp.route('/updatepassword/',methods=['POST'])
def route_update_password():
    data = request.json
    userid = data.get('userid')
    userpassword = data.get('password')
    result = db.updateUserpassword(userid,userpassword)
    return jsonify({"message": result})

@user_bp.route('/getUserId', methods=['GET'])
def get_user_id():
    username = request.args.get('username')  
    return jsonify({ 'id' : db.getUserId(username)})
    
@user_bp.route('/')
def say_hello():
    return ("Hello")