// Code that generators the random lorem ipsum text

// Create a new object called loremIpsum by invoking the GenerateNewText constructor function
export const loremText = new GenerateNewText();

// Constructor function that creates an object with the words property
function GenerateNewText() {
  // Add property to the object
  this.sentences =
    [
      'tastee or juici or golden krust',
'jerk ribs and rice and peas',
'where is the oxtail gravy?',
'Grace and Maggi of course',
'whatever I said whatever I did I didn\'t mean it',
'scotchies',
'highgate saint mary',
'lawd ah mercy',
'tek back yuhself and bring back yuhself inna one peace',
'she\'s as good as gold',
'scotch bonnet peppers',
'duppy know who fi frighten',
'piece of ginger and thyme',
'don\'t forget pimento seeds',
'Half Way Tree',
'Devon House on sunday',
'Rum raisin ice cream',
'wah gwan',
'big up',
'small up yuhself!',
'yuh dun know',
'wanty wanty cyah get eh but getty getty nuh want eh',
'family in toronto, new york, miami, and london',
'ackee and saltfish and bammy',
'Come to hellshire nuh?',
'Jamaica Gleaner',
'Ochi Negril Mobay Portmore Portland St. Thomas',
'Worl Boss',
'I cherish every moment that you\'re around I might not show it cause I can\'t find words to say',
'red pea soup',
'wata',
'a so me move, a so me rock',
'spice bun',
'drink in we hand now jump up and wave is de plan now',
'who does go to work on ah Thursday or even a Friday when it ah parties?',
'bake and shark',
'extra pepper and tamarind sauce please',
'sorrel',
'wray and neph',
'trinciti gloria\'s ali\'s roti shop',
'roti or buss up shot?',
'doubles',
'plantain chips',
'doh hot yuh head',
'yuh t\'ink it easy',
'it\'s a fete tonight',
'we limin',
'Edna, Leroy, and Everton',
'remember the songs used to make you rock away',
'we play mas every year.',
'we have food at home',
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