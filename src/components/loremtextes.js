// Code that generators the random lorem ipsum text

// Create a new object called loremIpsum by invoking the GenerateNewText constructor function
export const loremTextEs = new GenerateNewText();

// Constructor function that creates an object with the words property
function GenerateNewText() {
  // Add property to the object
  this.sentences =
    [
      'No hables así de mi broki.',
      'Deja ya de gufear, y ponte a trabajar.',
      'Subo a El Yunque porque quiero ver el mundo desde arriba, rodeado de verdes intensos y la calma de las cascadas.',
      'Nos invitaron a un bembé.',
      'No tengo chavos para el taxi.',
      'Hoy se bebe, hoy se celebra.',
      'Hay mucho tapón y voy a llegar tarde.',
      'Esto en un mamey.',
      'Estoy bregando ccon algo de última hora en el trabajando.',
      'Mira ese revolú que tienes en tu cuarto.',
      'Nos vemos en Culebra, donde Flamenco Beach parece sacado de un sueño, con su arena suave y aguas cristalinas.',
      'Cállate, eso es embuste.',
      'Vamos a la disco que quiero perrear.',
      'En La Factoría, una buena piña colada y una conversación me hacen pensar que en Puerto Rico todo es mejor con sazón.',
      'Vamos a janguear esta noche en la placita.',
      'Chacho, hace un calor brutal hoy.',
      'Mi nene quiere un helado de parcha.',
      'Aquí se vive con alma, estilo, y esa chispa que hace que el corazón se sienta en casa.',
      'La nena se compró unos tenis nuevos bien duros.',
      'No puedo ahora, estoy bregando con un problemita en el carro.',
      'El bembé en casa de Luisa estuvo encendido.',
      'Wepa, llegó el corillo, ahora sí que empieza la fiesta.',
      'Anoche nos fuimos de perreo hasta que cerraron el club.',
      'En Piñones, unas alcapurrias bien crujientes y un jugo de parcha me recuerdan que la comida aquí siempre trae alegría.'
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