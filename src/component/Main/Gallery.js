import { width } from '@mui/system'
import React from 'react'
import Slides from './Slides'
import Navbar from './Navbar';
import Footer from './Footer';

function Gallery() {
  return (
    <>
    <Navbar/>
    <Slides/>
      <div style={{marginBottom:50}}>
        <h2 style={{textAlign:'center',margin:20}}>Free Education</h2>
          <div style={{marginLeft:200,marginBottom:50}}>
            <img src='../image/Gallery/Freestudy/1.jpg'/>
            <img src='../image/Gallery/Freestudy/2.jpg'/>
        </div>
        <h2 style={{textAlign:'center',margin:20}}>Free Trip For Everyone</h2>
          <div style={{marginLeft:100,marginBottom:50, display:'flex', flexDirection:'column',justifyContent:'center'}}>
            <img src='../image/Gallery/Trip/1.jpg'/><br/>
            <img src='../image/Gallery/Trip/2.jpg'/>
        </div>
        <h2 style={{textAlign:'center',margin:20}}>Sport Day</h2>
          <div style={{marginLeft:100,marginBottom:50, display:'flex', flexDirection:'column',justifyContent:'center'}}>
            <img src='../image/Gallery/SportDay/1.jpg'/><br/>
            <img src='../image/Gallery/SportDay/2.jpg'/>
        </div>
        <h2 style={{textAlign:'center',margin:20}}>Teacher Day</h2>
          <div style={{marginLeft:100,marginBottom:50, display:'flex', flexDirection:'column',justifyContent:'center'}}>
            <img src='../image/Gallery/TeacherDay/1.jpg'/><br/>
            <img src='../image/Gallery/TeacherDay/2.webp'/>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Gallery