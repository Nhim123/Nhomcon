import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormButton from '../components/FormButton';


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
        
        <div className='flex flex-row'>
        <form className='grid grid-cols-2 w-7/12 pt-7 gap-y-4	'>
          <div className=''>
            <label className='flex flex-center pl-2 pb-1 font-sans text-xl	'>Frist name</label>
            <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '48ch' },}} noValidate autoComplete="off">
              <TextField required id="outlined-required" label="Required" />
            </Box>
          </div>

          <div className=''>
          <label className='flex flex-center pl-2 pb-1 font-sans	text-xl	'>Last name</label>
            <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '42ch' },}} noValidate autoComplete="off">
              <TextField required id="outlined-required" label="Required" />
            </Box>
          </div>

          <div className=''>
          <label className='flex flex-center pl-2 pb-1 font-sans	text-xl	'>Your email</label>
            <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '48ch' },}} noValidate autoComplete="off">
              <TextField required id="outlined-required" label="Required" />
            </Box>
          </div>

          <div className=''>
          <label className='flex flex-center pl-2 pb-1 font-sans	text-xl	'>Phone number</label>
            <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '42ch' },}} noValidate autoComplete="off">
              <TextField required id="outlined-required" label="Required" />
            </Box>
          </div>

          <div className=''>
          <label className='flex flex-center pl-2 pb-1 font-sans	text-xl	'>Your messages</label>
            <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '92ch' },}} noValidate autoComplete="off">
              <TextField   id="outlined-multiline-static" label="Multiline" multiline rows={4} />
            </Box>
          </div>
          
          <div className='col-span-2 pl-2 justify-center'>
              <FormButton/>
          </div>
          </form>

          <div className='w-5/12 pt-10 flex flex-col items-center gap-8'>
            
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact