import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Video from '../components/video'
import Spanish from './spanish'
import Rotation from '../components/rotation'
import circletext_nologo from '../assets/circletext_nologo.png'
import pexels_mart_production from "../assets/pexels_mart_production.mp4";
import annaliseImg from '../assets/annalisenew.png';
import ballyhacImg from '../assets/ballyhacbg.png';
import ballyhacTitle from '../assets/ballyhactitle.png';
import enclavesImg from '../assets/enclavesnew.png';
import riddimsImg from '../assets/loremnew.png';
import annaliseVideo from '../assets/annalise.mp4';
import enclavesVideo from '../assets/enclaves.mp4';
import riddimsVideo from '../assets/riddims.mp4';
import browserImg from '../assets/browser.png';

import previous from '../assets/previous.png';
import next from '../assets/next.png';



const projects = [
  {
    img: annaliseImg,
    video: annaliseVideo,
    overlayImg: browserImg,
  },
  {
    img: ballyhacImg,
    video: null,
    overlayImg: ballyhacTitle,
  },
  {
    img: riddimsImg,
    video: riddimsVideo,
    overlayImg: browserImg,
  },
  {
    img: enclavesImg,
    video: enclavesVideo,
    overlayImg: browserImg,
  },
];

const testimonials = [
  {
    quote:
      "Can you mix sorrel with wray and neph? Half way tree and devon house on sunday with rum raisin ice cream, but small up yuhself.",
    author: "Alexia Arthurs",
    work: "Author of How to Love a Jamaican",
  },
  {
    quote:
"Proof stood out for their professionalism, responsiveness, unique understanding of and commitment to community-based organizations. Maria and Segacy were wonderful to work with and made the project experience efficient and enjoyable. They were responsive to our ideas and were proactive in identifying additional opportunities to improve our web environment on the back-end.",
author: "Maia Dillane",
work: "Director of Research and Evaluation at AAFSC",
},
{
quote:
"After taking a look at their work and talking a bit, it was a no brainer. I’m so glad to have them on my team.",
author: "Annalise Lockhart",
work: "Film Director & Writer (repeat client)",
},
{
  quote:
"It was such a pleasure working together to bring this project to life.", 
 author: "Sierra Van Ryck deGroot",
  work: "Deputy Director at Museum Hue",
  },
  // Add more testimonials here...
];

  
function WorkTile({ img, video, overlayImg}) {
  return (
    <div
      className="work-tile"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        aspectRatio: '16 / 9',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
     <div style={{ textAlign: 'center' }}>
        {overlayImg && (
          <img
            src={overlayImg}
            alt=""
            style={{
              maxWidth: '65%',
              display: 'block',
              margin: 'auto',
              padding: 0,
            }}
          />
        )}
        {video && (
          <video
            src={video}
            autoPlay
            muted
            loop
            playsInline
            style={{
              maxWidth: '65%',
              display: 'block',
              margin: 'auto',
            }}
          />
        )}
      </div>
    </div>
  );
}

const Newhome = () =>{

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

const { quote, author, work } = testimonials[currentIndex];


  return (
    <div className="newhome-page">
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

      <main className="home-content">
        <h1 className="headline">
          Fresh and imaginative experiences for the internet and elsewhere.
        </h1>

        <section className="work-grid-wrapper">
          <div className="work-grid">
            {projects.map((p, idx) => (
              <WorkTile key={idx} img={p.img} overlayImg={p.overlayImg} video={p.video} />
            ))}
          </div>
        </section>       

        <section className="testimonial">
          <p className="label">Testimonials</p>
         
          <div className="quote-nav">
            <button onClick={handlePrevious}>
              <img src={previous} alt="Previous" />
            </button>

            <blockquote>
              <p className="quote-text">
              {quote}              
              </p>
            </blockquote>

            <button onClick={handleNext}>
              <img src={next} alt="Next" />
            </button>
          </div>

          <p className="quotation-attr">
                — {author}, <em>{work}</em>
              </p>

        </section>
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

export default Newhome;