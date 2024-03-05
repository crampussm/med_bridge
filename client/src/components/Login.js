import React, {useState} from 'react'
import LandingNavbar from './LandingNavbar'
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ emailorusername: "", password: "" });
  const [passwordErrorMsg, setPasswordErrorMsg] = useState('');
  const [usernameOrEmailErrorMsg, setUsernameOrEmailErrorMsg] = useState('');
  const handleLogin = () =>{
    console.log("login");
  }
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  return (
    <div>
      <LandingNavbar/>
      <div className='flex justify-center h-[85vh] items-center'>
        <div className="login-box flex flex-col font-font1 items-center w-[80%] rounded-md md:w-1/3" style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px" }}>
          <h1 className='font-font1 font-bold my-3 text-2xl'>Log in</h1>
          <form action="" onSubmit={handleLogin} className='flex flex-col w-full p-6'>
            <div>
              <label htmlFor="emailorusername" className='my-5 font-font1'>Email</label>
              <input type="text" id='emailorusername' className='border-2 w-full h-[40px] mt-2 py-2 px-2' name='emailorusername' value={credentials.email} onChange={onChange} required/>
              <span id='invemailorusername' className='text-red-600 font-font1 text-sm'>{usernameOrEmailErrorMsg}</span>
            </div>
            <div className='my-5 font-font1'>
              <label htmlFor="password">Password</label>
              <input type="password" id='password' className='border-2 w-full h-[40px] mt-2 py-2 px-2' name='password' value={credentials.password} onChange={onChange} required/>
              <span id='wrngpass' className='text-red-600 font-font1 text-sm'>{passwordErrorMsg}</span>
              <p className='my-1 text-amber-700 text-sm underline hover:cursor-pointer'>Forgot password?</p>
            </div>
            <button className='text-white bg-black font-font1 py-2' type='submit'>Log in</button>
            <div className='flex justify-center my-2'>
              <p className='my-1 text-amber-700 text-sm'>New to MedBridge?</p>
            </div>
            <button className=' flex justify-center border-2 border-gray-500 text-black font-font1 py-2' onClick={() => navigate('/signup')}>Create a new account</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login