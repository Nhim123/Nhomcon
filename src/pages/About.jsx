import React from 'react'
import { HorizontalNonLinearStepper } from '../components/Stepper'

const About = () => {
  return (
  <div className='mx-auto'>
    <div className='bg-orange-100 w-screen'>
      <div className=' container mx-auto md:px-6 grid grid-rows-4 grid-flow-col gap-4 h-36'>
        <div className='flex flex-row py-10'>
          <p className='w-1/5 text-2xl font-extrabold '>Aboust Us</p>
            <h1 className='text-wrap w-2/3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit esse velit asperiores aliquam, dolores quos nam quo autem eius, aliquid officia. Odio cumque molestiae sed hic nobis illo cupiditate libero.</h1>
        </div>
      </div>
      </div>


      <div className=' bg-blue-100'>
        <div className=' container md:px-6 mx-auto py-10'>
          <HorizontalNonLinearStepper />
        </div>
      </div>
    </div>
  )
}

export default About