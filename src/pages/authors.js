// import React, {useState} from 'react';
// import { useLocation } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

import hero from '../assets/hero.jpg';
import investment from '../assets/investment.jpg';
import vector from '../assets/Vector.png'

const Authors = () =>{
  return ( 
    <div className="author-page">
      <section className="author-hero "> 
        <img loading="lazy" src={hero} alt="beach" className="hero-bg" />
          <div className="hero-content">
            <h5>Three authors. Three websites. One summer only.</h5>
            <h1>An obsession-worthy <br/>website in just 6-weeks</h1>
            <a href="#" className="author-hero-btn">Unlock your dream site</a>
        </div>
      </section>

      <section className="author-intro asection">
        <h2>Imagine a digital experience as <i>captivating</i> as your writing</h2>
        <p>What do you want for your writing career this year? What about in the next decade? A well-crafted website can help open the doors to that dream and connect you with readers, agents, and unexpected opportunities.</p>
        <a href="#" className="author-btn">Unlock your dream website</a>
      </section>


      <section className="page-break asection">
        <img loading="lazy" src={vector} alt="pagebreak" className="page-break-img" />
     </section>

      <section className="promise asection">
        <h2>Your website is the <i>only</i> place online you own entirely.</h2>
        <p>So it better do its job! An excellent website will...</p>
         <ul>
          <li>Give agents and publishers a sense of your voice and market positioning.</li>
          <li>Enrich the reader experience and build pure, unadulterated excitement for your next release.</li>
          <li>Most importantly, look, feel, and sound like <b>you</b>.</li>
        </ul>
        <a href="#" className="author-btn">Unlock your dream website</a>
      </section>

      <section className="transformation asection">
        <div className="transformation-content">
            <p className="transformation-header">From Undiscovered To Unforgettable</p>
            <hr/>
        </div>
        <h1 className="transformation-header">The <i>6-week</i> transformation</h1>
        <p className="transformation-header">By Fall, you’ll have your own corner of the internet that’s thoughtful, lasting, and true to your work. This 6-week process moves from strategy to launch, with most of your input needed in the first 3 weeks as we build the foundation. This package includes:</p>
        <ul className="transformation-main">
          <li>Strategic planning to clarify your vision, brand, and upcoming milestones, so our sitemap and website features support you long-term.</li>
          <li>Copywriting support that’s thoughtful, voice-driven, and tailored to every page’s goals (never with AI).</li>
          <li>Creative direction & visual identity design to set the tone with a moodboard, curated typography and color palette, and an optional type-based logo</li>
          <li>Bespoke design of up to four pages that elevates your work and excite readers, plus custom branded templates for additional pages.</li>
          <li>A special world-building feature. Think: a behind-the-scenes moment, quiz, or glossary to enhance your work upcoming release (we can help you brainstorm!).</li>
          <li>Responsive, mobile-friendly development that’s accessible, easy to update, and built to last.</li>
          <li>Email integration using ConvertKit, MailerLite, Mailchimp, or any integration of choice (optional)</li>
          <li>Backend training so you can update your site with confidence and ease.</li>
          <li>Content migration for content you’d like to move over from your current site (optional).</li>
          <li>Bonus launch kit with social media templates to celebrate your new website (and upcoming book release if applicable)</li>
        </ul>
        <a href="#" className="author-btn">Unlock your dream website</a>
      </section>

      <section className="fit asection">
        <h3>This is for you if...</h3>
        <ol>
            <li>You have a book release coming up between September 2025 and December 2026.</li>
            <li>You want a website that feels like an extension of your voice and vision.</li>
            <li>You’re tired of duct-taping together a Squarespace site you hate don’t love.</li>
            <li>You want a design partner who loves reading as much as you do.</li>
            <li>You’d rather spend your time writing than wrestling with your website.</li>
        </ol>
        <a href="#" className="author-btn">Unlock your dream website</a>
          <div className="fit-content">
            <h2>And aren’t you tired of fighting<br/> with the algorithm?</h2>
        </div>
      </section>

      <section className="investment asection">
        <img loading="lazy" src={investment} alt="door" />
        <div className="investment-text">
          <h1>Investment</h1>
          <h4>From Undiscovered to Unforgettable: <br/>The Six-Week Transformation</h4>
          <div>
            <p>Normal price: $6,000 </p>
            <p><b>Introductory rate: $4,000*</b></p>
          </div>
          <p>We’re offering a one-time discount of $2,000 off for three authors with books launching between September 2025 and December 2026. You’ll get the same close collaboration, custom strategy, and thoughtful design we offer all our clients—just at a lower rate, for a few early partners.</p>
          <div className="investment-content">
            <h2>*Why the special rate?</h2>
            <p>Fantastic question! It’s three-fold:</p>
            <ol>
                <li>We LOVE working with writers and we’d like to work with more (eventually, building a one-stop shop just for you).</li>
                <li>We’re offering this package at a reduced rate in exchange for two things: your creative trust and permission to share your project publicly.</li>
                <li>It’s for a limited-time only for just  three spots. First come, first booked. : )</li>
            </ol>
        </div>
          <a href="#" className="author-btn">Unlock your dream website</a>
        </div>
      </section>

     <section className="page-break asection">
        <img loading="lazy" src={vector} alt="pagebreak" className="page-break-img" />
     </section>

      <section className="cta asection">
        <p>Ready to create something magical?</p>
        <h2>We’re only offering three spots for this pilot.</h2>
        <p>If you’re interested in being one of the three authors we partner with this summer, we’ll ask you to fill out a (truly) short questionnaire. Then, we’ll set up a 20-min call to share more about the process and see if this is the right fit for you. Once we’re aligned, we’ll kick off right away!</p>
        <p>This offer ends August 1. Let’s make this summer count.</p>
        <a href="#" className="author-btn">Unlock your dream website</a>
      </section>


     <section className="cta asection">
        <h4>An invitation from Segacy & Maria at Proof Agency</h4>
        <h6>This page isn't public (yet). You're seeing this because we admire your work and think you might be interested in collaborating with us. Please feel free to share this invitation to like-minded authors in your network.</h6>
     </section>
    </div>
  );
};

export default Authors;