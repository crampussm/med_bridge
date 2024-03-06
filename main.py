from flask import Flask, render_template, request, redirect, url_for, session
from flask_jwt_extended import JWTManager, jwt_required, create_access_token, get_jwt_identity
import pyrebase

from functools import wraps
app = Flask(__name__)
from Apps import*
import configuration

#----------------------------------------------------
@app.route("/")
def main():
    return "hello"
#----------------------------------------------------
 
if __name__ == '__main__':
    app.run(debug=True)
