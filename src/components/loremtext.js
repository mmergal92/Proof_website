// Code that generators the random lorem ipsum text

// Create a new object called loremIpsum by invoking the GenerateNewText constructor function
export const loremText = new GenerateNewText();

// Constructor function that creates an object with the words property
function GenerateNewText() {
  // Add property to the object
  this.sentences =
    [
'Tastee or Juici or Golden Krust?',
'Jerk ribs and rice and peas.',
'Where is the oxtail gravy?',
'Grace and Maggi, of course.',
'Whatever I said whatever I did I didn\'t mean it.',
'Scotchies and scotch bonnet peppers.',
'Highgate Saint Mary.',
'Lawd ah mercy!',
'Tek back yuhself and bring back yuhself inna one peace.',
'Mek sure seh yuh reach, hear mi?',
'She\'s as good as gold and duppy know who fi frighten.',
'Piece of ginger and thyme and don\'t forget pimento seeds.',
'Half Way Tree and Devon House on Sunday.',
'Rum raisin ice cream?',
'Wah gwan?',
'Small up yuhself!',
'Wanty wanty cyah get eh but getty getty nuh want eh.',
'I have family in Toronto, New York, Miami, and London.',
'Ackee and saltfish and bammy.',
'Come to hellshire, nuh?',
'Jamaica, Gleaner, Ochi, Negril, Mobay, Portmore, Portland, St. Thomas.',
'Worl Boss loves red pea soup.',
'I cherish every moment that you\'re around I might not show it cause I can\'t find words to say.',
'A so me move, a so me rock.',
'Spice bun drink in we hand now jump up and wave is de plan now.',
'Who does go to work on ah Thursday or even a Friday when it ah parties?',
'Bake and shark extra pepper and tamarind sauce please.',
'Sorrel wray and neph.',
'Trinciti gloria\'s ali\'s roti shop.',
'Roti or buss up shot?',
'Doubles and banana chips.',
'Doh hot yuh head yuh t\'ink it easy?',
'It\'s a fete tonight.',
'We limin.',
'Edna, Leroy, and Everton.',
'Remember the songs used to make you rock away?',
'We play mas every year.',
'We have food at home!',
   ];
}

// Method to the GenerateNewText constructor function that generates a random sentence
GenerateNewText.prototype.getRandomSentence = function() {
  let randomSentence = this.sentences[Math.floor(Math.random() * this.sentences.length)];
	return randomSentence;
};

// Method to the GenerateNewText constructor function that generates a paragraph from random sentences
GenerateNewText.prototype.getParagraph = function() {
  let paragraph = '';
  // Set the minimum number of words
  let minimumCharacterLength = 250;
  let firstSentence = true;
  while (paragraph.length < minimumCharacterLength) {
    if (firstSentence) {
      paragraph = paragraph.concat(this.getRandomSentence());
      firstSentence = false;
    } else {
      paragraph = paragraph.concat(' ' + this.getRandomSentence());
    }
  }
  return paragraph;
};

// Method to the GenerateNewText constructor function that gerates multiple paragraphs from paragraphs
GenerateNewText.prototype.getAllParagraphs = function(numberOfParagraphs) {
  let allParagraphs = [];
  // Generate the number of paragraphs as specified by the user
  while (allParagraphs.length < numberOfParagraphs) {
    allParagraphs.push(this.getParagraph());
  }
  // Convert array into HTML string
  let paragraphHTML = '';
  allParagraphs.forEach(function (paragraph) {
    paragraphHTML += '<p>' + paragraph + '</p>';
  });
  return paragraphHTML;
};