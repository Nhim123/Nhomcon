import React from 'react';
import Logosmall from '../assets/Logosmall.svg';

export const Footer = () => {
  return (
    <footer className='bg-customBlue'>
      <div className='grid grid-cols-2 py-6 max-w-[1240px] mx-auto'>
        <div className="flex items-center">
            <img src={Logosmall} alt="Logo" className="h-10 mr-3" />
        </div>
      </div>
       
    </footer>
  )
}
