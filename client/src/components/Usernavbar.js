import React, {useState} from 'react'
import { Menu, ChevronUp, Bell } from 'lucide-react';

function Usernavbar() {
    const [isMenu, SetIsMenu] = useState(false);
    const [isprofile, setIsProfile] = useState(false);
    const handleisProfile = () =>{
        let arrow = document.getElementById('chevronarrow');
        if(isprofile){
            setIsProfile(false);
            arrow.style.transform = 'rotate(180deg)'
        }else{
            setIsProfile(true);
            arrow.style.transform = 'rotate(0deg)';
        }
    }
    const handleShowMenu = () => {
        if(isMenu){
            SetIsMenu(false);
        }else{
            SetIsMenu(true);
        }
    }
  return (
    <div>
        <div className='landing-navbar w-full flex p-2 justify-between mt-3 mb-5'>
            <div className="logo flex">
                <span className='w-[20%]'>
                    <img  src="./images/med_bridge_logo.png" alt=""/>
                </span>
            </div>
            <div className='menu justify-end items-center hidden md:flex'>
                <ul className='flex justify-between mx-4'>
                    <li className='font-font1 mx-3 cursor-pointer'>Home</li>
                    <li className='font-font1 mx-3 cursor-pointer'>Report Insights</li>
                    <li className='font-font1 mx-3 cursor-pointer'>Book a Session</li>
                </ul>
                <span className='mx-5 bg-black cursor-pointer text-white px-3 py-2 text-[14px] font-font1 rounded-3xl flex items-center justify-center'>
                    Plans & Pricing
                </span>
                <span className='flex justify-center cursor-pointer'>
                    <Bell/>
                </span>
                <span className='profile w-[10%] flex justify-center items-center'>
                    <div className="profilepic border-gray-500 hover:border-2 hover:cursor-pointer w-[30%] rounded-full" onClick={handleisProfile}>
                        <img className='w-fit rounded-full' src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" />
                    </div>
                    < ChevronUp id='chevronarrow' className='size-4 mx-2 hover:cursor-pointer rotate-180' onClick={handleisProfile}/>
                </span>
            </div>
            <div className="hamberger mr-5 block md:hidden">
                <Menu onClick={handleShowMenu}/>
            </div>
        </div>
        {
            isprofile &&
            <div className="profileedit bg-white flex flex-col absolute right-7 top-16 border-2 border-gray-400 rounded-lg p-3">
                <ul>
                    <li className='font-font1 hover:cursor-pointer'>See Profile</li>
                    <li className='font-font1 hover:cursor-pointer'>Log Out</li>
                </ul>
            </div>
        }
        {
            isMenu && 
            <div className='ham-menu fixed w-[60%] right-0 top-0 h-[100vh] bg-white py-5' style={{boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px"}}>
                <span className='w-full text-gray-500 text-2xl flex justify-start ml-3'>
                    <p onClick={handleShowMenu}>X</p>
                </span>
                <div className="profilepic my-10 mx-6 flex flex-col justify-center border-gray-500 hover:border-2 hover:cursor-pointer w-full rounded-full" onClick={handleisProfile}>
                    <img className='w-[10%] rounded-full' src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" />
                    <ul className='my-2'>
                        <li className='font-font1 my-1'>See Profile</li>
                        <li className='font-font1'>Log Out</li>
                    </ul>
                    <hr />
                </div>
                <span className='mx-10 bg-black text-white px-3 py-2 text-[14px] font-font1 rounded-3xl flex items-center justify-center'>
                    Plans & Pricing
                </span>
                <div className='flex flex-col w-full justify-center items-center h-[50vh]'>
                    <ul className='flex flex-col'>
                        <li className='font-font1 my-5 cursor-pointer'>Our Doctors</li>
                        <li className='font-font1 my-5 cursor-pointer'>Doctor's Login</li>
                        <li className='font-font1 my-5 cursor-pointer'>Book a Session</li>
                    </ul>
                </div>
            </div>
        }
    </div>
  )
}

export default Usernavbar