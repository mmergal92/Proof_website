import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Video from '../components/video'
import Spanish from './spanish'
import Rotation from '../components/rotation'
import circletext_nologo from '../assets/circletext_nologo.png'
import pexels_mart_production from "../assets/pexels_mart_production.mp4";


const menuToggle = document.querySelector('.menu-toggle');
  const mobileNav = document.getElementById('mobileNav');
  const closeMenu = document.querySelector('.close-menu');

  menuToggle.addEventListener('click', () => {
    mobileNav.classList.add('active');
  });

  closeMenu.addEventListener('click', () => {
    mobileNav.classList.remove('active');
  });

const About = () =>{
  return ( 
    <div className="about-page">
       <header class="site-header">
          <div className="nav-container">
            <nav className="nav-left">
              <a href="#work">Work</a>
              <a href="#about">About</a>
              <a href="mailto:hello@itsproof.co">Email us</a>
            </nav>

            <div className="logo">PROOF</div>

            <nav className="nav-right">
              <a href="/" className="lang">En español</a>
            </nav>

            <button className="menu-toggle" aria-label="Open menu">&#9776;</button>
          </div>

          <nav className="mobile-nav" id="mobileNav">
            <button className="close-menu" aria-label="Close menu">&times;</button>
            <ul>s
              <li><a href="#work">Work</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#email">Email us</a></li>
              <li className="social"><a href="https://instagram.com" target="_blank">Instagram</a></li>
            </ul>
          </nav>
        </header>

        
      <main className="about-content">
        <h4 className="about-header">
          &nbsp;&nbsp;&nbsp;&nbsp;Proof is the design and technology practice of <span className="underline">Segacy</span> and <span className="underline">Maria</span>, two childhood friends from NYC.
        </h4>
        <p className="about-text">
          Thanks for stopping by! In our independent careers, we’ve had the pleasure of working for companies like <a href="/">Spotify</a>, <a href="/">Book of the Month</a>, and <a href="/">This One</a>. We love building things for thoughtful and imaginative people looking to make an impact.
       <br/>&nbsp;
       <br/>
          When we’re not at our desks, we love traveling, reading, and hanging out without purpose. We’d love to work together! Get in touch by emailing us at <a href="mailto:hello@itsproof.co">hello@itsproof.co</a>.
        </p>

        <div className="about-services">
          <div>
            <h4>Services</h4>
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
            <h4>Capabilities</h4>
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
          <a href="mailto:hello@itsproof.co">Email us</a>&nbsp;&nbsp;
          <a href="/">Instagram</a>
        </nav>
        <nav className="center-nav logo">
          <h1>Proof</h1>
        </nav>
        <nav className="footer-right-nav">2025. All Rights Reserved.</nav>
      </footer>
    </div>
  );
}

export default About;