import React from 'react';
import Logosmall from '../assets/Logosmall.svg';
import FacebookLogo from '../assets/FacebookLogo.svg';
import Whatsapp from '../assets/Whatsapp.svg';
import LinkedInLogo from '../assets/LinkedInLogo.svg';

export const Footer = () => {
  return (
    <footer className='bg-customBlue'>
      <div className='max-w-[1240px] mx-auto py-5'>
        <div className="flex items-center pt-5">
            <img src={Logosmall} alt="Logo" className="h-12 mr-3" />
        </div>

        <div className='grid grid-cols-3 space-x-10'>
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

          <div className='grid grid-rows pt-5 text-white border-l-2 border-white pl-8'>
            <p className='font-NunitoSans text-2xl font-bold'>Our Services</p>
            <h1>Supply Chain Management (SCM)</h1>
            <h2>Artificial Intelligence (AI)</h2>
            <h3>Website Development</h3>
            <h4>Mobile-Application Development</h4>
          </div>

          <div className='grid grid-rows pt-5 text-white border-l-2 border-white pl-8'>
            <p className='font-NunitoSans text-2xl font-bold'>Follow Us</p>
              <div className='flex items-center'>
                <img src={FacebookLogo} alt="Facebook" className="h-8 w-8" />
                <h1 className='text-wrap font-montserrat font-semibold text-white text-justify ml-5 capitalize flex-grow'>Facebook</h1>
              </div>
              
              <div className='flex items-center'>
                <img src={Whatsapp} alt="Whatsapp" className="h-8 w-8" />
                <h1 className='text-wrap font-montserrat font-semibold text-white text-justify ml-5 capitalize flex-grow'>Whatsapp</h1>
              </div>

              <div className='flex items-center'>
                <img src={LinkedInLogo} alt="LinkedIn" className="h-8 w-8" />
                <h1 className='text-wrap font-montserrat font-semibold text-white text-justify ml-5 capitalize flex-grow'>LinkedIn</h1>
              </div>
          </div>
        </div>
        <div className='text-center text-white mt-5 uppercase font-semibold font-NunitoSans'>
          <p>&copy; 2025 Hunganh Company. All rights reserved.</p>
        </div>
      </div>
       
    </footer>
  )
}
