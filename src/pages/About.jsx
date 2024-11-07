import { useRef, useEffect} from 'react';
import React from 'react';
import Stepper from "../components/Stepper";
import Pagination1 from '../components/Aboutcomponent/Pagination1'

const About = () => {
  return (
    <div>
      <div className='w-full max-w-[1240px] mx-auto '>
        <h1 className='flex justify-center py-6 uppercase font-palanquin font-bold text-3xl'>About us</h1>
        <Pagination1/>
      </div>
    </div>
  )
}

export default About