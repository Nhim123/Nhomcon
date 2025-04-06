import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Hero1 from '../assets/Home/hero1.png';
import Hero2 from '../assets/Home/hero2.png';
import { Nav }   from './Nav';

const Hero = () => {
  const images = [
    Hero1,
    Hero2,  
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
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
    </div>
  );
};

export default Hero;