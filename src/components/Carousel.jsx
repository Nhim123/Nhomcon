import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Slider1 from '../assets/Carousels/Aws.svg';
import Slider2 from '../assets/Carousels/Lapua.svg';
import Slider3 from '../assets/Carousels/Oracle.svg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const Carousel = () => {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={0} // Removed spacing between slides
      loop={true} // Ensures seamless looping
      centeredSlides={false} // Disabled centered slides for seamless looping
      autoplay={{
        delay: 1, // Minimal delay for continuous movement
        disableOnInteraction: false,
      }}
      speed={2000} // Adjusted speed for smooth continuous scrolling
      pagination={false} // Disabled pagination dots
      navigation={false} // Disabled navigation arrows
      modules={[Autoplay]}
      className="mySwiper"
      rtl={false} // Ensures the loop direction is from left to right
    >
      {/* The `loop` property ensures the carousel transitions seamlessly */}
      <div className='flex justify-between items-center'>
        <SwiperSlide>
          <div style={{ width: '100px', height: '100px', margin: '0 auto'}}>
            <img src={Slider1} alt="Slider 1" style={{ width: '100%', height: '100%' }} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ width: '100px', height: '100px', margin: '0 auto' }}>
            <img src={Slider2} alt="Slider 2" style={{ width: '100%', height: '100%' }} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ width: '100px', height: '100px', margin: '0 auto' }}>
            <img src={Slider3} alt="Slider 3" style={{ width: '100%', height: '100%' }} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ width: '100px', height: '100px', margin: '0 auto' }}>
            <img src={Slider1} alt="Slider 4" style={{ width: '100%', height: '100%' }} />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div style={{ width: '100px', height: '100px', margin: '0 auto' }}>
            <img src={Slider1} alt="Slider 5" style={{ width: '100%', height: '100%' }} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ width: '100px', height: '100px', margin: '0 auto' }}>
            <img src={Slider2} alt="Slider 6" style={{ width: '100%', height: '100%' }} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ width: '100px', height: '100px', margin: '0 auto' }}>
            <img src={Slider3} alt="Slider 7" style={{ width: '100%', height: '100%' }} />
          </div>
        </SwiperSlide>
      </div>
    </Swiper>
  )
}
