import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Contact = () => {
  return (
    <div className='container my-10 mx-auto md:px-6'>
      <section className='mb-32'>
        <div className='flex justify-center'>
          <div className='text-center md:max-w-xl lg:max-w-3xl'>
            <h1 className='font-sans text-xl font-semibold '>Contact Us</h1>
            <p className=''>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum expedita, voluptates accusamus et dolor laudantium possimus, earum dolore minus quibusdam optio deserunt ab necessitatibus illo amet vel accusantium praesentium neque?</p>
          </div>
        </div>
        
        <form className='grid grid-flow-row-5 grid-flow-row gap-5'>
          <div className='row-span-3'>
            <label className='flex flex-center pl-2 pb-1 font-sans	text-xl	'>Name</label>
            <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '38ch' },}} noValidate autoComplete="off">
              <TextField required id="outlined-required" label="Required" defaultValue="Name"/>
            </Box>
          </div>

          <div className='row-span-2 col-span-2'>
          <label className='flex flex-center pl-2 pb-1 font-sans	text-xl	'>Name</label>
            <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '38ch' },}} noValidate autoComplete="off">
              <TextField required id="outlined-required" label="Required" defaultValue="Name"/>
            </Box>
          </div>
        </form>
      </section>
    </div>
  )
}

export default Contact