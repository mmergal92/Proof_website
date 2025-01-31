import React, {useState, useEffect} from 'react';
import { loremText } from '../components/loremtext';
import { loremTextEs } from '../components/loremtextes';
import Home from './home';
import Video from '../components/video'
import { Link } from 'react-router-dom';
import pexels_mart_production from "../assets/pexels_mart_production.mp4";
import circletext_nologo from "../assets/circletext_nologo.png"


const Loremipsum = () => {
    const [showCopyModal, setShowCopyModal] = useState(false);
    const [numberOfParagraphs, setNumberOfParagraphs] = useState('');
    const [text, setText] = useState('');
    const [language, setLanguage] = useState('english');
    const [bgColor, setBgColor] = useState('#FFFEE3')
    const [fontColor, setFontColor] = useState('#EA6200')

  
    const handleSubmit = (e) => {
      e.preventDefault();
      setBgColor('#EA6200');
      setFontColor('#FFFEE3');
      const number = parseFloat(numberOfParagraphs);
      const selectedText = language === 'english' ? loremText : loremTextEs;
      const HTMLParagraphs = selectedText.getAllParagraphs(number);
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
            <div className="left-lorem-container" style={{ backgroundColor: bgColor}}>
                <div className ="language-button">
                <button className={`plaintain-button ${language === 'english' ? 'active' : ''}`} onClick={() => setLanguage('english')}>
                      plantain
                  </button>
                  <button className={`platano-button ${language === 'spanish' ? 'active' : ''}`} onClick={() => setLanguage('spanish')}>
                      plátano
                  </button>
                </div>
                <div className="riddims" style={{ color: fontColor}}>
                    <h1 className="title">Riddims
                    </h1>
                    <p className="description">
                       
                    </p>
                    <form className="form" action="/" method="POST" onSubmit={handleSubmit}>
                    <input
                        type="number"
                        className="paragraph-number"
                        name="numberOfParagraphs"
                        onChange={(e) => setNumberOfParagraphs(e.target.value)}
                        placeholder="How many paragraphs?"
                        value={numberOfParagraphs}
                    />
                    <input type="submit" value="Enter" className="generate-button" />
                    </form>
                </div>
                <div className="made-by">
                <p className="credit">
                        Made by <a href="https://segacyroberts.com/" target="_blank" >Segacy</a> and <a href="https://mariamergal.dev/" target="_blank" >Maria</a> <br/>
                        Vulf Sans Font by the Oh No Type Foundry @ohnotypeco
                    </p>
                </div>
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
                    
                <div id="copyOverlay" className={`${showCopyModal ? 'modal--show' : 'modal--hidden'}`}>

                    <div id="copyText">
                    {/* <p>Copied!</p> */}
                    </div>
                </div>
            </div>
        </div>
  
          
    </div>
      );

}

  
  export default Loremipsum;

