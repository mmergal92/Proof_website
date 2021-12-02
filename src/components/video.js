import React, {useState} from 'react';
import Pexels_eva_elijas from "../assets/pexels_eva_elijas.mp4";

const Video = (props) =>{
      return ( 
        // <div className= 'home'>
              <div className = "left-container">
                  <video autoPlay loop muted className="video-style">
                    <source src={Pexels_eva_elijas} type="video/mp4" />
                </video>
              </div>
        // </div>  
        )
}

export default Video;