import React from 'react'
import Image1 from '../assets/Homebox/Smartphone.svg'
import Image2 from "../assets/Homebox/AI.svg";
import Image3 from "../assets/Homebox/Iot.svg";
import Image4 from "../assets/Homebox/Webapplication.png";

const Homebox = () => {
  return (
      <div className='w-full max-w-[1240px] mx-auto'>
      <div className='rounded-md border-2	border-black grid grid-rows-3'>
         <div className='grid grid-cols-6 p-2 py-2'>
          <div className='flex w-40 h-40'><img viewBox="0 0 100 100" src={Image1} alt="" /></div>
          <div className='w-40 h-40'><img viewBox="0 0 100 100" src={Image2} alt="" /></div>
          <div className='w-40 h-40'><img viewBox="0 0 100 100" src={Image3} alt="" /></div>
          <div className='w-40 h-40'><img viewBox="0 0 100 100" src={Image4} type="image/png"alt="" /></div>
          <div className='w-20 h-20'><img viewBox="0 0 100 100" src={Image1} alt="" /></div>
          <div className='w-20 h-20'><img viewBox="0 0 100 100" src={Image1} alt="" /></div>
          </div>
        </div>
      </div>
  )
}

export default Homebox