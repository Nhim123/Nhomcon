import { useRef, useEffect} from 'react';
import React from 'react';
import Stepper from "../components/Stepper";
import about from "../assets/Media/About.svg";

const About = () => {
   const myRef = useRef();
  useEffect(() => {
    
  })
  return (
    <div>
      <div className='mx-auto my-auto'>
        <div className='bg-orange-100 w-screen'>
          <div className=' container mx-auto md:px-6 grid grid-rows-4 grid-flow-col gap-4 h-36'>
        <div className='flex flex-row py-10'>
          <p className='w-1/5 text-2xl font-extrabold '>Aboust Us</p>
            <h1 className='text-wrap w-2/3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit esse velit asperiores aliquam, dolores quos nam quo autem eius, aliquid officia. Odio cumque molestiae sed hic nobis illo cupiditate libero.</h1> 
        </div>
      </div>
      </div>

      <div className='my-5'>
        <p className=' container justify-start text-3xl font-mono font-semibold ml-52 mb-8'>The Process</p>
        <div className='flex justify-center'><Stepper/></div>
      </div>
      </div>
      
      <div className='flex justify-center py-5 '>
      <div className='container'>
          <div className='flex '>
            <div ref={myRef} className='flex justify-start text-wrap flex-row'>
              <div className='py-2'>
                <p className='text-lg font-bold text-black font-sans'>Heading</p>
                <h1 className='text-wrap text-cyan-500 font-mono'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo aliquam sequi temporibus quia veniam accusantium commodi, asperiores minus deleniti, ratione iure! Itaque molestias, ducimus asperiores possimus hic nostrum accusantium dignissimos!</h1>
              </div>
              <img src={about} alt='logo' width={500} height={500} />
            </div>
          </div>
        </div>
      </div>
    </div>
  
    
  )
}

export default About