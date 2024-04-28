import React from 'react';
import laptop from '../image/laptop.webp';
import laptop1 from '../image/laptop1.jpg'; 
import './NewSeason.css';
const Ns = () => {
    return (
  
        <div className="newSeason">
          <div className="nsItem">
            <img src={laptop} alt="" className="nsImg" />
          </div>
          <div className="nsItem">
            <h3 className="nsTitleSm">2024 NEW ARRIVALS</h3>
            <h1 className="nsTitle">New Season</h1>
            <h1 className="nsTitle">New Collection</h1>
            <a href="#nav">
              <button className="nsButton">CHOOSE YOUR STYLE</button>
            </a>
          </div>
          <div className="nsItem">
            <img src={laptop1} alt="" className="nsImg" />
          </div>
        </div>
         )
        }
        
        export default NewSeason
     
