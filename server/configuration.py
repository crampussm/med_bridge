from __main__ import*

app.secret_key = 'aman-Qhy147'
JWT_SECRET_KEY = "aman@~`*/*145"
firebase_config = {

    "apiKey": "",
    "authDomain": "",
    "databaseURL": "",
    "projectId": "",
    "storageBucket": "",
    "messagingSenderId": "",
    "appId": "",

}

firebase = pyrebase.initialize_app(firebase_config)
Auth = firebase.auth()
