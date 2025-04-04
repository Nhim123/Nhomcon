import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Hero1 from '../assets/Home/hero1.png';
import Hero2 from '../assets/Home/hero2.png';

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
    <div className='text-black'>
      <div className='max-w-[800px] mt-[-96px] w-full h-96 mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#34d399] font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with data.</h1>
        <div>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold'>Fast, flexible financing for</p>
        </div>
        <div className='mt-6'>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="flex justify-center items-center">
              <img 
                src={image} 
                alt={`Slide ${index + 1}`} 
                className='w-full h-64 object-contain' // Sử dụng object-contain để giữ hình ảnh trong vùng chứa
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