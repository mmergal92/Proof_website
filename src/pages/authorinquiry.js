import React, { useRef } from 'react';

const AuthorForm = () => {
 
    const formRef = useRef();

  const handleSubmit = () => {
    setTimeout(() => {
      window.location.href = '/thankyou';
    }, 100);
  };

  return (
    <div className="author-inquiry-page author-page">

        <div className="viewoffer">
          <a href="/authors" className="author-hero-btn">View offer</a>
        </div>

      <section className="author-inquiry-hero">
        <div className="hero-inquiry-content">
          <h5>From Good Enough to Unforgettable: The Author Platform Transformation</h5>
          <h1>Let’s begin</h1>
          <p>Once you hit submit, we’ll set up a quick 20-minute call to walk you through how we work, make sure we’re a good fit, and answer any questions.</p>
        </div>
      </section>

      <section className="author-inquiry-form asection">
        <form 
          ref={formRef}
          name="author" 
          action="/thankyou"
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

         <div className="form-group two-col">
            <div className="input-half">
                <label htmlFor="fullName">Full name *</label>
                <input type="text" id="fullName" name="fullName" required />
            </div>
            <div className="input-half">
                <label htmlFor="email">Email *</label>
                <input type="email" id="email" name="email" required />
            </div>
         </div>

          <label htmlFor="penName">Pen name (if applicable)</label>
          <input type="text" id="penName" name="penName" />

          <label htmlFor="socialLinks">
            Social media links
          </label>
          <input type="text" id="socialLinks" name="socialLinks" />

          <label htmlFor="website">Current website (if applicable)</label>
          <input type="text" id="website" name="website" />

          <label htmlFor="howFound">How did you find us?</label>
          <input type="text" id="howFound" name="howFound" />

          <div className="form-group checkboxes">
            <p className="label">What’s your genre?*</p>
            <p className="sub-label">Choose any that apply</p>
            <label>
              <input type="checkbox" name="genre" value="Romance" /> Romance
            </label>
            <label>
              <input type="checkbox" name="genre" value="Fantasy" /> Fantasy
            </label>
            <label>
              <input type="checkbox" name="genre" value="Horror" /> Horror
            </label>
            <label>
              <input type="checkbox" name="genre" value="Mystery" /> Mystery
            </label>
            <label>
              <input type="checkbox" name="genre" value="Upmarket" /> Upmarket
            </label>
            <label>
              <input type="checkbox" name="genre" value="Literary Fiction" /> Literary fiction
            </label>
          </div>

        <div className="form-group checkboxes">
            <p className="label">How many books have you published?*</p>
            <label>
              <input type="radio" name="genre" value="one" /> 1-2 books
            </label>
            <label>
              <input type="radio" name="genre" value="some" /> 3-5 books
            </label>
            <label>
              <input type="radio" name="genre" value="many" /> 6+ books
            </label>
            <label>
              <input type="radio" name="genre" value="none" /> I have a completed manuscript/book deal but haven't published yet
            </label>
            <label>
              <input type="radio" name="genre" value="other" /> Other
            </label>
          </div>

          <div className="form-group checkboxes">
            <p className="label">How do you publish your books?*</p>
            <label>
              <input type="radio" name="publishing" value="Self-published" /> Self-published
            </label>
            <label>
              <input type="radio" name="publishing" value="Traditionally published" /> Traditionally published
            </label>
            <label>
              <input type="radio" name="publishing" value="Both" /> Both
            </label>
          </div>

          <div className="form-group checkboxes">
            <p className="label">Do you have an email newsletter?*</p>
            <label>
              <input type="radio" name="release" value="Yes" required /> Yes
            </label>
            <label>
              <input type="radio" name="release" value="No" /> No
            </label>
          </div>

          <div className="form-group checkboxes">
            <p className="label">Do you have representation?*</p>
            <label>
              <input type="radio" name="representation" value="Yes" /> Yes
            </label>
            <label>
              <input type="radio" name="representation" value="No" /> No
            </label>
          </div>




          <label htmlFor="project">Tell us about your author goals and what you'd love to see in your new website.</label>
          <textarea id="project" name="project"></textarea>

          <label htmlFor="dates">
            Any upcoming book launches or important dates we should know about?
          </label>
          <textarea id="dates" name="dates"></textarea>

          <label htmlFor="details">
            Are there any other important details we should know about you or your work? 
          </label>
          <textarea id="details" name="details"></textarea>

          <button type="submit" className="author-hero-thanks-btn">Submit</button>
        </form>

        <div className="footer-author white-footer asection">
            <h6>An invitation from Segacy & Maria at <a href="https://itsproof.co/" target="_blank">Proof Agency</a></h6>
            <p className="footer-author-text">This page isn't public (yet). You're seeing it because we think you'd be a great fit for our new author program. We're hand-selecting three fiction authors whose work and vision align with our mission to create unforgettable author platforms. Feel free to share with other fiction writers you know!</p>
        </div>      
     </section>
    </div>
  );
};

export default AuthorForm;