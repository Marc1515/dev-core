const textContentCode = `
// Select an element and change its text content
const element = document.getElementById('example');
element.textContent = 'New text content';`;

const innerHTMLContent = `
// Select an element and change its HTML content
const element = document.getElementById('example');
element.innerHTML = '<strong>Bold new content</strong>';`;

export const codes = [textContentCode, innerHTMLContent];
