import React, {useState} from 'react';
import { loremText } from '../components/loremtext';
import Home from './home';
import Video from '../components/video'
import { Link } from 'react-router-dom';
import pexels_mart_production from "../assets/pexels_mart_production.mp4";
import circletext_nologo from "../assets/circletext_nologo.png"

class Loremipsum extends Component {
    state = {
      showCopyModal: false,
      numberOfParagraphs: '',
      text: '',
    };
  
    handleSubmit = e => {
      e.preventDefault();
      const numberOfParagraphs = parseFloat(this.state.numberOfParagraphs);
      const HTMLParagraphs = loremText.getAllParagraphs(numberOfParagraphs);
      this.setState({ text: HTMLParagraphs });
    };
    handleCopy = () => {
      const el = document.createElement('textarea'); // Create a <textarea> element
  
      // Convert html string to text to remove the <p></p> elements
      const tmp = document.createElement('DIV');
      tmp.innerHTML = this.state.text;
      el.innerHTML = tmp.textContent || tmp.innerText || ''; // Set the <textarea> value to the string that you want copied
  
      el.setAttribute('readonly', ''); // Make it readonly to be tamper-proof
      el.style.position = 'absolute';
      el.style.left = '-9999px'; // Move outside the screen to make it invisible
      document.body.appendChild(el); // Append the <textarea> element to the HTML document
      const selected =
        document.getSelection().rangeCount > 0 // Check if there is any content selected previously
          ? document.getSelection().getRangeAt(0) // Store selection if found
          : false; // Mark as false to know no selection existed before
      el.select(); // Select the <textarea> content
      document.execCommand('copy'); // Copy - only works as a result of a user action (e.g. click events)
      document.body.removeChild(el); // Remove the <textarea> element
      if (selected) {
        // If a selection existed before copying
        document.getSelection().removeAllRanges(); // Unselect everything on the HTML document
        document.getSelection().addRange(selected); // Restore the original selection
      }
      this.setState({ showCopyModal: true });
      setTimeout(() => this.setState({ showCopyModal: false }), 1000);
    };
    render() {
      return (
        <div>
  
          <div className="main-content">
            <h1 className="title">
              <img className="title-image" src="stranger-ipsum-title.png" alt="Stranger Ipsum" />
            </h1>
            <p className="description">
              Specify the number of paragraphs of text you would like to generate.
            </p>
            <form action="/" method="POST" onSubmit={this.handleSubmit}>
              <input
                type="number"
                className="paragraph-number"
                name="numberOfParagraphs"
                onChange={e => this.setState({ numberOfParagraphs: e.target.value })}
                value={this.state.numberOfParagraphs}
              />
              <input type="submit" value="Generate" className="generate-button" />
            </form>
            {this.state.text && (
              <>
                <a className="copy-button" onClick={this.handleCopy}>
                  Copy Text
                </a>
                <div
                  id="targetText"
                  className="generated-text"
                  dangerouslySetInnerHTML={{ __html: this.state.text }}
                  ref={ref => (this.text = ref)}
                />
              </>
            )}
          </div>
  
          <div
            id="copyOverlay"
            className={`${this.state.showCopyModal ? 'modal--show' : 'modal--hidden'}`}
          >
            <div id="copyText">
              <p>Copied!</p>
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default Loremipsum;

