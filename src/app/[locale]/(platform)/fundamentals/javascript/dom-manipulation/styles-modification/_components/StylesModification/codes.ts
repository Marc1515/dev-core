const styleCode = `
// Change the background color of an element
const element = document.getElementById('example');
element.style.backgroundColor = 'blue';`;

const classListCode = `
// Add a CSS class to an element
const element = document.getElementById('example');
element.classList.add('new-class');

// Remove a CSS class
element.classList.remove('old-class');

// Toggle a CSS class
element.classList.toggle('active');`;

export const codes = [styleCode, classListCode];
