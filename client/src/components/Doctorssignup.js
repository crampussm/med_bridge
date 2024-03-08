import React , { useCallback, useEffect, useState} from 'react';
import LandingNavbar from './LandingNavbar';
import { useNavigate } from 'react-router-dom';

function Doctorssignup() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ firstname: "", lastname: "", email: "", password: "", cnfpassword: "" });
  const [usernameErrorMsg, setUsernameErrorMsg] = useState('');
  const [emailErrorMsg, setEmailErrorMsg] = useState('');
  const [passwordErrorMsg, setPasswordErrorMsg] = useState('');

  const handleSignup = ()=>{
    console.log("signup");
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  const [buttonState, setButtonState] = useState(false);

  const matchPass = useCallback(() => {
      const confirmPasswordErrMsg = document.getElementById('wrngcnfpass');
      const signupButton = document.getElementById('signupbutton');
      if (credentials.password !== credentials.cnfpassword) {
          confirmPasswordErrMsg.hidden = false;
          if (credentials.password === "") {
              signupButton.disabled = true;
              setButtonState(false);
          }
      } else {
          confirmPasswordErrMsg.hidden = true;
          if (credentials.password !== "") {
              signupButton.disabled = false;
              setButtonState(true);
          }
      }
  }, [credentials])

  useEffect(() => {
      matchPass();
  }, [matchPass])
  return (
    <div>
        <LandingNavbar />
        <div className='flex justify-center mt-10'>
            <div className="login-box flex flex-col font-font1 items-center w-[80%] rounded-md md:w-1/3" style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px" }}>
                <h1 className='font-font1 font-bold my-3 text-2xl'>Sign up</h1>
                <form action="" onSubmit={handleSignup} className='flex flex-col w-full p-6'>
                    <div className='my-3 font-font1'>
                        <label htmlFor="firstname" className='my-5 font-font1'>First name</label>
                        <input type="text" id='firstname' className='border-2 bg-cshoffwhite w-full h-[40px] mt-2 py-2 px-2' name='firstname' value={credentials.firstname} onChange={onChange} required />
                    </div>
                    <div className='my-3 font-font1'>
                        <label htmlFor="lastname" className='my-5 font-font1'>Last name</label>
                        <input type="text" id='lastname' className='border-2 bg-cshoffwhite w-full h-[40px] mt-2 py-2 px-2' name='lastname' value={credentials.lastname} onChange={onChange} required />
                    </div>
                    <div className='my-3 font-font1'>
                        <label htmlFor="email" className='my-5 font-font1'>Email</label>
                        <input type="email" id='email' className='border-2 bg-cshoffwhite w-full h-[40px] mt-2 py-2 px-2' name='email' value={credentials.email} onChange={onChange} required />
                        <span id='invemailorusername' className='text-red-600 font-font1 text-sm'>{emailErrorMsg}</span>
                    </div>
                    <div className='my-3 font-font1'>
                        <label htmlFor="password">Password</label>
                        <input type="password" id='password' className='border-2 bg-cshoffwhite w-full h-[40px] mt-2 py-2 px-2' name='password' value={credentials.password} onChange={onChange} required />
                        <span id='wrngpass' className='text-red-600 font-font1 text-sm'>{passwordErrorMsg}</span>
                    </div>
                    <div className='my-3 font-font1'>
                        <label htmlFor="cnfpassword">Confirm password</label>
                        <input type="password" id='cnfpassword' className='border-2 bg-cshoffwhite w-full h-[40px] mt-2 py-2 px-2' name='cnfpassword' value={credentials.cnfpassword} onChange={onChange} required />
                        <span id='wrngcnfpass' className='text-red-600 font-font1 text-sm' hidden>password and confirm password must be same</span>
                    </div>
                    <button id='signupbutton' className={`mt-5 ${buttonState === false ? "bg-gray-600 cursor-wait" : "bg-black cursor-pointer"} text-white py-2`} type='submit' disabled>Sign up</button>
                    <div className='flex justify-center my-2'>
                        <p className='my-1 text-amber-700 text-sm'>Already have an account MedBridge?</p>
                    </div>
                    <button className='bg-cshoffwhite text-black font-font1 border-2 border-black py-2' onClick={() => navigate('/doctor/login')}>Login to an existing account</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Doctorssignup