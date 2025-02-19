// Code that generators the random lorem ipsum text

// Create a new object called loremIpsum by invoking the GenerateNewText constructor function
export const loremText = new GenerateNewText();

// Constructor function that creates an object with the words property
function GenerateNewText() {
  // Add property to the object
  this.sentences =
    [
      'Piece of ginger and thyme don\'t forget pimento seeds.',
      'Whatever I said whatever I did I didn\'t mean it scotchies highgate saint mary.',
      'I mix everything together.',
      ' Grace and Maggi of course.',
      'Now we\'re going to wash the chicken.',
      'Do what you please in your house but as for us in this house?',
      'As for Deddy and fi him house?',
      'Lawd ah mercy, tek back yuhself and bring back yuhself inna one peace.',
      'She\'s as good as gold and scotch bonnet peppers know who fi frighten.',
      'Small up yuhself! ',
      'Edna Leroy and Everton remember the songs used to make you rock away.',
      'Tastee or juici or golden krust jerk ribs and rice and peas where is the oxtail gravy.',
      'We have food at home.',
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