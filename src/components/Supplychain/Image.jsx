import React, { useState, useEffect }from 'react'
import Boat from '../css/Supplychain/Boatship.jpg';
import './Image.css'

const Image = () => {
  const [refresh, setRefresh] = useState(false);

  // Hàm để kích hoạt hiệu ứng khi refresh
  const handleRefresh = () => {
    setRefresh(true);
    setTimeout(() => setRefresh(false), 100); // Tắt refresh sau khi chạy xong animation
  };
    useEffect(() => {
      const onRefresh = () => {
        handleRefresh();
      };

      window.addEventListener('scroll', () => {
        if (window.scrollY === 0) onRefresh(); // Khi kéo lên đỉnh trang, chạy lại hiệu ứng
      });

      return () => window.removeEventListener('scroll', onRefresh);
    }, []);

  return (
    <div className="image-container">
    <img src={Boat}  className="background-image" />
    <div className={`slide-in-text ${refresh ? 'animate' : ''}`}>
        <div className='grid grid-cols-2'>
          <div className='space-y-2 text-white font-palanquin text-2xl font-semibold pt-10'>
            <h1 >Local understanding,</h1>
            <h1 >Internation standard</h1>
          </div>

          <div className='text-xl font-montserrat font-thin space-y-4'>
            <h1>Complex procurement processes</h1>
            <h1>Minimize delivery shipment in one time.</h1>
            <h1>One stop purchasing</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Image