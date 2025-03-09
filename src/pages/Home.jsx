import React from 'react'
import Hero from '../components/Hero';
import CountHome from '../components/Homecomponent/CountingHome';

const Home = () => {
  return (
    
    <div className=' '>
      <Hero />
      <div className='mx-auto max-w-[1240px]'>
        <div className='grid grid-cols-2'>
          <div className='w-84'>
          <p className='font-semibold font-poppin text-3xl py-3 text-cyan-400'>Our Services</p>
          </div>
        </div>
      </div>
      
      <CountHome/>
    </div>
  )
}

export default Home