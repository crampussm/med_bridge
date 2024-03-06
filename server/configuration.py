from __main__ import app

from flask_jwt_extended import JWTManager, jwt_required, create_access_token, get_jwt_identity
import pyrebase
app.secret_key = 'aman-Qhy147'
app.config['JWT_SECRET_KEY'] = 'g11~--'
firebase_config = {

    "apiKey": "AIzaSyBdi6Dav8sXDTZrBZZ9dnh5VgAZyuOm9Tg",
    "authDomain": "",
    "databaseURL": "",
    "projectId": "",
    "storageBucket": "",
    "messagingSenderId": "",
    "appId": "",

}

firebase = pyrebase.initialize_app(firebase_config)
Auth = firebase.auth()
jwt = JWTManager(app)
