import React, { useState } from 'react';
import  headerLogo  from "../assets/headerLogo.svg";
import { AiOutlineMenu , AiOutlineClose } from "react-icons/ai";

export const Nav = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
  
      <nav className='grid grid-cols-2 max-w-[1280px]'>
       <a href = '/' className='flex items-start'>
          <img src= {headerLogo} 
          alt='logo'
          width={100}
          height={29}
          />
        </a>
        <ul className=' flex justify-end items-center gap-16 max-sm:hidden'>
          <a href='/' className='text-xl font-semibold'>Home</a>
          <a href='/about' className='text-xl font-semibold'>About</a>
          <a href='/services'className='text-xl font-semibold'>Services</a>
        <a href='/contact' className='text-xl font-semibold'>Contact Us</a>
        </ul>

      <div onClick={handleNav} className='block md:hidden'>
        {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
        <div className= {!nav ? 'fixed left-0 top-0 w-[100%] h-full border-r border-r-gray-900 bg-[#f3ba40] ' : 'fixed left-[-100%] '}>
         <ul className='uppercase p-4'>
          <li href='/' className='p-4 border-b border-gray-600'>Home</li>
          <li href='/about' className='p-4 border-b border-gray-600'>About</li>
          <li href='/services'className='p-4 border-b border-gray-600'>Services</li>
          <li href='/contact' className='p-4 border-b border-gray-600'>Contact Us</li>
         </ul>
        </div>
      </div>
      </nav>

  )
}
