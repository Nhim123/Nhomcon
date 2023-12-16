import React from 'react'
import { Product } from '../components/Product'

const Services = () => {
  return (
  <div>
      <div className='w-full max-w-[1240px] mx-auto grid md:grid-row-3 bg'>
        <div className='justify-center '>
        <h1 className='font-bold text-lg py-5'>CATEGORY</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, similique incidunt quo laboriosam libero ipsam quis voluptatum, quae fugiat beatae obcaecati sed ipsa ex est hic, dicta vero. Ad, eum.</p>
        </div>
      </div>

    <div className='w-screen flex flex-row justify-center'>
      <div className=' flex flex-wrap py-10 justify-center '>
        <div className='basis-1/5 px-3'><Product/></div>
        <div className='basis-1/5 px-5'><Product/></div>
        <div className='basis-1/5 px-5'><Product /></div>
        <div className='basis-1/5 px-5'><Product /></div>
  
      </div>
    </div>

  </div>
  )
}

export default Services