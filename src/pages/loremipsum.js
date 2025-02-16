import React, {useState, useEffect} from 'react';
import { loremText } from '../components/loremtext';
import { loremTextEs } from '../components/loremtextes';
import Home from './home';
import Video from '../components/video'
import { Link } from 'react-router-dom';
import pexels_mart_production from "../assets/pexels_mart_production.mp4";
import circletext_nologo from "../assets/circletext_nologo.png"

const colorOptions = [
    { primary: "#FFE3F1", secondary: "#DD0051" },
    { primary: "#EFF2AC", secondary: "#175B32" },
    { primary: "#FFFEE3", secondary: "#EA6200" },
    { primary: "#BDCCCF", secondary: "#00283C" },
    { primary: "#211B47", secondary: "#D3E1E7" }
  ];
function getRandomColors() {
    return colorOptions[Math.floor(Math.random() * colorOptions.length)];

}

const Loremipsum = () => {
    const [showCopyModal, setShowCopyModal] = useState(false);
    const [numberOfParagraphs, setNumberOfParagraphs] = useState('');
    const [text, setText] = useState('');
    const [language, setLanguage] = useState('english');
    const [primaryColor, setPrimaryColor] = useState('');
    const [secondaryColor, setSecondaryColor] = useState('');
    const [isActive, setIsActive] = useState(false);
    const [buttonColor, setButtonColor] = useState('primary');
    const [hoveredButton, setHoveredButton] = useState(null);
    const [hoveredPButton, setHoveredPButton] = useState(null);
    const [hoveredSButton, setHoveredSButton] = useState(null);
    const [clickedButton, setClickedButton] = useState(null);
    const [hoveredEButton, setHoveredEButton] = useState(null);

    



    useEffect(() => {
        const { primary, secondary } = getRandomColors();
        setPrimaryColor(primary);
        setSecondaryColor(secondary);
      }, []);
  
  
      const handleButtonClick = (button) => {
        setClickedButton(button);
    };

    

    const handleSubmit = (e) => {
      e.preventDefault();
      setIsActive(true);
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
        <div className ={`loremsite ${isActive ? 'active' : ''}`}>
          <div className="main-content ">
            <div className="left-lorem-container" style={{ backgroundColor: primaryColor, color: secondaryColor}}>
                <div className ="language-button">
                <button 
                className={`plaintain-button ${language === 'english' ? 'active' : ''}`} 
                onClick={() =>{setLanguage('english'); handleButtonClick('plantain')}}
                onMouseEnter={() => setHoveredPButton('plantain')}
                onMouseLeave={() => setHoveredPButton(null)}
                style={{ 
                  backgroundColor:  clickedButton === 'plantain'  ? secondaryColor : primaryColor, 
                  color:  clickedButton === 'plantain'  ? primaryColor :secondaryColor , 
                  borderColor: secondaryColor }}>
                      plantain
                  </button>
                  <button 
                  className={`platano-button ${language === 'spanish' ? 'active' : ''}`} 
                  onClick={() => { setLanguage('spanish'); handleButtonClick('platano')}} 
                  onMouseEnter={() => setHoveredSButton('platano')}
                  onMouseLeave={() => setHoveredSButton(null)}
                  style={{ 
                    backgroundColor: clickedButton === 'platano' ? secondaryColor : primaryColor, 
                    color:  clickedButton === 'platano' ? primaryColor :secondaryColor, 
                    borderColor: secondaryColor}}>
                      plátano
                  </button>
                </div>
                <div className="riddims" style={{ color: secondaryColor}}>
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
                        style={{borderColor: secondaryColor, color: secondaryColor}}
                    />
                    <input 
                    type="submit" 
                    value="Enter" 
                    className="generate-button"  
                    onMouseEnter={() => setHoveredEButton('enter')}
                    onMouseLeave={() => setHoveredEButton(null)}
                    style={{ 
                      borderColor:  hoveredEButton ? primaryColor :  secondaryColor, 
                      color: hoveredEButton ? secondaryColor :primaryColor, 
                      backgroundColor: secondaryColor  }}/>
                    </form>
                </div>
                <div className="made-by">
                <p className="credit">
                        Made by <span className ="linkwave"><a href="https://segacyroberts.com/" target="_blank" style={{color: secondaryColor}} >Segacy</a> and <a href="https://mariamergal.dev/" target="_blank" style={{color: secondaryColor}} >Maria</a></span><br/>
                    </p>
                </div>
            </div>
            <div className="right-lorem-container" style={{ backgroundColor: primaryColor, color: secondaryColor}}>
                {text && (
                <>
                    <button 
                    className="copy-button" 
                    onClick={handleCopy} 
                    onMouseEnter={() => setHoveredButton('copy')}
                    onMouseLeave={() => setHoveredButton(null)}
                    style={{ 
                      backgroundColor:  hoveredButton ? primaryColor :  secondaryColor, 
                      color: hoveredButton ? secondaryColor :primaryColor , 
                      borderColor: secondaryColor}} >
                    copy
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

