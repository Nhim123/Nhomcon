import React from 'react';
import Logosmall from '../assets/Logosmall.svg';

export const Footer = () => {
  return (
    <footer className='bg-customBlue'>
      <div className='max-w-[1240px] mx-auto py-5'>
        <div className="flex items-center pt-5">
            <img src={Logosmall} alt="Logo" className="h-12 mr-3" />
        </div>

        <div className='grid grid-cols-3'>

        </div>
        
        <div className='grid grid-cols-3 space-x-20'>
          <div className='grid grid-rows pt-5'>
            <div className='flex items-center'>
              <span className="material-symbols-outlined text-white h-12 w-12 flex-shrink-0">location_on</span>
              <h1 className='text-wrap font-montserrat font-semibold text-white text-justify ml-5 capitalize flex-grow'>Số 18/74 ngõ Thịnh Hào 1, phố Tôn Đức Thắng, Phường Hàng Bột, Quận Đống đa, Thành phố Hà Nội, Việt Nam</h1>
            </div>
            <div className='flex items-center'>
              <span className="material-symbols-outlined text-white h-12 w-12 flex-shrink-0 mt-5">phone</span>
              <h1 className='text-wrap font-montserrat font-semibold text-white text-justify ml-5 capitalize flex-grow'>+84 375 813 299</h1>
            </div>
            <div className='flex items-center'>
              <span className="material-symbols-outlined text-white h-12 w-12 flex-shrink-0 mt-5">email</span>
              <h1 className='text-wrap font-montserrat font-semibold text-white text-justify ml-5  flex-grow'>ha@hunganh.org.vn</h1>
            </div>
          </div>

          <div className='grid grid-rows pt-5'>
            <div className='grid grid-rows font-montserrat font-semibold text-white text-justify'>
              <div className='text-white font-bold uppercase text-start'>Our Services</div>
              <h1 className='text-gray-200'>Supply Chain Manager</h1>
              <h2 className='text-gray-200'>Artificial Intelligence</h2>
              <h3 className='text-gray-200'>Website Development</h3>
              <h4 className='text-gray-200'>Mobile-Application Development</h4>
            </div>
          </div>
        </div>
        <div className='text-center text-white mt-5 text-lg'>
          <p>&copy; 2025 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
