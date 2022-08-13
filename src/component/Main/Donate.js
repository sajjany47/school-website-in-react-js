
import { Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import Slides from './Slides'
import Navbar from './Navbar';
import Footer from './Footer';

function Donate() {
  return (
   <>
   <Navbar/>
   <Slides/>
      <div style={{display:'flex',justifyContent:'center',marginTop:40,marginBottom:100}}>
        <img src='https://user-images.githubusercontent.com/11052295/138176233-5d8d41c3-8c21-4097-bba4-ff57001852cc.png'/>
      </div>
      <Footer/>
   </>
  )
}

export default Donate