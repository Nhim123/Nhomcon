import React from 'react'

const CardHome = () => {
  return (
    <div className='mx-auto max-w-[1240px]'>
      <p className='font-Nunito font-bold text-3xl flex justify-center text-Blue1'>Why you should choose Hung Anh</p>
      <div className='grid grid-cols-3 space-x-10'>
        <div className='justify-start font-Nunito'>
          <p className='text-2xl text-Blue1'>Tailored Team Solutions</p>
          <h1>Each team is formed following a comprehensive examination of your software development needs.</h1> {/* This is a placeholder for the first card content */}
        </div>

        <div className='justify-start font-Nunito'>
          <p className='text-2xl text-Blue1'>Tailored Team Solutions</p>
          <h1>Each team is formed following a comprehensive examination of your software development needs.</h1>
        </div>

        <div className='justify-start font-Nunito'>
          <p className='text-2xl'>Tailored Team Solutions</p>
          <h1>Each team is formed following a comprehensive examination of your software development needs.</h1>
        </div>

      </div>
    </div>
  )
}

export default CardHome