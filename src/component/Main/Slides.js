import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';

const slideImages = [
    {
      url: '../image/SlideShow/2.jpg'
    },
    {
      url: '../image/SlideShow/3.jpg'
    },
    {
      url: '../image/SlideShow/4.jpg'
    },
  ];
function Slides() {
  return (
    <Slide easing={{
        easeOut: "cubic-bezier(0.5)",
        sharp: "linear"
      }}>
             {slideImages.map((slideImage, index)=> (
                <div className="each-slide" key={index}>
                  <div style={{'backgroundImage': `url(${slideImage.url})`,height:400}}>
                  </div>
                </div>
              ))} 
    </Slide>
  )
}

export default Slides