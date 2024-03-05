import React from 'react'

function Footer() {
  return (
    <div className='footer w-full bg-color3 flex justify-center py-28 px-4 mt-16'>
        <div className=' w-1/2 px-4 p-y flex flex-col'>
            <h1 className='text-white font-font1 text-3xl'>MedBridge</h1>
            <span className='text-white font-font1 cursor-pointer mt-20 text-sm'>admin login</span>
        </div>
        <div className='w-1/2 px-8 p-y flex justify-between'>
            <div className="menu">
                <h1 className='font-font1 text-white font-semibold my-5 text-xl'>Menu</h1>
                <ul className='flex flex-col'>
                    <li className='font-font1 text-white text-sm my-1'>Our Doctors</li>
                    <li className='font-font1 text-white text-sm my-1'>How it Works</li>
                    <li className='font-font1 text-white text-sm my-1'>Book a Session</li>
                </ul>
            </div>
            <div className="Social">
                <h1 className='font-font1 text-white font-semibold my-5 text-xl'>Menu</h1>
                <ul className='flex flex-col'>
                    <li className='font-font1 text-white text-sm my-1'>Facebook</li>
                    <li className='font-font1 text-white text-sm my-1'>Instagram</li>
                    <li className='font-font1 text-white text-sm my-1'>Twitter</li>
                    <li className='font-font1 text-white text-sm my-1'>Linkedin</li>
                </ul>
            </div>
            <div className="contact">
                <h1 className='font-font1 text-white font-semibold my-5 text-xl'>Contact</h1>
                <ul className='flex flex-col'>
                    <li className='font-font1 text-white text-sm my-1'>526-269-4596</li>
                    <li className='font-font1 text-white text-sm my-1'>support@medbridge.com</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer