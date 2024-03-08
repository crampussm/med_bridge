import React from 'react';
import { Search } from 'lucide-react';

function Firstsearchuser() {
    const handleFirstSearch = ()=>{
        sessionStorage.setItem('first_search', true);
    }
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className="greeetings flex flex-col items-center justify-center">
            <h2 className='font-font1 text-3xl my-4'>Hi, Swaparup</h2>
            <p className='font-font1 text-lg'>We are here to help you stay healthy and fit</p>
        </div>
        <div className="promotions flex w-[60%] justify-center my-10">
            <div className="promocard px-2 py-4 w-[30%]">
                <img className=' rounded-lg' src="https://d3jmn01ri1fzgl.cloudfront.net/photoadking/webp_thumbnail/mercury-health-care-ad-template-9o032228d0dcf2.webp" alt="" />
            </div>
            <div className="promocard px-2 py-4 w-[30%]">
                <img className=' rounded-lg' src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/healthcare-services-ads-design-template-d5cfb7fac31ec2ec9aee2f13476325f1_screen.jpg?ts=1657874844" alt="" />
            </div>
            <div className="promocard px-2 py-4 w-[30%]">
                <img className=' rounded-lg' src="https://d3jmn01ri1fzgl.cloudfront.net/photoadking/webp_thumbnail/limeade-health-care-ad-template-keednfce39628f.webp" alt="" />
            </div>
        </div>
        <div className="searcharea w-full flex justify-center items-center">
            <form className="searchbar md:w-1/2 lg:w-[45%] flex justify-end items-center" onSubmit={handleFirstSearch}>
                <Search className='relative left-8 p-[2px] '/>
                <input type="text" className=' w-full h-[45px] font-font1 pl-8 border-2 border-gray-200'/>    
                <button type='submit' className='bg-black w-fit text-color2 font-font1 text-lg px-5 py-2 font-semibold mx-5 hover:cursor-pointer'>
                    search
                </button>
            </form>
        </div>
    </div>
  )
}

export default Firstsearchuser