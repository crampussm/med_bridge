from flask import *
import pyrebase
import jwt
from datetime import timedelta
from functools import wraps
app = Flask(__name__)

from Apps import*
import configuration
if __name__ == '__main__':
    app.run(debug=True)
