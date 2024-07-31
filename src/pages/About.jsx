import { useRef, useEffect} from 'react';
import React from 'react';
import Stepper from "../components/Stepper";
import about from "../assets/Media/About.svg";
import Pagination from '../components/Pagination';
import Test from "../components/Test";

const About = () => {
  return (
    <div>
      <div className='mx-auto my-auto'>
        <div className='bg-orange-100 w-screen'>
        <div className='max-container md:mx-auto flex flex-row py-10'>
          <p className=' w-1/3 text-2xl font-extrabold font-roboto '>Aboust Us</p>
          <h1 className='text-wrap w-2/3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit esse velit asperiores aliquam, dolores quos nam quo autem eius, aliquid officia. Odio cumque molestiae sed hic nobis illo cupiditate libero.</h1> 
      </div>
      </div>

      <div className='my-5 max-container md:mx-auto'>
        <p className='text-center text-3xl font-roboto font-semibold'>The Process</p>
        <div className='flex justify-center'><Stepper /></div>
        
          <div className='flex flex-row my-5'>
          <div className='flex flex-col text-wrap'>
            <h1 className=' text-3xl font-extrabold font-roboto w-1/3 '>Heading</h1>
            <p className='text-xl font-roboto'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus dignissimos hic debitis fuga nobis saepe deserunt dolorem? Quae voluptatibus nostrum odio et earum. Alias, inventore ducimus. Cumque voluptate mollitia dolor?</p>
          </div>
          <img src={about} alt="logo" width={500} height={500}/>
          </div>
        </div>
        <div className='bg-sky-300 w-screen'>
          <div className='items-center'> <Pagination/></div>
        
        </div>
      </div>

      
    </div>
  )
}

export default About