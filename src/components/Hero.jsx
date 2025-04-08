<<<<<<< HEAD
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Hero1 from '../assets/Home/hero1.png';
import Hero2 from '../assets/Home/hero2.png';
import { Nav }   from './Nav';
=======
import React from 'react'
>>>>>>> parent of ea5f9b7 (4.4.2025)

const Hero = () => {
  return (
<<<<<<< HEAD
    <div className='w-full h-screen relative'>
      <Nav isHero={true} />
      <div className='w-full text-center flex flex-col justify-center'>
        <div className=''>
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index} className="relative flex justify-center items-center w-full h-full">
                <h1 className='absolute z-10 text-white text-2xl font-bold flex justify-center items-center w-full h-full'>
                  Grow with data.
                </h1>
                <img 
                  src={image} 
                  alt={`Slide ${index + 1}`} 
                  className='w-full h-full object-cover'
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
=======
    <div className='text-black'>
        <div className='max-w-[800px] mt-[-96px] w-full h-96 mx-auto text-center flex flex-col justify-center'>
          <p className='text-[#34d399] font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
          <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with date.</h1>
          <div>
            <p className='md:text-5xl sm:text-4xl text-xl font-bold'>Fast, flexible financing for</p>
          </div>
        </div>
>>>>>>> parent of ea5f9b7 (4.4.2025)
    </div>
  )
}

export default Hero