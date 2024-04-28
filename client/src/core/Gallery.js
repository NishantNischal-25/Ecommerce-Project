import React from 'react';
import './Gallery.css';

const Gallery = () => {
  return (
  
        <div className="gallery">
          <div className="galleryItem">
            <h1 className="galleryTitle">You Have Got This!</h1>
            <img src="https://img.freepik.com/premium-photo/vertical-shot-half-open-laptop-isolated-dark-background_665346-17216.jpg?w=360" alt="" className="galleryImg" />
          </div>
          <div className="galleryItem">
            <img src="https://img.freepik.com/premium-photo/laptop-computer-black-shelf-vertical-background_118047-12478.jpg?w=360" alt="" className="galleryImg" />
            <h1 className="galleryTitle">This is the First Day of Your New Life</h1>
          </div>
          <div className="galleryItem">
            <h1 className="galleryTitle">Just Do it!</h1>
            <img src="https://media.istockphoto.com/id/1435230642/photo/non-people-image-of-desk-setups-work-environments-vertical-view-of-laptop-with-green-screen.jpg?s=612x612&w=0&k=20&c=Np-fBVEroLyu1YZHxsTHfwzIKw6NQRtSwqJO8FTTzl4=" alt="" className="galleryImg" />
          </div>
        </div>
      )
    }
    
    export default Gallery
