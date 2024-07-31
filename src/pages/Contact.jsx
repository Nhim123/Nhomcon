import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormButton from '../components/FormButton';
import home from '../assets/Icons/home.svg'
import mail from '../assets/Icons/mail.svg'
import phone from '../assets/Icons/phone.svg'

const Test = () => {
  return (
     <div className='container mx-auto mb-10'>
         <div className='flex justify-center '>
          <div className='text-center md:max-w-xl lg:max-w-3xl'>
            <h1 className='font-sans text-xl font-semibold '>Contact Us</h1>
            <p className='font-roboto font-normal text-lg py-4'>Let us know what we can do for you.</p>
          </div>
      </div>

      <div className='flex flex-row '>
        <div className='basis-1/4 sm:flex-col'>
          <div className='py-3'>
            <label className='flex flex-center pl-2 pb-1 font-sans text-xl	'>Frist name</label>
            <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '55ch' },}} noValidate autoComplete="off">
            <TextField required id="outlined-required" label="Required" />
            </Box>
          </div>

          <div className='py-3'>
          <label className='flex flex-center pl-2 pb-1 font-sans	text-xl	'>Last name</label>
            <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '55ch' },}} noValidate autoComplete="off">
            <TextField required id="outlined-required" label="Required" />
            </Box>
          </div>
         
          <div className='py-3'>
          <label className='flex flex-center pl-2 pb-1 font-sans	text-xl	'>Your email</label>
          <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '55ch' },}} noValidate autoComplete="off">
          <TextField required id="outlined-required" label="Required" />
          </Box>
          </div>

          <div className=' col-span-2 pl-2 justify-center'>
              <FormButton/>
          </div>
        </div>

        <div className='basis-1/3 sm:flex-col px-8'>
            <div className='py-3'>
            <label className='flex flex-center pl-2 pb-1 font-sans	text-xl	'>Phone number</label>
            <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '55ch' },}} noValidate autoComplete="off">
              <TextField required id="outlined-required" label="Required" />
            </Box>
            </div>
          
            <div className='py-3'>
            <label className='flex flex-center pl-2 pb-1 font-sans	text-xl	'>Your messages</label>
            <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '55ch' },}} noValidate autoComplete="off">
              <TextField   id="outlined-multiline-static" label="Multiline" multiline rows={4} />
            </Box>
            </div>
        </div>

        <div className='flex flex-col basis-1/3'>
          <div className='p'>
            <div className='py-4 pl-60'>
              <img src={home} className='' alt='logo' width={70} height={70} />
            </div>
            <p className='font-sans text-xl font-bold text-center pl-20'>Company Information:</p>
            <h1 className='font-sans text-lg pl-36 font-semibold pt-1 text-zinc-500	'>28 Hai Ba Trung, Hoan Kiem, Ha Noi</h1>
          </div>
          
          <div>
            <div className='py-4 pl-60'>
              <img src={mail} className='' alt='logo' width={70} height={70} />
            </div>
            <p className='font-sans text-xl font-bold text-center pl-20'>Email Information:</p>
            <h1 className='font-sans text-lg pl-48 font-semibold pt-1 text-zinc-500'>ha@hunganh.org.vn</h1>
          </div>
          
          <div>
            <div className='py-4 pl-60'>
              <img src= {phone} className='' alt='logo' width={70} height={70} />
            </div>
            <p className='font-sans text-xl font-bold text-center pl-20'>Phone Number:</p> 
            <h1 className='font-sans text-lg pl-52 font-semibold pt-1 text-zinc-500'>+84 098.148.3619</h1>
            </div>
          </div>
          
      </div>

      
    </div>
  )
}

export default Test