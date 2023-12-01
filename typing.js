const dynamicText = document.querySelector('.typing');
const words = [
  'Javascript',
  'TypeScript',
  'React.js',
  'GraphQL',
  'Apollo Client',
  'Redux',
  'Husky',
  'Prettier',
  'MongoDB',
  'Node.js',
  'Express.js',
  'Handlebars.js',
  'Git/GitHub',
  'AWS',
  '@emotion',
  'styled-components',
  'Ant Design',
  'HTML',
  'CSS',
  'Jest/Enzyme',
  'Cypress'
];

// Variables to track the position and deletion status of the word
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
  const currentWord = words[wordIndex];
  const currentChar = currentWord.substring(0, charIndex);
  dynamicText.textContent = currentChar;
  dynamicText.classList.add('stop-blinking');

  if (!isDeleting && charIndex < currentWord.length) {
    // If condition is true, type the next character
    charIndex++;
    setTimeout(typeEffect, 100);
  } else if (isDeleting && charIndex > 0) {
    // If condition is true, remove the previous character
    charIndex--;
    setTimeout(typeEffect, 100);
  } else {
    // If word is deleted then switch to the next word
    isDeleting = !isDeleting;
    dynamicText.classList.remove('stop-blinking');
    wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
    setTimeout(typeEffect, 1200);
  }
}

typeEffect();
