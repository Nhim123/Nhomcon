import React, { useState } from 'react';
import  Logo  from "../assets/Logo.svg";
import { AiOutlineMenu , AiOutlineClose } from "react-icons/ai";
import Ai  from './Servicecomponent/Ai.jsx';
import Webapp  from './Servicecomponent/Webapp.jsx'
import Mobileapp from './Servicecomponent/Mobileapp.jsx'

export const Nav = () => {
  const [nav, setNav] = useState(false)
  const [dropdown, setDropdown] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className=''>
      <nav className='fixed top-0 left-0 w-full bg-white shadow-md z-50'>
        <div className='grid grid-cols-2 max-container py-4 w-full max-w-[1240px] mx-auto'>
          <a href = '/'>
            <img src= {Logo} 
            alt='logo'
            width={250}
            height={250}
            />
          </a>
          <ul className=' flex justify-end items-center gap-16 max-lg:hidden'>
            <a href='/' className='text-xl font-semibold'>Home</a>
            <a href='/about' className='text-xl font-semibold'>About</a>
            <div 
              className='relative'
              onMouseEnter={() => setDropdown(true)}
              onMouseLeave={() => setDropdown(false)}
            >
              <a href='/services' className='text-xl font-semibold'>Services </a>
              {dropdown && (
                <ul className='absolute left-0 top-[100%] mt-2 w-screen bg-white shadow-lg'>
                  <li><a href='/services/service1' className='block px-4 py-2'>Service 1</a></li>
                  <li><a href='/services/service2' className='block px-4 py-2'>Service 2</a></li>
                  <li><a href='/services/service3' className='block px-4 py-2'>Service 3</a></li>
                </ul>
              )}
            </div>
            <a href='/contact' className='text-xl font-semibold'>Contact Us</a>
            <a href='/test' className='text-xl font-semibold'>Test</a>
          </ul>
          <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
            <div className= {!nav ? 'fixed left-0 top-0 w-[100%] h-full border-r border-r-gray-900 bg-[#f3ba40] ' : 'fixed left-[-100%] '}>
              <ul className='uppercase p-4'>
                <li href='/' className='p-4 border-b border-gray-600'>Home</li>
                <li href='/about' className='p-4 border-b border-gray-600'>About</li>
                <li href='/services'className='p-4 border-b border-gray-600'>Services</li>
                <ul className='pl-4'>
                  <li><a href='/services/service1' className='block py-2'>Service 1</a></li>
                  <li><a href='/services/service2' className='block py-2'>Service 2</a></li>
                  <li><a href='/services/service3' className='block py-2'>Service 3</a></li>
                </ul>
                <li href='/contact' className='p-4 border-b border-gray-600'>Contact Us</li>
                <li href='/test'className='p-4 border-b border-gray-600'>Test</li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className='mt-[100px]'>
        {/* ...existing code... */}
      </div>
    </div>
  )
}