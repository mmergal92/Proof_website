// import React, {useState} from 'react';
// import { useLocation } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

import hero from '../assets/hero.jpg';
import investment from '../assets/investment.jpg';


const Authors = () =>{
  return ( 
    <div className="author-page">
      <section className="author-hero asection">
        <div className="hero-content">
          <h1>An obsession-worthy website in just 6 weeks</h1>
        </div>
      </section>

      <section className="author-intro asection">
        <h2>Imagine a digital experience worth sharing</h2>
        <p>It’s time to feel proud of your website — the one place online you fully own. We craft intentional sites that make people fall in love with your business.</p>
        <a href="#" className="author-btn">Start your project</a>
      </section>

      <section className="promise asection">
        <h2>Your website is the only place nobody owns except you</h2>
        <p>Make it work for you 24/7 with a seamless design that attracts, converts, and delights.</p>
        <a href="#" className="author-btn">Learn More</a>
      </section>

      <section className="transformation asection">
        <h3>The 6-week transformation</h3>
        <p>Here’s exactly how we take you from an outdated, underwhelming site to an obsession-worthy one in six weeks:</p>
        <ul>
          <li>Week 1: Deep dive strategy session</li>
          <li>Week 2: Sitemap, wireframes & moodboard</li>
          <li>Week 3: Initial design concepts</li>
          <li>Week 4: Final design approval</li>
          <li>Week 5: Development & testing</li>
          <li>Week 6: Launch & celebration</li>
        </ul>
        <a href="#" className="author-btn">See the Process</a>
      </section>

      <section className="fit asection">
        <h3>This is for you if...</h3>
        <ol>
            <li>You’re craving a website that actually converts</li>
            <li>You’re done DIYing and ready for expert support</li>
            <li>You want a trusted partner to handle the process</li>
        </ol>
        <a href="#" className="author-btn">Get Started</a>
      </section>

      <section className="investment asection">
        <img loading="lazy" src={investment} alt="door" />
        <div className="investment-text">
          <h3>Investment</h3>
          <p>Our 6-week website experience starts at $6,000 USD. Payment plans available. Let’s make your dream website a reality.</p>
          <a href="#" className="author-btn">Book a Call</a>
        </div>
      </section>

      <section className="cta asection">
        <h3>We only offer three spots for this each month.</h3>
        <p>Ready to claim yours?</p>
        <a href="#" className="author-btn">Book Now</a>
      </section>
    </div>
  );
};

export default Authors;