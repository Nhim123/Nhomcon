import React from 'react'
import TailoredTeam from '../../assets/Home/TailoredTeam.png'; // Fixed the import statement
import StartSmall from '../../assets/Home/StartSmall.png';
import Rocket from '../../assets/Home/Rocket.png';
import Consultant from '../../assets/Home/Consultant.png';
import Cost from '../../assets/Home/Cost.png';
import Security from '../../assets/Home/Security.png';
const CardHome = () => {
  return (
    <div className='mx-auto max-w-[1240px] '>
      <p className='font-Nunito font-bold text-3xl flex justify-center text-Blue1 pb-10'>Why you should choose Hung Anh</p>
      <div className='grid grid-cols-3 space-x-5'>
        <div className='font-Nunito space-y-5'>
          <div className='pl-20'>
            <img src={TailoredTeam} alt="Tailored Team" className='w-32 h-32'/> {/* This is a placeholder for the first card image */}
          </div>
          <p className='text-2xl text-Blue1 font-bold'>Tailored Team Solutions</p>
          <h1 className='w-80 text-justify text-lg leading-8'>Each team is formed following a comprehensive examination of your software development needs.</h1> {/* This is a placeholder for the first card content */}
        </div>

        <div className='font-Nunito space-y-5'>
          <div className='pl-20'>
            <img src={StartSmall} alt="Tailored Team" className='w-32 h-32'/> {/* This is a placeholder for the first card image */}
          </div>
          <p className='text-2xl text-Blue1 font-bold'>Start Small From 1 FTE</p>
          <h1 className='w-80 text-justify text-lg leading-8'>1 FTE (Full-time Equivalent) can be spread over multiple disciplines to fit your requirements</h1> {/* This is a placeholder for the first card content */}
        </div>

        <div className='justify-start font-Nunito space-y-5'>
        <div className='pl-20'>
            <img src={Rocket} alt="Rocket" className='w-32 h-32'/> {/* This is a placeholder for the first card image */}
          </div>
          <p className='text-2xl text-Blue1 font-bold'>Quick Scalability</p>
          <h1 className='w-80 text-justify text-lg leading-8'>Connect to a network of top talents locally to globally.</h1> {/* This is a placeholder for the first card content */}
        </div>
      </div>

      <div className='grid grid-cols-3 space-x-5 py-10'>
        <div className='justify-start font-Nunito space-y-5'>
          <div className='pl-20'>
            <img src={Consultant} alt="Consultant" className='w-32 h-32'/> {/* This is a placeholder for the first card image */}
          </div>
          <p className='text-2xl text-Blue1 font-bold'>Consultancy & Strategy</p>
          <h1 className='w-80 text-justify text-lg leading-8'>Provide appropriate technology and HR/operations guidance to support the business’s sustainable growth.</h1> {/* This is a placeholder for the first card content */}
        </div>

        <div className='justify-start font-Nunito space-y-5'>
          <div className='pl-20'>
            <img src={Cost} alt="Consultant" className='w-32 h-32'/> {/* This is a placeholder for the first card image */}
          </div>
          <p className='text-2xl text-Blue1 font-bold'>Cost Efficiency & Transparency</p>
          <h1 className='w-80 text-justify text-lg leading-8'>Deliver the best value as an Tech&Talent provider, including the cost of top-tier software developers and HR service</h1> {/* This is a placeholder for the first card content */}
        </div>

        <div className='justify-start font-Nunito space-y-5'>
          <div className='pl-20'>
            <img src={Security} alt="Consultant" className='w-32 h-32'/> {/* This is a placeholder for the first card image */}
          </div>
          <p className='text-2xl text-Blue1 font-bold'>Security & NDA</p>
          <h1 className='w-80 text-justify text-lg leading-8'>All of the Sunbytes staff are required to sign NDA before starting work on any projects.</h1> {/* This is a placeholder for the first card content */}
        </div>
      </div>
    </div>
  )
}

export default CardHome