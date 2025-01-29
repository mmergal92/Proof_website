// Code that generators the random lorem ipsum text

// Create a new object called loremIpsum by invoking the GenerateNewText constructor function
export const loremText = new GenerateNewText();

// Constructor function that creates an object with the words property
function GenerateNewText() {
  // Add property to the object
  this.sentences =
    [
      'Piece of ginger and thyme don’t forget pimento seeds. I mix everything together. Grace and Maggi of course. Now we’re going to wash the chicken. Do what you please in your house but as for us in this house? As for Deddy and fi him house? Lawd ah mercy, tek back yuhself and bring back yuhself inna one peace. She’s as good as gold and scotch bonnet peppers know who fi frighten.',
      'Whatever I said whatever I did I didn’t mean it scotchies highgate saint mary. Small up yuhself! Edna Leroy and Everton remember the songs used to make you rock away. Tastee or juici or golden krust jerk ribs and rice and peas where is the oxtail gravy. We have food at home.',
      'testing thisThis is not yours to fix alone. You act like you’re all alone out there in the world, but you’re not. You’re not alone.',
      'testing thisWhy are you keeping this curiosity door lock?',
      'testing thisDo you know anything about sensory deprivation tanks? Specifically how to build one?',
      'testing thisIf anyone asks where I am, I\'ve left the country.',
      'testing thisYOU BETTER RUN! She\'s our friend, and she\'s crazy!',
      'testing thisMouth-breather.',
      'testing thisNancy, seriously, you\'re gonna be so cool now, it\'s ridiculous.',
      'testing thisUm, I\'m happy you\'re home.',
      'testing thisYou’re going to take out the demigorgon with a slingshot?',
      'testing thisMornings are for coffee and contemplation.',
      'testing thisYou shouldn\'t like things because people tell you you\'re supposed to.',
      'testing thisNo... no El, you\'re not the monster. You saved me. Do you understand? You saved me.',
      'testing thisWe never would\'ve upset you if we knew you had superpowers.',
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