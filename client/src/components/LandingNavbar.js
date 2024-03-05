import React from 'react'

function LandingNavbar() {
  return (
    <div className='landing-navbar w-full flex p-2 justify-between mt-3 mb-5'>
        <div className="logo flex">
            <span className='w-[20%]'>
                <img  src="./images/med_bridge_logo.png" alt=""/>
            </span>
        </div>
        <div className='menu flex justify-center items-center'>
            <ul className='flex justify-between mx-4'>
                <li className='font-font1 mx-3 cursor-pointer'>Our Doctors</li>
                <li className='font-font1 mx-3 cursor-pointer'>Doctor's Login</li>
                <li className='font-font1 mx-3 cursor-pointer'>Book a Session</li>
            </ul>
            <span className='mx-5 bg-black cursor-pointer text-white px-3 py-2 text-[14px] font-font1 rounded-3xl flex items-center justify-center'>
                Plans & Pricing
            </span>
        </div>
    </div>
  )
}

export default LandingNavbar