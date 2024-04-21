const getElementByIdCode = `
// HTML: <div id="container">Hello World</div>
var element = document.getElementById('container');
console.log(element.textContent);  // Output: "Hello World"`;

const getElementsByTagNameCode = `
// HTML: <p>First paragraph</p><p>Second paragraph</p>
var paragraphs = document.getElementsByTagName('p');
console.log(paragraphs[0].textContent);  // Output: "First paragraph"
console.log(paragraphs[1].textContent);  // Output: "Second paragraph"`;

const getElementsByClassNameCode = `
// HTML: <div class="highlight">Highlighted</div><div class="highlight">Also highlighted</div>
var highlightedItems = document.getElementsByClassName('highlight');
console.log(highlightedItems[0].textContent);  // Output: "Highlighted"
console.log(highlightedItems[1].textContent);  // Output: "Also highlighted"`;

const querySelectorCode = `
// HTML: <div class="container">Container</div><div class="container">Another container</div>
var container = document.querySelector('.container');
console.log(container.textContent);  // Output: "Container"`;

const querySelectorAllCode = `
// HTML: <span class="item">Item 1</span><span class="item">Item 2</span>
var items = document.querySelectorAll('.item');
items.forEach(function(item) {
    console.log(item.textContent);  // Outputs: "Item 1", "Item 2"
});`;

export const codes = [
  getElementByIdCode,
  getElementsByTagNameCode,
  getElementsByClassNameCode,
  querySelectorCode,
  querySelectorAllCode,
];
