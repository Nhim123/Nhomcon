import React from 'react'
import Number1 from './Number1.svg'
import Number2 from './Number2.svg'
import Number3 from './Number3.svg'
import Number4 from './Number4.svg'

const Technology = () => {
  return (
    <div className='w-full max-w-[1240px] mx-auto pb-5'>
    <h1 className='flex justify-center uppercase font-roboto text-3xl font-extrabold text-yellow-800'>Technology Stack</h1>
      <div className='grid grid-cols-4 text-xl font-mono pt-6'>
        <div className=''> 
          <img src={Number1} width='50px' />
          <h1 className='text-2xl font-palanquin font-semibold uppercase pb-3 text-yellow-800'>Database</h1>
          <div className='grid grid-rows-4 text-xl list-disc list-outside leading-10 font-roboto'>
            <li>PostgreSQL</li>
            <li>Redis</li>
            <li>MySQL</li>
            <li>MongoDB</li>
          </div>
        </div>

        <div className=''> 
          <img src={Number2} width='50px' />
          <h1 className='text-2xl font-palanquin font-semibold uppercase pb-3 text-yellow-800'>Infrastructure</h1>
          <div className='grid grid-rows-6 text-xl list-disc list-outside leading-10 font-roboto'>
            <li>AWS</li>
            <li>AWS Lambda</li>
            <li>GitLab</li>
            <li>Heroku</li>
            <li>Jenkins</li>
            <li>Docker</li>
          </div>
        </div>

        <div className=''> 
          <img src={Number3} width='50px' />
          <h1 className='text-2xl font-palanquin font-semibold uppercase pb-3 text-yellow-800'>Backend</h1>
          <div className='grid grid-rows-7 text-xl list-disc list-outside leading-10 font-roboto'>
            <li>Nodejs</li>
            <li>Go</li>
            <li>Ruby</li>
            <li>Ruby on Rails</li>
            <li>C#</li>
            <li>Laravel</li>
            <li>Symfony</li>
          </div>
        </div>

        <div className=''> 
          <img src={Number4} width='50px' />
          <h1 className='text-2xl font-palanquin font-semibold uppercase pb-3 text-yellow-800'>Frontend</h1>
          <div className='grid grid-rows-4 text-xl list-disc list-outside leading-10 font-roboto'>
            <li>Javascript</li>
            <li>HTML5</li>
            <li>CSS</li>
            <li>Angular</li>
            <li>React</li>
            <li>jQuery</li>
          </div>
        </div>
      </div>
  </div>
  )
}

export default Technology