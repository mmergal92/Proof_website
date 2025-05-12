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
  return (
    <div className="newhome-page">
       <header className="top-nav">
        <nav className="right-nav">
          <a href="/">work</a>
          <a href="/about">about</a>
          <a href="mailto:hello@itsproof.co">email us</a>
        </nav>
        <nav className="center-nav">
          <h1>Proof</h1>
        </nav>
        <nav className="left-nav">
          <a href="/" className="lang">en español</a>
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
            <button>&lt;</button>
            <blockquote>
              Can you mix sorrel with wray and neph? Half way tree and devon house on sunday with rum raisin ice cream, but small up yuhself.
              <p className="quotation-attr">— Alexia Arthurs, author of <em>How to Love a Jamaican</em></p>
            </blockquote>
            <button>&gt;</button>
          </div>
        </section>
      </main>

      <footer>
        <nav>
          <a href="mailto:hello@itsproof.co">email us</a>&nbsp;&nbsp;
          <a href="/">instagram</a>
        </nav>
        <div className="logo">PROOF</div>
        <p>2025. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Newhome;