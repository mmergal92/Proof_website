import React, {useState} from 'react';
import Home from './home';
import Video from '../components/video'
import { Link } from 'react-router-dom';
import pexels_mart_production from "../assets/pexels_mart_production.mp4";
import circletext_nologo from "../assets/circletext_nologo.png"

const Spanish = () =>{
      return ( 
        <div className= 'home'>
              <Video />
        <div className = "middle-container">
            <a href="mailto:maria@itsproof.co" target="_blank" rel="noreferrer noopener" ><img src={circletext_nologo}  /><h1>P</h1></a>
        </div>
        <div className = "right-container">
        <div className ="home-text">
          <h2>pr<i>oo</i>f</h2>
          <br/>
          <br/><p>proof es una agencia creativa que elabora experiencias innovadoras e inclusivas para el mundo digital.</p> <br/>
          <br/>
          <p>proof fue cofundada por <span className ="link"><a href="https://www.segacyroberts.com/" target="_blank" rel="noreferrer noopener" >Segacy</a></span> y <span className ="link"><a href="https://mariamergal.dev/" target="_blank" rel="noreferrer noopener" >Maria,</a></span> dos neoyorquinas de primera generación y amigas de la infancia, para amplificar las historias de las mujeres de color y transformar el mundo a través del diseño y tecnología. Trabajamos con emprendedores y empresas de todos tamaños para contar sus historias a través de <span className="italics_p">estrategia, diseño</span> y <span className="italics_p">desarrollo.</span></p>
          <br/>
          <br/>
          <p><Link to="/">in english</Link></p>
        </div>
    </div>
    </div>
        )
}

export default Spanish;