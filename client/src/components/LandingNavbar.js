import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { Menu } from 'lucide-react';

function LandingNavbar() {
    const [isMenu, SetIsMenu] = useState(false);
    const handleShowMenu = () => {
        if(isMenu){
            SetIsMenu(false);
        }else{
            SetIsMenu(true);
        }
    }
  return (
    <>
        <div className='landing-navbar w-full flex p-2 justify-between mt-3 mb-5'>
            <div className="logo flex">
                <span className='w-[20%]'>
                    <img  src="../images/med_bridge_logo.png" alt=""/>
                </span>
            </div>
            <div className='menu justify-center items-center hidden md:flex'>
                <ul className='flex justify-between mx-4'>
                    <li className='font-font1 mx-3 cursor-pointer'>Our Doctors</li>
                    <li className='font-font1 mx-3 cursor-pointer'>
                        <Link to="doctor/login">Doctor's Login</Link>
                    </li>
                    <li className='font-font1 mx-3 cursor-pointer'>Book a Session</li>
                </ul>
                <span className='mx-5 bg-black cursor-pointer text-white px-3 py-2 text-[14px] font-font1 rounded-3xl flex items-center justify-center'>
                    Plans & Pricing
                </span>
            </div>
            <div className="hamberger mr-5 block md:hidden">
                <Menu onClick={handleShowMenu}/>
            </div>
        </div>
        {
            isMenu && 
            <div className='ham-menu fixed w-[60%] right-0 top-0 h-[100vh] bg-white py-5'>
                <span className='w-full text-gray-500 text-2xl flex justify-start ml-3'>
                    <p onClick={handleShowMenu}>X</p>
                </span>
                <div className='flex w-full justify-center items-center h-[80vh]'>
                    <ul className='flex flex-col'>
                        <li className='font-font1 my-5 cursor-pointer'>Our Doctors</li>
                        <li className='font-font1 my-5 cursor-pointer'>
                            <Link to="doctor/login">Doctor's Login</Link>
                        </li>
                        <li className='font-font1 my-5 cursor-pointer'>Book a Session</li>
                    </ul>
                </div>
            </div>
        }
    </>
  )
}

export default LandingNavbar