import React from 'react'
import {Carousel}  from '../components/Carousel';
import {Product} from '../components/Product';
import Hero from '../components/Hero';
import About from '../components/About';



const Home = () => {
  return (
    <div>
      <Hero/>

      <About/>

      <div className=' flex flex-row py-10 justify-center '>
        <div className='basis-1/6'><Product/></div>
        <div className='basis-1/5'><Product/></div>
        <div className='basis-1/5'><Product/></div>
      </div>
      
      <div className='py-10'>
        <Carousel/>
      </div>
    
    </div>
  )
}

export default Home