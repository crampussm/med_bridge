
from configuration import*

def create_jwt_token(user_id):

    #expiration_time = datetime.utcnow() + timedelta(hours=1)

    payload = {
        "user_id": user_id,
        #"exp": expiration_time
    }
    

    token = jwt.encode(payload, JWT_SECRET_KEY, algorithm='HS256')
    return token

@app.route("/user/register")
def user_register():
    return "register"
    

@app.route("/user/login",methods=['GET', 'POST'])
def user_login():
    if request.method=='POST':
        data = request.get_json()
        email = data.get("email")
        password = data.get("password")

        try:
            user = Auth.sign_in_with_email_and_password(email, password)
            access_token = create_jwt_token(user["idToken"])
            response = {
                "access_token": access_token,
                "user": True
            }
            return jsonify(response), 200

        except Exception as e:
            return jsonify({"error": str(e)}), 401
    else:
        return "postman mar sala"
        
