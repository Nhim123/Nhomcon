import React, { useState } from 'react';
import  Logo  from "../assets/Logo.svg";
import { AiOutlineMenu , AiOutlineClose } from "react-icons/ai";

export const Nav = () => {
  const [nav, setNav] = useState(false);
  const [dropdown, setDropdown] = useState(false); // Added dropdown state

  const handleNav = () => {
    setNav(!nav);
  };

  const handleMouseEnter = () => {
    setDropdown(true);
  };

  const handleMouseLeave = () => {
    setDropdown(false);
  };

  return (
    <div className=''>
      <nav className='fixed top-0 left-0 w-full bg-white shadow-md z-50'>
        <div className='grid grid-cols-2 max-container py-4 w-full max-w-[1240px] mx-auto'>
          <a href='/'>
            <img src={Logo} alt='logo' width={250} height={250} />
          </a>
          <ul className='flex justify-end items-center gap-16 max-lg:hidden'>
            <a href='/' className='text-xl font-semibold'>Home</a>
            
            <div className='relative' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <a href='/services' className='text-xl font-semibold'>Services</a>
              {dropdown && (
                <ul className='absolute top-full left-0 bg-white shadow-md whitespace-nowrap'>
                  <a href='/services/supplychain' className='block px-4 pt-8 pb-2'>Supply Chain Management</a>
                  <a href='/services/ai' className='block px-4 py-2'>Artificial Intelligence</a>
                  <a href='/services/webapp' className='block px-4 py-2'>Website Development</a>
                  <a href='/services/mobileapp' className='block px-4 py-2'>Mobile Application Development</a>
                </ul>
              )}
            </div>
            <a href='/about' className='text-xl font-semibold'>About</a>
            <a href='/contact' className='text-xl font-semibold'>Contact Us</a>
          </ul>
          <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            <div className={nav ? 'fixed left-0 top-0 w-[100%] h-full border-r border-r-gray-900 bg-[#f3ba40]' : 'fixed left-[-100%]'}>
              <ul className='uppercase p-4'>
                <li href='/' className='p-4 border-b border-gray-600'>Home</li>
                <li href='/about' className='p-4 border-b border-gray-600'>About</li>
                <li href='/services'className='p-4 border-b border-gray-600'>Services</li>
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
  );
};