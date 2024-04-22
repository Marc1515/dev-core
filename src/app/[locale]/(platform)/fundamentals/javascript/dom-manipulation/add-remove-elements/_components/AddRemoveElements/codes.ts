const createElementCode = `
// Create a new div and append it to the body
const newDiv = document.createElement('div');
newDiv.textContent = 'Hello, new element!';
document.body.appendChild(newDiv);`;

const insertElementCode = `
// Inserting before an existing element
const referenceElement = document.getElementById('existing-element');
document.body.insertBefore(newDiv, referenceElement);`;

const removeElementCode = `
// Remove an element directly
const elementToRemove = document.getElementById('remove-me');
elementToRemove.remove();

// Removing using removeChild
const parent = elementToRemove.parentNode;
parent.removeChild(elementToRemove);`;

export const codes = [createElementCode, insertElementCode, removeElementCode];
