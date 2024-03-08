import React from 'react';
import { Filter, Search } from 'lucide-react';
import Doctors from './Doctors';

function Aftersearchuser() {
    const handleSearch = ()=>{

    }
  return (
    <div className='flex justify-center my-10'>
        <div className="searchoptions w-[20%] flex-col items-center border-2 p-5 max-h-[500px]">
            <div className="top flex w-full justify-center">
                <Filter className='size-5'/>
                <p className='font-font1 text-sm'>Filter</p>
            </div>
            <div className="filteroptions">
                <form className='flex flex-col'>
                    <label htmlFor="specialist" className='font-font1 text-[15px] mt-4 mb-2'>Specialist</label>
                    <input type="text" id='specialist' className='border-2 h-[35px] p-2'/>
                    <label htmlFor="location" className='font-font1 text-[15px] mt-4 mb-2'>Location</label>
                    <input type="text" id='location' className='border-2 h-[35px] p-2'/>
                    <div className='flex items-center'>
                        <input type="checkbox" id='online-cons' className='size-4'/>
                        <label htmlFor="online-cons" className='font-font1 text-[15px] mx-3 my-5'>Online Consultancy</label>
                    </div>
                    <div className="clearfilter underline font-font1 flex justify-center cursor-pointer">
                        Clear filter
                    </div>
                </form>
            </div>
        </div>
        <div className="searcharea w-[60%]">
            <form className="searchbar md:w-1/2 lg:w-[80%] flex justify-end items-center" onSubmit={handleSearch}>
                <Search className='relative left-8 p-[2px] '/>
                <input type="text" className=' w-full h-[45px] font-font1 pl-8 border-2 border-gray-200'/>    
                <button type='submit' className='bg-black w-fit text-color2 font-font1 text-lg px-5 py-2 font-semibold mx-5 hover:cursor-pointer'>
                    search
                </button>
            </form>
            <div className="doctors flex px-5 mt-5">
                <Doctors/>
            </div>
        </div>
    </div>
  )
}

export default Aftersearchuser