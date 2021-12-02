import React, {useState} from 'react';
import Pexels_eva_elijas from "../assets/pexels_eva_elijas.mp4";
import Home from './home';
import Video from '../components/video'
import { Link } from 'react-router-dom';

const Spanish = () =>{
      return ( 
        <div className= 'home'>
              <Video />
        <div className = "right-container">
        <div className ="home-text">
          <h2>Proof es una agencia creativa que elabora experiencias innovadoras e inclusivas para el mundo digital.</h2> <br/>
          <p>Proof fue cofundada por <span className ="link"><a href="https://www.segacyroberts.com/" target="_blank" rel="noreferrer noopener" >Segacy</a></span> y <span className ="link"><a href="https://mariamergal.dev/" target="_blank" rel="noreferrer noopener" >Maria,</a></span> dos neoyorquinas de primera generación y amigas de la infancia, para amplificar las historias de las mujeres de color y transformar el mundo a través del diseño y tecnología. Trabajamos con emprendedores y empresas de todos tamaños para contar sus historias a través de <span className="italics_p">estrategia, diseño</span> y <span className="italics_p">desarrollo.</span></p>
          <br/>
          <br/>
          <p><Link to="/">in english</Link></p>
        </div>
    </div>
    </div>
        )
}

export default Spanish;