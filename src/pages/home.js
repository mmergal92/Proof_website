import React, {useState} from 'react';
import Pexels_eva_elijas from "../assets/pexels_eva_elijas.mp4";
import Maria_image from "../assets/maria_image.jpg";

const Home = (props) =>{
      return ( 
        <div className= 'home'>
              <div className = "left-container">
                  <video autoPlay loop muted className="video-style">
                    <source src={Pexels_eva_elijas} type="video/mp4" />
                </video>
              </div>
              <div className = "right-container">
                  <div className ="home-text">
                    <h2>Proof is a creative agency crafting innovative and inclusive experiences for the digital world.</h2> <br/>
                    <p>Proof was cofounded by <span className ="link"><a href="https://www.segacyroberts.com/" target="_blank" rel="noreferrer noopener" >Segacy</a></span> and <span className="link"><a href="https://mariamergal.dev/" target="_blank" rel="noreferrer noopener" >Maria,</a></span> two first-gen New Yorkers and childhood friends, to amplify the stories of women of color and transform the world through design and technology. We work with entrepreneurs and businesses of all sizes to tell their stories through <span className="italics_p">strategy, design,</span> and <span className="italics_p">development.</span></p>
                    <br/>
                    <br/>
                    <p><a href="mailto:maria@itsproof.co" target="_blank" rel="noreferrer noopener" >Contact us</a></p>
                  </div>
              </div>
        </div>  
        )
}

export default Home;