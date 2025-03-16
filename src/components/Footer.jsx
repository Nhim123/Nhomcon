import React from 'react';
import Logosmall from '../assets/Logosmall.svg';

export const Footer = () => {
  return (
    <footer className='bg-customBlue'>
      <div className='max-w-[1240px] mx-auto'>
        <div className="flex items-center pt-5">
            <img src={Logosmall} alt="Logo" className="h-12 mr-3" />
        </div>

        <div className='grid grid-cols-3'>
          <div className='grid grid-rows-2'>
            <div className='flex items-center my-5'>
              <span className="material-symbols-outlined text-white h-12 w-12">location_on</span>
              <h1 className='text-wrap font-montserrat font-semibold text-white text-justify ml-5 capitalize'>Số 18/74 ngõ Thịnh Hào 1, phố Tôn Đức Thắng, Phường Hàng Bột, Quận Đống đa, Thành phố Hà Nội, Việt Nam</h1>
            </div>
            
          </div>
        </div>
      </div>
       
    </footer>
  )
}
