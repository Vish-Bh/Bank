import pymongo
from bson import ObjectId 

client=pymongo.MongoClient('mongodb://localhost:27017/')
database=client['bank']
userCollection=database['User']


def addUserToDb(name , password):
    if userCollection.find_one({"name": name}):
        return False, "User already exists"
    
    result = userCollection.insert_one({"name": name, "password": password})
    return True, f"User added with ID {result.inserted_id}"
    print("User added", name)

def getUserData(name):
    user = userCollection.find_one({"name": name})
    if user:
        return {
            "name": user['name'],
            "password": user['password'],
            "id": str(user['_id'])
        }
    else:
        return None

def getAllUser():
    users = userCollection.find()
    result = []
    for user in users:
        result.append({
            "name": user['name'],
            "password": user['password'],
            "id": str(user['_id'])  
        })
    return result


def updateUsername(id, name):
    try:
        user_id = ObjectId(id) 
        result = userCollection.update_one(
            {"_id": user_id},
            {"$set": {"name": name}}
        )
        if result.matched_count > 0:
            return "User updated successfully"
        else:
            return "User not found"
    except Exception as e:
        return f"Error: {e}"
    
def updateUserpassword(id, password):
    try:
        user_id = ObjectId(id) 
        result = userCollection.update_one(
            {"_id": user_id},
            {"$set": {"password": password}}
        )
        if result.matched_count > 0:
            return "User updated successfully"
        else:
            return "User not found"
    except Exception as e:
        return f"Error: {e}"
    
def getUserId(name):
    user = userCollection.find_one({'name': name})
    if user:
        return str(user['_id']) 
    else:
        return None 
