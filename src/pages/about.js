import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Video from '../components/video'
import Spanish from './spanish'
import Rotation from '../components/rotation'
import circletext_nologo from '../assets/circletext_nologo.png'
import pexels_mart_production from "../assets/pexels_mart_production.mp4";

import React from "react";


const About = () =>{
  return ( 
    <div className="about-page">
      <header className="top-nav">
        <nav>
          <a href="/">work</a>
          <a href="/about">about</a>
          <a href="mailto:hello@itsproof.co">email us</a>
          <a href="/" className="lang">en español</a>
        </nav>
      </header>

      <main className="about-content">
        <h1>
          Proof is the design and technology practice of <span className="underline">Segacy</span> and <span className="underline">Maria</span>, two childhood friends from NYC.
        </h1>
        <p>
          Thanks for stopping by! In our independent careers, we’ve had the pleasure of working for companies like <a href="/">Spotify</a>, <a href="/">Book of the Month</a>, and <a href="/">This One</a>. We love building things for thoughtful and imaginative people looking to make an impact.
        </p>
        <p>
          When we’re not at our desks, we love traveling, reading, and hanging out without purpose. We’d love to work together! Get in touch by emailing us at <a href="mailto:hello@itsproof.co">hello@itsproof.co</a>.
        </p>

        <div className="about-services">
          <div>
            <h2>Services</h2>
            <ul>
              <li>Strategy</li>
              <li>Web Design & Development</li>
              <li>App Design & Development</li>
              <li>Branding</li>
              <li>Digital Design</li>
              <li>Copywriting & Editing</li>
            </ul>
          </div>
          <div>
            <h2>Capabilities</h2>
            <ul>
              <li>Informational websites</li>
              <li>Editorial platforms</li>
              <li>Portfolios & microsites</li>
              <li>Pitch & tone decks</li>
              <li>Online shops</li>
              <li>Third-party integrations</li>
              <li>Strategic tktk</li>
            </ul>
          </div>
        </div>

        <p className="wellness-note">
          <em>As a part of the Proof family, we’ve created Sunday Lighthouse, dedicated to projects in the wellness space.</em>
        </p>
      </main>

      <footer>
        <nav>
          <a href="mailto:hello@itsproof.co">email us</a>
          <a href="/">instagram</a>
        </nav>
        <p>2025. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default About;