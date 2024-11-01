import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slider1 from '../assets/Carousels/Aws.svg';
import Slider2 from '../assets/Carousels/Lapua.svg';
import Slider3 from '../assets/Carousels/Oracle.svg';
import Slider4 from '../assets/Carousels/Redhat.svg';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export const Carousel = () => {
 
  return (
    <Swiper
        slidesPerView={6}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
       
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}  
        className="mySwiper"
      >
      <div className='flex justify-between items-center'>
        <SwiperSlide><svg src={Slider1} viewBox='0 0 100 100'></svg></SwiperSlide>
        <SwiperSlide><svg src={Slider2}/></SwiperSlide>
        <SwiperSlide><svg src={Slider3}/></SwiperSlide>
      </div>
      </Swiper>
  )
}
