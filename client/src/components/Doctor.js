import React from 'react';
import { Store, Video } from 'lucide-react';

function Doctor() {
  return (
    <div className='doctorcard flex my-2 justify-start rounded-lg py-3' style={{boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px"}}>
        <div className="docimg w-[20%] py-1 px-4">
            <img className='rounded-md' src="https://img.freepik.com/free-photo/portrait-experienced-professional-therapist-with-stethoscope-looking-camera_1098-19305.jpg" alt="" />
        </div>
        <div className="info flex flex-col px-4 justify-center">
            <h1 className='font-font1 text-2xl'>Dr. Steve Richardson</h1>
            <p className='font-font1'>Surgeon</p>
            <p className='font-font1 text-sm'>New York, USA</p>
            <div className='flex my-2'>
                <div className='flex mr-5'>
                    <Store className='size-4 mr-2'/>
                    <p className='font-font1 text-sm'>clinic - 1500₹</p>
                </div>
                <div className='flex mr-5'>
                    <Video className='size-5 mr-2'/>
                    <p className='font-font1 text-sm'>online- 700₹</p>
                </div>
            </div>
            <div className="options w-full flex justify-between">
                <button className='bg-black text-color2 py-2 px-4 rounded-3xl text-sm hover:border-gray-300 hover:border-2 hover:bg-white hover:text-black'>Take Appointment</button>
                <button className='py-2 px-4 rounded-3xl text-sm border-gray-300 border-2 hover:text-gray-600'>See Timings</button>
            </div>
        </div>
    </div>
  )
}

export default Doctor