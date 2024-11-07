import React, { useState, useEffect }from 'react'
import Stepper from "../Stepper";
import Supplychains from '../css/Supplychain/Supply-chain.png'
import Image from '../Supplychain/Image';


const Supplychain = () => {

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
        <div className='flex justify-center pl-10'>
          <img src={Supplychains} width={550} height={400} />
        </div>
        </div>
      </div>  

      <div className=''>
        <h1 className='underline flex uppercase font-palanquin font-bold text-3xl justify-center underline-offset-8 text-orange-800 pt-6'>the progess</h1>
        <div className=' flex justify-center pt-8 pb-20'><Stepper /></div>
        <div className='grid grid-rows-2 '>
          <div className='w-full max-w-[1536px] mx-auto'>
            <h1 className='font-light font-quicksand text-4xl text-stone-400 mx-auto text-start'>Our Solution</h1>
          </div>
          <div className='flex justify-center pt-10'>
            <div className='font-quicksand font-light text-2xl max-w-screen-sm grid grid-cols-4 space-x-8'>
              <h1>Safe</h1>
              <h1>Efficient</h1>
              <h1>Economic</h1>
              <h1>Sustainable</h1>
            </div>
          </div>
        </div>
        <div className='w-full container mx-auto py-20'>
          <Image/>
          </div>
      </div>
    </div>
  )
}

export default Supplychain