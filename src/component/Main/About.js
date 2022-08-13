import { Typography } from '@mui/material'
import React from 'react'
import Slides from './Slides'
import Navbar from './Navbar';
import Footer from './Footer';

function About() {
  return (
    <>
    <Navbar/>
    <Slides/>
      <h2 style={{textAlign:'center'}}>We Are Working On This Project</h2>
      <Typography sx={{textAlign:'justify',margin:5}}>Disha Foundation is a non-political, non-profit organisation committed to the development of rural India.Disha Foundation  began in October 1990 in a remote village in Chopal in the Shimla District. It was registered under The Societies Registration Act of 1860 in 1983, and its headquarters are now located at Bandh, a small village in the Himalayan foothills of Himachal Pradesh State, Northern India. Disha Foundation is now working in over 100 villages in the steep mountainous terrain of the Sirmour and Solan districts.</Typography>
      
      <Typography sx={{textAlign:'justify', margin:5}}>Disha Foundation is partnered with international non-government organisations (NGO’s), such as RNZWCS in New Zealand, Rotary International, Charities Aid Foundation, HelpAge International, U.K., MISEREOR in Germany and CCIVS in France.</Typography>
      <h2 style={{textAlign:'center'}}>Disha Foundation Mainly Focus On this..</h2>
      <Typography sx={{margin:10}}>
        <div style={{textAlign:'center',fontWeight:'bold'}}>
          <p>Free Education</p>
          <p>Scholarship</p>
          <p>Free Trip</p>
          <p>Help needy people</p>
        </div>
      </Typography>
      <Typography sx={{margin:10,fontSize:20}}>
       Every person has dream but If they not capable for complete their dream.Then Disha Foundation take his responsbility and complete theire dream.
      </Typography>
      <Footer/>
    </>
  )
}

export default About