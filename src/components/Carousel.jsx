import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slider1 from '../assets/Carousels/1.svg';
import Slider2 from '../assets/Carousels/2.svg';
import Slider3 from '../assets/Carousels/3.svg';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export const Carousel = () => {
 
  return (
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='flex items-center w-fill h-96'><img src= {Slider1} /></SwiperSlide>
        <SwiperSlide className='flex items-center w-fill h-96'><img src= {Slider2} /></SwiperSlide>
        <SwiperSlide className='flex items-center w-fill h-96'><img src= {Slider1} /></SwiperSlide>
        <SwiperSlide className='flex items-center w-fill h-96'><img src= {Slider3} /></SwiperSlide>
        
      </Swiper>
  )
}
