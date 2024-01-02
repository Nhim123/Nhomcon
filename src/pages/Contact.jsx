import React from 'react'
import NameBox from '../components/NameBox'

const Contact = () => {
  return (
    <div className='container my-10 mx-auto md:px-6'>
      <section className='mb-32'>
        <div className='flex justify-center'>
          <div className='text-center md:max-w-xl lg:max-w-3xl'>
            <h1 className='font-sans text-xl font-semibold '>Contact Us</h1>
            <p className=''>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum expedita, voluptates accusamus et dolor laudantium possimus, earum dolore minus quibusdam optio deserunt ab necessitatibus illo amet vel accusantium praesentium neque?</p>
          </div>
        </div>
        
        <div className='con '>
          <div className=''>
            <p className='pl-2'>Name</p>
            <NameBox/>
          </div>


        </div>
      </section>
    </div>
  )
}

export default Contact