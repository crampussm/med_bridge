import React, { useEffect } from 'react'
import Usernavbar from './Usernavbar'
import Userhome from './Userhome'
import { useNavigate } from 'react-router-dom';

function Userdashboard() {
  const navigate = useNavigate();
  const access_token = localStorage.getItem("access_token");
  useEffect(()=>{
    if(!access_token){
        navigate('/');
    }
  }, [])
  return (
    <div>
      <Usernavbar/>
      <Userhome/>
    </div>
  )
}

export default Userdashboard