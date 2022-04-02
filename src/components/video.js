import React, {useState} from 'react';
import pexels_mart_production from "../assets/pexels_mart_production.mp4";

const Video = (props) =>{
      return ( 
        // <div className= 'home'>
              <div className = "left-container">
                  <video autoPlay loop muted className="video-style">
                    <source src={pexels_mart_production} type="video/mp4" />
                </video>
              </div>
        // </div>  
        )
}

export default Video;