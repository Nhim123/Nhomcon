import { useRef, useEffect} from 'react';
import React from 'react';
import { Paper } from '@mui/material';
import About1 from '../components/Aboutcomponent/About1/About1.jsx';
import Services from '../components/Aboutcomponent/Services.jsx';



const About = () => {
  return (
    <div>
      <div className='bg-customBlue mt-[-22px]'>
        <div className='w-full max-w-[1240px] mx-auto'>
          <h1 className='flex justify-center py-3 uppercase font-palanquin font-bold text-3xl underline text-white'>About us</h1>
          <div className='flex justify-center font-poppin font-normal text-xl text-center text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nemo corporis magni. Accusantium odit eveniet, magnam vitae tenetur sunt ex consequatur itaque. Illo tempore possimus laboriosam perferendis impedit hic quaerat! </div>
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
      <div className='w-full max-w-[1240px] mx-auto'>
        

        <div className='flex justify-center py-4'>
            <About1 position="left" />
        </div>
          
        
        
        <div className='flex justify-center py-4'>
          <Services/>
        </div>
      </div>

      <div className='bg-slate-100'>
        <div className='space-y-4 w-full max-w-[1240px] mx-auto my-4'>
          <p className='font-Nunito text-3xl font-bold pb-4 '>Who is our customer ?</p>
          <div className='grid grid-cols-3 space-x-5'>
            <div className='space-y-3 pb-8'>
              <p className='text-2xl font-bold font-Nunito text-slate-800'>Technology Companies</p>
              <h1 className='text-justify font-Nunito font-semibold text-gray-600'>Delivers innovative software, cloud solutions, cybersecurity, and digital transformation services, empowering technology companies with cutting-edge solutions for efficiency, security, and growth in the digital era </h1>
            </div>

            <div className='space-y-3 pb-8'>
              <p className='text-2xl font-bold font-Nunito text-slate-800'>Multifaceted Enterprises</p>
              <h1 className='text-justify font-Nunito font-semibold text-gray-600'>Provides innovative technology solutions, software, cloud services, and cybersecurity, empowering multifaceted enterprises with efficiency, security, and digital transformation</h1>
            </div>

            <div className='space-y-3 pb-8'>
              <p className='text-2xl font-bold font-Nunito text-slate-800'>Technology Companies</p>
              <h1 className='text-justify font-Nunito font-semibold text-gray-600'>Empowers startups with cutting-edge technology solutions, software development, cloud services, and cybersecurity to drive innovation, scalability, and growth.</h1>
            </div>
          </div>
        </div>
        </div>
        <div className='flex justify-center py-4'>
            <About1 position="right" />
        </div>
    </div>
  )
}

export default About