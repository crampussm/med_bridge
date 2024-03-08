from flask import *
from flask_cors import CORS
import pyrebase
import jwt
from datetime import timedelta,datetime
from functools import wraps
app = Flask(__name__)
CORS(app,origins="http://localhost:3000")

from Apps import*
import configuration
if __name__ == '__main__':
    app.run(debug=True)
