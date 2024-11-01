import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const Technology = () => {
  return (
    <div className=''>
    <h1 className='flex justify-center uppercase font-roboto text-3xl font-extrabold text-yellow-800'>Technology Stack</h1>
        <div className='grid grid-cols-4'>
            <Paper className='flex justify-center'>Database</Paper>
            <Paper>Infrastructure</Paper>
            <Paper>Frontend</Paper>
            <Paper>Backend</Paper>
        </div>
  </div>
  )
}

export default Technology