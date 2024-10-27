const nodeElementsCode = `
// Accessing child nodes
const parent = document.getElementById('parent');
const firstChild = parent.childNodes[0];

// Getting the next sibling
const nextSibling = firstChild.nextSibling;

// Accessing the parent node
const child = document.getElementById('child');
const parentNode = child.parentNode;`;

const findElementsCode = `
// Find elements by tag name
const divs = document.getElementsByTagName('div');

// Find elements by class name
const specialElements = document.getElementsByClassName('special');

// Find an element with a CSS selector
const uniqueElement = document.querySelector('#unique-element');`;

export const codes = [nodeElementsCode, findElementsCode];
