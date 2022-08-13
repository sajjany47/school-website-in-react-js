import React from 'react'
import Navbar from '../Main/Navbar'
import {Box,InputLabel,Button} from '@mui/material'

function Student() {
  return (
    <>
        <Navbar/>
      <img src='https://scontent-del1-1.xx.fbcdn.net/v/t31.18172-8/17758250_1106730802769832_6167926902012552039_o.png?_nc_cat=110&ccb=1-7&_nc_sid=973b4a&_nc_ohc=XLylws5s9FIAX8Zzr9w&_nc_ht=scontent-del1-1.xx&oh=00_AT8AaPCZLUZ5Pfm6p6Pv6Yapk4Jzt7cWdXvsFvDV4sXAGw&oe=62CB9F72' style={{height:300,width:300,display:'block',margin:'auto'}}/>
            <Box sx={{marginTop:2,display:'block',margin:'auto',display:'flex',justifyContent:'center', flexDirection:'column',width:250}}>
              <InputLabel>Student ID</InputLabel>
              <input style={{marginTop:10}}/>
              <Button variant="contained" sx={{marginTop:3}}>LogIn</Button>
            </Box>
    </>
  )
}

export default Student