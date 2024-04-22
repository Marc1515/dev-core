const addEventCode = `
// Add a click event listener to a button
const button = document.getElementById('my-button');
button.addEventListener('click', function() {
    alert('Button was clicked!');
});`;

const stopPropagationCode = `
// Stop the propagation of an event
button.addEventListener('click', function(event) {
    event.stopPropagation(); // Prevents the event from bubbling up the DOM
    alert('Click event will not propagate further.');
});`;

export const codes = [addEventCode, stopPropagationCode];
