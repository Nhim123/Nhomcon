import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormButton from '../components/FormButton';
import home from '../assets/Icons/home.svg'
import mail from '../assets/Icons/mail.svg'
import phone from '../assets/Icons/phone.svg'

const Test = () => {
  return (
     <div className='w-full max-w-[1240px] mx-auto mb-10'>
         <div className='flex justify-center '>
          <div className='text-center md:max-w-xl lg:max-w-3xl'>
            <h1 className='font-sans text-xl font-semibold '>Contact Us</h1>
            <p className=''>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum expedita, voluptates accusamus et dolor laudantium possimus, earum dolore minus quibusdam optio deserunt ab necessitatibus illo amet vel accusantium praesentium neque?</p>
          </div>
         </div>
           
      <div className='grid grid-cols-3'>
        <div className='grid grid-row-3'>
        <div className='basis-1/4 sm:flex-col'>
          <div className='py-3'>
            <label className='flex flex-center pl-2 pb-1 font-sans text-xl	'>Frist name</label>
            <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '40ch' },}} noValidate autoComplete="off">
            <TextField required id="outlined-required" label="Required" />
            </Box>
          </div>

          <div className='py-3'>
          <label className='flex flex-center pl-2 pb-1 font-sans	text-xl	'>Last name</label>
            <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '40ch' },}} noValidate autoComplete="off">
            <TextField required id="outlined-required" label="Required" />
            </Box>
          </div>
         
          <div className='py-3'>
          <label className='flex flex-center pl-2 pb-1 font-sans	text-xl	'>Your email</label>
          <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '40ch' },}} noValidate autoComplete="off">
          <TextField required id="outlined-required" label="Required" />
          </Box>
          </div>

          <div className=' col-span-2 pl-2 justify-center'>
              <FormButton/>
          </div>
        </div>
        </div>
        <div className='basis-1/3 sm:flex-col'>
            <div className='py-3'>
            <label className='flex flex-center pl-2 pb-1 font-sans	text-xl	'>Phone number</label>
            <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '45ch' },}} noValidate autoComplete="off">
              <TextField required id="outlined-required" label="Required" />
            </Box>
            </div>
          
            <div className='py-3'>
            <label className='flex flex-center pl-2 pb-1 font-sans	text-xl	'>Your messages</label>
            <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '45ch' },}} noValidate autoComplete="off">
              <TextField   id="outlined-multiline-static" label="Multiline" multiline rows={4} />
            </Box>
            </div>
        </div>

        <div className='grid grid-rows-3 space-y-3'>
          <div>
                <div className='flex justify-center'>
                  <img src={home} width={80} height={80} />
                </div>
              <p className='flex justify-center font-sans text-xl font-bold text-center'>Company Information:</p>
              <h1 className=' flex justify-center font-sans text-lg font-semibold pt-1 text-zinc-500	'>28 Hai Ba Trung, Hoan Kiem, Ha Noi</h1>
            </div>
          
          <div>
                <div className='flex justify-center'>
                  <img src={mail} width={80} height={80} />
                </div>
              <p className='flex justify-center font-sans text-xl font-bold text-center'>Email Information:</p>
              <h1 className=' flex justify-center font-sans text-lg font-semibold pt-1 text-zinc-500	'>ha@hunganh.org.vn</h1>
          </div>
          
          <div>
                <div className='flex justify-center'>
                  <img src={phone} width={80} height={80} />
                </div>
              <p className='flex justify-center font-sans text-xl font-bold text-center'>Phone Number:</p>
              <h1 className=' flex justify-center font-sans text-lg font-semibold pt-1 text-zinc-500	'>+84 098.148.3619</h1>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Test