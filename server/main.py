from flask import *
from flask_cors import CORS, cross_origin
import pyrebase
import jwt
from datetime import timedelta,datetime
from functools import wraps
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

from Apps import*
import configuration
if __name__ == '__main__':
    app.run(debug=True)
