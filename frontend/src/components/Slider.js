import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const spanStyle = {
  padding: '20px',
  background: '#efefef',
  color: '#000000'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '400px'
}
const slideImages = [
  {
    url: 'https://hips.hearstapps.com/hmg-prod/images/rs357223-1626456047.jpg',
    
  },
  {
    url: 'https://www.complete-leasing.co.uk/img/gallery/mazda-6-saloon.jpg',
  },
  {
    url: 'https://www.gallantriskinc.com/wp-content/uploads/2020/08/cars-stuck-in-traffic.jpg',

  },
  {
    url: 'https://hips.hearstapps.com/hmg-prod/images/dwburnett-defendermack-dsc-4196-1610470496.jpg',

  },
  {
    url: 'https://sgtautotransport.com/storage/euImRbzQC9Xhu8fCpHte74v53PvYwcS0NHoO1pl1.jpeg',

  }
];

const Slideshow = () => {
    return (
      <div>
        <div className="slide-container" style={{width:"60%",height:"110%", marginLeft:"20%"}}>
        <Slide >
         {slideImages.map((slideImage, index)=> (
            <div key={index} >
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})`,backgroundSize:"100% 100%"}}>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
      <div style={{textAlign:"center",fontSize:"3rem"}}>
        Dobro došli!
        <div style={{fontSize:"1.5rem", margin:"5%"}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut felis sagittis, dignissim sem vel, mollis augue. Nam posuere, est vitae volutpat ultrices, nisl nisl euismod est, a vehicula magna risus congue tortor. Ut facilisis sagittis lectus, gravida porttitor nulla venenatis ut. Nulla facilisi. Pellentesque fringilla ultricies sodales. Nunc sit amet diam ut purus rhoncus eleifend accumsan vitae elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur lacus dui, auctor ac est eget, finibus porttitor elit. In ac turpis placerat, varius elit eu, condimentum est. Nullam id neque dolor. Nam lacinia quam eu velit.
        </div>
      </div>
      </div>
    )
}

export default Slideshow