import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const NameBox = () => {
  return (
    <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '50ch' },
    }}
    noValidate
    autoComplete="off"
  >
         <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
        />  
      </Box>
  )
}

export default NameBox