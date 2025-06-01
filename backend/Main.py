from flask import Flask
from routes.userRoutes import user_bp  
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
app.register_blueprint(user_bp, url_prefix='/user')

if __name__ == '__main__':
    app.run(debug=True)
