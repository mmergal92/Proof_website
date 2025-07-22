import React, {useState} from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import Header from '../components/header.js';
import Footer from '../components/footer.js';
import tData from '../components/translations.js';

const Authors = () =>{
  return ( 
    <div className="author-page">
      <section className="author-hero asection">
        <img src="https://via.placeholder.com/1500x400" alt="Hero" />
        <h1>An obsession-worthy website in just 6 weeks</h1>
      </section>

      <section className="author-intro asection">
        <h2>Imagine a digital experience worth sharing</h2>
        <p>Design, development & strategy that make your website the best place online for your business.</p>
        <a href="#" className="author-btn">Learn More</a>
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
        <ul>
          <li>You’re ready to look as good online as you do in real life</li>
          <li>You’re tired of DIYing your website</li>
          <li>You want clarity, strategy & stunning visuals</li>
        </ul>
        <a href="#" className="author-btn">Get Started</a>
      </section>

      <section className="investment asection">
        <img src="https://via.placeholder.com/400x300" alt="Investment" />
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