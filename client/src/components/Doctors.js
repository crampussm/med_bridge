import React from 'react'
import Doctor from './Doctor';

function Doctors() {
    const l = [1, 4];
  return (
    <div className='flex flex-col'>
        {
            l.map((elim)=>{
                return <Doctor/>
            })
        }
    </div>
  )
}

export default Doctors