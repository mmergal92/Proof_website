// Code that generators the random lorem ipsum text

// Create a new object called loremIpsum by invoking the GenerateNewText constructor function
export const loremText = new GenerateNewText();

// Constructor function that creates an object with the words property
function GenerateNewText() {
  // Add property to the object
  this.sentences =
    [
      'Tastee or juici or golden krust?',
      'Jerk ribs and rice and peas, but where here is the oxtail gravy?',
      'Edna, Leroy, and Everton use grace and maggi of course.',
      'Whatever I said whatever I did I didn\'t mean it.',
      'Scotchies has scotch bonnet peppers jerk pork.',
      'Highgate saint mary lawd ah mercy jamaica gleaner wrote I have family in toronto new york miami and London.',
      'Tek back yuhself and bring back yuhself inna one peace.',
      'Mek sure seh yuh reach, hear mi?',
      'She\'s as good as gold and duppy know who fi frighten.',
      'Piece of ginger and thyme and don\'t forget pimento seeds.',
      'Half way tree and devon house on sunday with rum raisin ice cream, but small up yuhself!',
      'Wah gwan wanty wanty cyah get eh but getty getty nuh want eh.',
      'Ackee and saltfish bammy come to hellshire, nuh?',
      'Ochi negril mobay portmore portland st. thomas.',
      'Worl Boss loves red pea soup.',
      'I cherish every moment that you\'re around I might not show it cause I can\'t find words to say.',
      'A so me move, a so me rock milo and ovaltine.',
      'Spice bun drink in we hand now jump up and wave is de plan now.',
      'Who does go to work on ah Thursday or even a Friday when it ah parties?',
      'Bake and shark extra pepper and tamarind sauce please.',
      'Can you mix sorrel with wray and neph.',
      'Trinciti gloria\'s ali\'s roti shop buss up shot yuh t\'ink it easy.',
      'Doh hot yuh head doubles and banana chips.',
      'It\'s a fete tonight we limin remember the songs used to make you rock away.',
      'We play mas every year and we have food at home.',
   ];
}

// Method to the GenerateNewText constructor function that generates a random sentence
GenerateNewText.prototype.getRandomSentence = function(lastSentence = null) {
  let newSentence;
  do {
    newSentence = this.sentences[Math.floor(Math.random() * this.sentences.length)];
  } while (newSentence === lastSentence); // Ensure it's not the same as the last one
  return newSentence;
};

// Method to the GenerateNewText constructor function that generates a paragraph from random sentences
GenerateNewText.prototype.getParagraph = function() {
  let paragraph = '';
  // Set the minimum number of words
  let minimumCharacterLength = 250;
  let firstSentence = true;
  let lastSentence = null;
  while (paragraph.length < minimumCharacterLength) {
    let newSentence = this.getRandomSentence(lastSentence);
    lastSentence = newSentence; // Update last sentence reference

    if (firstSentence) {
      paragraph = newSentence;
      firstSentence = false;
    } else {
      paragraph = paragraph.concat(' ' + newSentence);
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