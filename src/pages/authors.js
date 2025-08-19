// import React, {useState} from 'react';
// import { useLocation } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

import hero from '../assets/hero.webp';
import investment from '../assets/investment.webp';
import vector from '../assets/Vector.png'

const Authors = () =>{
  return ( 
    <div className="author-page asection">
      <section className="author-hero  "> 
        <div className="hero-content ">
            <h5>Three fiction authors. Three stunning transformations. This fall only.</h5>
            <h1>An obsession-worthy website in just 6-weeks</h1>
            <a href="#offer" className="author-btn extra-margin-top">See what's included</a>
        </div>
        <img src={hero} alt="hero" />
      </section>
    

      <section className="author-intro asection">
        <h2>Imagine a digital experience as <i>captivating</i> as your storytelling</h2>
        <p>You pour your heart into every scene, every character, every twist that keeps readers turning pages until 3am. Your website should feel just as intentional. A place where readers discover behind-the-scenes moments of their favorite books and fall in love with the storyteller behind them. Where casual visitors become the kind of fans who pre-order everything you write and recommend you to everyone they know.</p>
        <a href="#offer" className="author-btn">See how we do it</a>
      </section>


      <section className="page-break asection">
        <img loading="lazy" src={vector} alt="pagebreak" className="page-break-img" />
     </section>

      <section className="promise asection">
        <h2>Your website is where readers fall in love with more than just your books</h2>
        <p>An excellent website will...</p>
         <ul>
          <li>Give readers, book influencers, and industry professionals a clear sense of your unique voice and brand positioning.</li>
          <li>Enrich the reader experience and build pure, unadulterated excitement for your next release.</li>
          <li>Most importantly, look, feel, and sound like <b>you</b>.</li>
        </ul>
        <a href="#offer" className="author-btn">See how we do it</a>
      </section>

      <section className="transformation asection" id="offer">
        <div className="transformation-content">
            <h5>From Good Enough To Unforgettable</h5>
            <hr/>
        </div>
        <h1 className="transformation-header">The <i>6-week</i> transformation</h1>
        <p className="transformation-header theader">Before the new year you'll have an author website that actually feels like you—one that makes readers stay, explore, and eagerly sign up for your newsletter. We'll transform your online presence from good enough to unforgettable in just six weeks, with most of our collaboration happening early on as we build your foundation. Here's what we'll create together:</p>
         <div className="transformation-columns"><div className="transformation-hidden">
            </div>
            <div className="transformation-main-section">
                <ul className="transformation-main">
          <li><b>Author brand strategy</b> to clarify your unique voice, target readers, and upcoming book milestones, so every element works toward building your readership.</li>
          <li><b>Authentic messaging</b> that captures your personality and connects with your ideal readers on every page (written by humans who understand your genre).</li>
          <li><b>Visual identity</b> design that reflects your author brand with a curated mood board, typography, color palette, and optional author logo.</li>
          <li><b>Custom website design</b> of up to four pages that showcases your books, builds excitement for future releases, plus branded templates for additional content.</li>
          <li><b>Reader engagement features</b> like author spotlights, character profiles, or series extras to give fans deeper connection to your stories.</li>
          <li><b>Mobile-optimized development</b> that's accessible, easy for you to update, and built to grow with your publishing career.</li>
          <li><b>Newsletter integration</b> using ConvertKit, MailerLite, Mailchimp, or your preferred platform to capture and nurture your growing readership.</li>
          <li><b>Website training</b> so you can confidently update content, add new books, and maintain your site.</li>
          <li><b>Content migration</b> for anything you'd like to bring over from your current site.</li>
          <li><b>Launch kit</b> with social media templates to celebrate your new author platform and promote upcoming releases.</li>
        </ul>
        <a href="/authorinquiryform" className="author-btn left-align">Reserve my spot</a>
                </div>
        </div>
      </section>

      <section className="fit asection">
        <h3>This is for you if...</h3>
        <ol className="less-space">
            <li>You're an established fiction author ready to invest in building a professional online presence.</li>
            <li>You want a website that feels like an extension of your voice and vision, not a generic template.</li>
            <li>You're tired of cobbling together a DIY site that doesn't reflect the quality of your writing.</li>
            <li>You want a design partner who understands genre fiction and genuinely loves the books you write.</li>
            <li>You'd rather spend your time writing your next book than wrestling with website frustrations.</li>
        </ol>
        <a href="/authorinquiryform" className=" more-space author-btn">Reserve my spot</a>
          <div className="fit-content">
            <p>And don't you want a break from<br/>fighting with the algorithm?</p>
        </div>
      </section>
<hr/>
      <section className="investment asection">
        <img loading="lazy" src={investment} alt="door" />
        <div className="investment-text">
          <h1>Investment</h1>
          <h4><b>From Good Enough to Unforgettable:</b><br/>The Author Platform Transformation</h4>
          <span className="investment-price-notes">We're launching our author specialization this summer with three founding clients. You'll get our complete transformation process—the same personalized strategy, custom design, and dedicated collaboration we'll offer all future author clients—just at founding client pricing.</span>
          <div className="iprice">
            <span className="investment-price">$4,000*</span><br/>
            <span className="investment-price-subtext">(regular rate $6,000 starting 2026)</span>
          </div>
          <div className="investment-content">
            <p><span className="investment-content-heading">*Why the special rate? Fantastic question!</span></p>
            <ol>
                <li>We're passionate about working with fiction authors and want to build lasting relationships in genre and upmarket fiction communities.</li>
                <li>We want to perfect our author-specific process and create compelling case studies. You get the benefit of working with a team 100% focused on making these first projects exceptional.</li>
            </ol>
        </div>
          <a href="/authorinquiryform" className="author-btn">Reserve my spot</a>
        </div>
        <hr/>
      </section>

     <section className="page-break asection">
        <img loading="lazy" src={vector} alt="pagebreak" className="page-break-img" />
     </section>

      <section className="cta asection">
        <h5>Ready to create something magical?</h5>
        <h2>We’re only offering three spots for this launch.</h2>
        <p>Interested in being one of our three founding author clients? We'll start with a (very) quick questionnaire. Then, we'll schedule a 20-minute call to discuss the process and make sure we're the right fit for each other. Once we're aligned, we'll kick off your transformation right away!</p>
        <p><b>Three spots only. Deadline: September 30th</b><br/>Let's make your author platform unforgettable.</p>
        <a href="/authorinquiryform" className="author-btn">I'm ready</a>
      </section>


     <section className="footer-author asection">
        <h6>An invitation from Segacy & Maria at <a href="https://itsproof.co/" target="_blank">Proof Agency</a></h6>
        <p className="footer-author-text">This page isn't public (yet). You're seeing it because we think you'd be a great fit for our new author program. We're hand-selecting three fiction authors whose work and vision align with our mission to create unforgettable author platforms. Feel free to share with other fiction writers you know!</p>
     </section>
    </div>
  );
};

export default Authors;