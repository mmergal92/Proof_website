import React, { useRef } from 'react';

const AuthorForm = () => {
 
    const formRef = useRef();

  const handleSubmit = () => {
    setTimeout(() => {
      window.location.href = '/thankyou.html';
    }, 100);
  };

  return (
    <div className="author-inquiry-page">
      <section className="author-inquiry-hero">
        <div className="hero-inquiry-content">
          <h5>From Undiscoverable to Unforgettable: The 6-Week Transformation</h5>
          <h1>Let’s begin</h1>
          <p>Once you hit submit, we’ll set up a quick 20-minute call to walk you through how we work, make sure we’re a good fit, and answer any questions.</p>
        </div>
      </section>

        <section className="author-inquiry-form asection">
        <form 
          ref={formRef}
          name="author" 
          action="/thankyou.html"
          method="POST" 
          data-netlify="true" 
          className="author-form"
          netlify-honeypot="bot-field"
           onSubmit={handleSubmit}
        >
          {/* hidden honeypot field for bots */}
          <input type="hidden" name="form-name" value="author" />
          <p hidden>
            <label>Don’t fill this out: <input name="bot-field" /></label>
          </p>

          <div className="form-group">
            <input type="text" name="fullName" placeholder="Full name *" required />
            <input type="email" name="email" placeholder="Email *" required />
          </div>

          <input type="text" name="penName" placeholder="Pen name (if applicable)" />
          <input type="text" name="socialLinks" placeholder="Social media links" />
          <input type="text" name="website" placeholder="Current website" />
          <input type="text" name="howFound" placeholder="How did you find us?" />

          <div className="form-group">
            <p>What’s your genre *</p>
            <label><input type="checkbox" name="genre" value="Romance" /> Romance</label>
            <label><input type="checkbox" name="genre" value="Fantasy" /> Fantasy</label>
            <label><input type="checkbox" name="genre" value="Horror" /> Horror</label>
            <label><input type="checkbox" name="genre" value="Mystery" /> Mystery</label>
            <label><input type="checkbox" name="genre" value="Upmarket" /> Upmarket</label>
            <label><input type="checkbox" name="genre" value="Literary Fiction" /> Literary fiction</label>
          </div>

          <div className="form-group">
            <p>Do you have representation? *</p>
            <label><input type="radio" name="representation" value="Yes" required /> Yes</label>
            <label><input type="radio" name="representation" value="No" /> No</label>
          </div>

          <div className="form-group">
            <p>Do you plan to release a new book between September 2025–December 2026? *</p>
            <label><input type="radio" name="release" value="Yes" required /> Yes</label>
            <label><input type="radio" name="release" value="No" /> No</label>
          </div>

          <div className="form-group">
            <p>Are you self-published or traditionally published? *</p>
            <label><input type="radio" name="publishing" value="Self-published" required /> Self-published</label>
            <label><input type="radio" name="publishing" value="Traditionally published" /> Traditionally published</label>
          </div>

          <textarea name="project" placeholder="Tell us a bit about your project"></textarea>
          <textarea name="dates" placeholder="Are there any important dates or deadlines coming up for you we should be aware of?"></textarea>
          <textarea name="details" placeholder="Are there any other important details we should know about you or your work?"></textarea>

          <button type="submit" className="author-btn">Submit</button>
        </form>
        <p><i>An invitation from Segacy & Maria at <a href="https://itsproof.co">Proof Agency</a></i></p>
      </section>
    </div>
  );
};

export default AuthorForm;