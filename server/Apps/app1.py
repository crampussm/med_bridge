from __main__ import app
@app.route("/user/register")
def user_register():
    return "register"
@app.route("/user/login")
def user_login():
    return "login"