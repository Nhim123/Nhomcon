import React from 'react'
import Hero from '../components/Hero';
import CountHome from '../components/Homecomponent/CountingHome';
import Project from '../components/Homecomponent/Project';

const Home = () => {
  return (
    
    <div className='bg-white'>
      <Hero />
      <CountHome/>
      <div className='text-center mx-auto font-Nunito max-w-[1240px] py-3 space-y-3 text-2x'>
        <p className='uppercase font-semibold text-gray-500'>WHAT WE'RE OFFERING TO OUR CLIENTS</p>
        <p className='font-bold text-2xl text-gray-500'>Expert IT Software Development Service for Businesses of All Sizes</p>
        <h1 className='font-medium text-wrap'>We understand businesses of all sizes have their unique IT needs and challenges. That’s why we bring together in-depth industry expertise and the latest IT innovations to deliver bespoke solutions and products that perfectly meet the needs and behavior of their users.</h1>
      </div>
      <Project />
    </div>
  )
}

export default Home