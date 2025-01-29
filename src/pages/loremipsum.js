import React, {useState, useEffect} from 'react';
import { loremText } from '../components/loremtext';
import Home from './home';
import Video from '../components/video'
import { Link } from 'react-router-dom';
import pexels_mart_production from "../assets/pexels_mart_production.mp4";
import circletext_nologo from "../assets/circletext_nologo.png"


const Loremipsum = () => {
    const [showCopyModal, setShowCopyModal] = useState(false);
    const [numberOfParagraphs, setNumberOfParagraphs] = useState('');
    const [text, setText] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const number = parseFloat(numberOfParagraphs);
      const HTMLParagraphs = loremText.getAllParagraphs(number);
      setText(HTMLParagraphs);
    };
  
    const handleCopy = () => {
      const el = document.createElement('textarea'); // Create a <textarea> element
  
      // Convert HTML string to text to remove the <p></p> elements
      const tmp = document.createElement('DIV');
      tmp.innerHTML = text;
      el.innerHTML = tmp.textContent || tmp.innerText || ''; // Set the <textarea> value to the string to be copied
  
    //   el.setAttribute('readonly', ''); // Make it readonly to be tamper-proof
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
  
      setShowCopyModal(true);
      setTimeout(() => setShowCopyModal(false), 1000);
    };


      return (
        <div className ="loremsite">
  
          <div className="main-content ">
          <div className="left-lorem-container">
                <div className ="language-button">
                    <button className="plaintain-button" >
                            Plaintain
                    </button>
                    <button className="platano-button" >
                            Platano
                    </button>
                </div>
            <h1 className="title">Riddims
            </h1>
            <p className="description">
              Specify the number of paragraphs of text you would like to generate.
            </p>
            <form action="/" method="POST" onSubmit={handleSubmit}>
              <input
                type="number"
                className="paragraph-number"
                name="numberOfParagraphs"
                onChange={(e) => setNumberOfParagraphs(e.target.value)}
                value={numberOfParagraphs}
              />
              <input type="submit" value="Enter" className="generate-button" />
            </form>
            </div>
            <div className="right-lorem-container">
                {text && (
                <>
                    <button className="copy-button" onClick={handleCopy}>
                    Copy Text
                    </button>
                
                
                    <div
                    id="targetText"
                    className="generated-text"
                    dangerouslySetInnerHTML={{ __html: text }}
                    />
                
                </>
                
                )}
                    </div>
                    <div id="copyOverlay" className={`${showCopyModal ? 'modal--show' : 'modal--hidden'}`}>

                        <div id="copyText">
                        <p>Copied!</p>
                        </div>
                    </div>
            </div>
  
          
        </div>
      );

}

  
  export default Loremipsum;

