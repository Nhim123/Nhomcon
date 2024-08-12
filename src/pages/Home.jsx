import React from 'react'
import {Carousel}  from '../components/Carousel';
import {Product} from '../components/Product';
import Hero from '../components/Hero';
import Homebox from '../components/Homebox';

const Home = () => {
  return (
    <div className='mx-auto w-screen'>
      <Hero />
      
      <div className='w-screen flex flex-row justify-center'>
      <div className=' flex flex-wrap py-10 justify-center '>
        <div className='basis-1/5 px-3'><Product/></div>
        <div className='basis-1/5 px-5'><Product/></div>
        <div className='basis-1/5 px-5'><Product /></div>
      </div>
    </div>
      
      <div className='py-10'>
        <Carousel/>
      </div>

      <div>
        <Homebox/>
      </div>
    
    </div>
  )
}

export default Home