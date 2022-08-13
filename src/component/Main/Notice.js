import { Paper, Stack } from '@mui/material'
import React from 'react'
import Slides from './Slides'
import Navbar from './Navbar';
import Footer from './Footer';

function Notice() {
  return (
    <>
       <Navbar/>
      <Slides/>
       <div style={{display:'flex',justifyContent:'center'}}>
         <h1>Notice</h1>
       </div>
       <Stack direction="column" spacing={15}>
          <Paper sx={{display:'flex',justifyContent:'center', height:700}}>
              <img src='../image/Notice/2.png'/>
          </Paper>
       </Stack>
       <Footer/>
    </>
  )
}

export default Notice