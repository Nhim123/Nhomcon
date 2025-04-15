import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Hero1 from '../assets/Home/hero1.png';
import Hero2 from '../assets/Home/hero2.png';
import CountingHero from './Homecomponent/Countinghero.jsx';

const Hero = () => {
  const images = [
    Hero1,
    Hero2,  
  ];

  const settings = {
    dots: false, // Disable dots
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className=''>
      <div className='relative mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'> {/* Adjust height to full screen */}
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 z-10 text-white font-Gilory'>Collaborate with Hung Anh's elite team </h1>
        <p className='md:text-3xl sm:text-2xl font-semibold z-10 text-white font-Nunito'>Innovating in technology, mastering global trade — your trusted partner in growth and success</p>
        <div className='absolute inset-0'>
          <div className='absolute inset-0 bg-blue-500 opacity-90 blur-sm z-5'> {/* Blue blur mask */}
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index} className="relative">
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
        <div className='absolute bottom-0 w-full z-10'> {/* Place CountingHero at the bottom */}
          <CountingHero />
        </div>
      </div>
    </div>
  );
};

export default Hero;