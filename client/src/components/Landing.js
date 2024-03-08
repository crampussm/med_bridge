import React, {useEffect} from 'react'
import LandingNavbar from './LandingNavbar'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'

function Landing() {
  const navigate = useNavigate();
  const access_token = localStorage.getItem("access_token");
  useEffect(()=>{
    if(access_token){
      navigate("/home")
    }
  }, [])
  return (
    <div className='landing'>
        <LandingNavbar/>
        <div className='intro flex items-center w-full justify-center'>
          <div className='intro bg-color1 w-[40%] h-[450px] flex flex-col justify-center p-10 translate-x-20'>
            <h1 className='font-font1 font-semibold text-3xl my-2'>
              Virtual Healthcare When You Need It Most
            </h1>
            <p className='font-font1 text-2xl my-2'>
              For Anyone, Anywhere, at Anytime.
            </p> 
            <span className='px-5 py-2 text-white bg-black rounded-3xl w-fit my-5 cursor-pointer' onClick={e=>navigate('/login')}>
              Join Now
            </span>
          </div>
          <div className="image mr-16">
            <img src="./images/landing_image.png" alt=""/>
          </div>
        </div>
        <div className='doctors'>
          <div className="heading flex justify-center items-center my-16 py-16">
            <h1 className='font-font1 font-semibold text-4xl'>Meet Our Doctors</h1>
          </div>
          <div className='doctor-card flex justify-center'>
            <div className="card mx-2 my-1 py-5 w-[20%]" style={{boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",}}>
              <span className='flex justify-center items-center'>
                <img className='w-1/2' src="https://media.licdn.com/dms/image/C4D03AQE7YScjLU4qhQ/profile-displayphoto-shrink_800_800/0/1584844567997?e=2147483647&v=beta&t=UE0T-KjPT1IkV0besmzzo81Q-NCD52FIRsQZFMHvSwI" alt="" />
              </span>
              <span className='flex items-center justify-center my-6 '>
                <h2 className='text-xl font-semibold font-font1'>Ken Redcross, MD</h2>
              </span>
              <span className='flex justify-center items-center'>
                <p className='w-[80%]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae laboriosam quo doloremque.</p>
              </span>
            </div>
            <div className="card mx-2 my-1 py-5 w-[20%]" style={{boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",}}>
              <span className='flex justify-center items-center'>
                <img className='w-1/2' src="https://media.licdn.com/dms/image/C4D03AQE7YScjLU4qhQ/profile-displayphoto-shrink_800_800/0/1584844567997?e=2147483647&v=beta&t=UE0T-KjPT1IkV0besmzzo81Q-NCD52FIRsQZFMHvSwI" alt="" />
              </span>
              <span className='flex items-center justify-center my-6 '>
                <h2 className='text-xl font-semibold font-font1'>Ken Redcross, MD</h2>
              </span>
              <span className='flex justify-center items-center'>
                <p className='w-[80%]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae laboriosam quo doloremque.</p>
              </span>
            </div>
            <div className="card mx-2 my-1 py-5 w-[20%]" style={{boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",}}>
              <span className='flex justify-center items-center'>
                <img className='w-1/2' src="https://media.licdn.com/dms/image/C4D03AQE7YScjLU4qhQ/profile-displayphoto-shrink_800_800/0/1584844567997?e=2147483647&v=beta&t=UE0T-KjPT1IkV0besmzzo81Q-NCD52FIRsQZFMHvSwI" alt="" />
              </span>
              <span className='flex items-center justify-center my-6 '>
                <h2 className='text-xl font-semibold font-font1'>Ken Redcross, MD</h2>
              </span>
              <span className='flex justify-center items-center'>
                <p className='w-[80%]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae laboriosam quo doloremque.</p>
              </span>
            </div>
            <div className="card mx-2 my-1 py-5 w-[20%]" style={{boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",}}>
              <span className='flex justify-center items-center'>
                <img className='w-1/2' src="https://media.licdn.com/dms/image/C4D03AQE7YScjLU4qhQ/profile-displayphoto-shrink_800_800/0/1584844567997?e=2147483647&v=beta&t=UE0T-KjPT1IkV0besmzzo81Q-NCD52FIRsQZFMHvSwI" alt="" />
              </span>
              <span className='flex items-center justify-center my-6 '>
                <h2 className='text-xl font-semibold font-font1'>Ken Redcross, MD</h2>
              </span>
              <span className='flex justify-center items-center'>
                <p className='w-[80%]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae laboriosam quo doloremque.</p>
              </span>
            </div>
          </div>
        </div>
        <div className='howitworks'>
          <div className="top flex justify-center items-center flex-col my-20">
            <h1 className='font-font1 text-4xl font-semibold'>How it works</h1>
            <span className='font-font1 flex items-center my-5 w-[40%]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod vel repellat facilis nihil necessitatibus veniam sapiente, explicabo excepturi corporis fugit.</span>
          </div>
          <div className="guide flex justify-center">
            <img src="./images/phone_in_hand.png" alt="" className='border-2 border-black w-[35%]'/>
            <div className="step flex flex-col bg-color2 p-5 justify-center items-center border-2 border-black">
              <span className='flex items-center'>
                <span>
                  <img src="./images/chat_icon.png" alt="" />
                </span>
                <span className='flex flex-col'>
                  <h2 className='font-font1 font-semibold text-lg'>Start a Chat</h2>
                  <p className='font-font1 w-[70%]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, temporibus.</p>
                </span>
              </span>
              <span className='flex items-center'>
                <span>
                  <img src="./images/copy_pen_icon.png" alt="" />
                </span>
                <span className='flex flex-col'>
                  <h2 className='font-font1 font-semibold text-lg'>Choose a Plan</h2>
                  <p className='font-font1 w-[70%]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, temporibus.</p>
                </span>
              </span>
              <span className='flex items-center my-5'>
                <span>
                  <img src="./images/calender_icon.png" alt="" />
                </span>
                <span className='flex flex-col'>
                  <h2 className='font-font1 font-semibold text-lg'>Book a Session</h2>
                  <p className='font-font1 w-[70%]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, temporibus.</p>
                </span>
              </span>
            </div>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Landing