import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Pexels_eva_elijas from "../assets/pexels_eva_elijas.mp4";
import Video from '../components/video'
import Spanish from './spanish'
import Rotation from '../components/rotation'

const Home = () =>{
      return ( 
        <div className= 'home'>
              <Video />
              {/* <div className = "middle-container">
                <Rotation />
              </div> */}
              <div className = "right-container">
                  <div className ="home-text">
                    <h2>Proof is a creative agency crafting innovative and inclusive experiences for the digital world.</h2> <br/>
                    <p>Proof was cofounded by <span className ="link"><a href="https://www.segacyroberts.com/" target="_blank" rel="noreferrer noopener" >Segacy</a></span> and <span className="link"><a href="https://mariamergal.dev/" target="_blank" rel="noreferrer noopener" >Maria,</a></span> two first-gen New Yorkers and childhood friends, to amplify the stories of women of color and transform the world through design and technology. We work with entrepreneurs and businesses of all sizes to tell their stories through <span className="italics_p">strategy, design,</span> and <span className="italics_p">development.</span></p>
                    <br/>
                    <br/>
                    <p><Link to="/spanish">en español</Link></p>
                  </div>
              </div>
        </div>  
        )
}

export default Home;