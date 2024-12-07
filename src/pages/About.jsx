import { useRef, useEffect} from 'react';
import React from 'react';
import Pagination2 from '../components/Aboutcomponent/Pagination2'
import { Paper } from '@mui/material';
import About1 from '../components/About/About1/About1.jsx';



const About = () => {
  return (
    <div>
      <div className='w-full max-w-[1240px] mx-auto '>
        <h1 className='flex justify-center py-3 uppercase font-palanquin font-bold text-3xl underline'>About us</h1>
        <div className='flex justify-center font-poppin font-normal text-xl text-center	'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nemo corporis magni. Accusantium odit eveniet, magnam vitae tenetur sunt ex consequatur itaque. Illo tempore possimus laboriosam perferendis impedit hic quaerat! </div>

        <Pagination2 />

        <div className='grid grid-row-3'>
          <div className='flex justify-center py-4'>
            <About1/>
          </div>
        </div>



        <div className='grid grid-cols-3 py-5 space-x-4'>
          <Paper className='text-xl font-poppin font-thin' elevation={3} >
            <div className='px-2 pt-2 pb-8 space-y-4'>
            <p className='text-emerald-900 flex justify-center'>Import And Exporting Expert</p>
            <h1 className='text-justify	'>We build customized web solutions that help businesses achieve total operational efficiency, independence, on-demand, and at an affordable </h1>
            </div>
          </Paper>

          <Paper className='text-xl font-poppin font-thin space-y-4' elevation={3} > 
            <div className='px-2 pt-2 pb-8 space-y-4'>
            <p className='text-sky-600 flex justify-center'>Web Design And Development</p>
            <h1 className='text-justify	'>We help to build and customize websites that can run on all platforms, from desktop to mobile to tablet, for a dynamic online presence</h1>
            </div>
          </Paper>

          <Paper className='text-xl font-poppin font-thin space-y-4' elevation={3} >
          <div className='px-2 pt-2 pb-8 space-y-4'>
            <p className='text-red-400 flex justify-center'>Cloud-Architecture Solutions</p>
            <h1 className='text-justify	'>We help to build and transit your web services from traditional servers to cloud servers and implement SAAS solutions.</h1>
            </div>
          </Paper>
        </div>
        
      </div>
    </div>
  )
}

export default About