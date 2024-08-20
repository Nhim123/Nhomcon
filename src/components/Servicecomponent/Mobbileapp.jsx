import React from 'react'
import Stepper from "../Stepper";
import {Product} from "../Product";
import Supplychain from '../css/Supplychain/Supplychain.png'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Mobbileapp = () => {
  return (
    <div>
      <div className='w-full max-w-[1240px] mx-auto pb-5'>
        <h1 className='flex justify-center py-6 uppercase font-palanquin font-bold text-3xl'>Supply Chain Management (SCM)</h1>
        <div className='grid grid-cols-2 py-8 '>
        <div className='border-1 font-palanquin text-lg font-light normal-case	text-justify tracking-wide	'>
          <p className='leading-7'>
          The core idea behind AI is to create a “digital brain” to help solve real-world problems using data. Whether it’s Google Assistant, Siri, or Bixby on your smartphone, smart car, drone, or smart home devices – AI has become one of the emerging technologies of the century and significantly impacted our lives on a daily basis.
          </p>
          <p className='py-5 leading-7'>AI also plays an important part in every side of businesses, remodeling the ways of producing, manufacturing, and delivering services. Gain competitive advantages by understanding priorities, inclinations, and decision-making processes with the help of AI-powered solutions. Being one of the competitive AI service providers, VMO proudly delivers cutting-edge AI solutions to automate your business processes and operations to drive growth and efficiency, leveraging advanced methodologies such as machine learning, natural language processing, image recognition…</p>
        </div>
        <div className='flex justify-center'>
          <img src={Supplychain} width={400} height={400} />
        </div>
        </div>
        <div className='flex justify-center pt-7'>
            <Stepper />
        </div>

      
      <div className=' flex flex-wrap justify-center'>
        <div className='basis-1/5 px-3'><Product/></div>
        <div className='basis-1/5 px-5'><Product/></div>
        <div className='basis-1/5 px-5'><Product /></div>
        <div className='basis-1/5 px-5'><Product /></div>
        <div className='basis-1/5 px-5'><Product /></div>
        <div className='basis-1/5 px-5'><Product /></div>
      </div>

      <div className='flex justify-center py-8'>
        <Stack spacing={2}>
        <Pagination count={5} variant="outlined" />
        </Stack>
      </div>
      </div> 
    </div>
  )
}

export default Mobbileapp