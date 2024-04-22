const addEventCode = `
// Add a click event listener to a button
const button = document.getElementById('my-button');
button.addEventListener('click', function() {
    alert('Button was clicked!');
});`;

const functionsHandlerCode = `
// Define a function to handle the specific event
function handleButtonClick(event) {
    console.log('Button clicked!');
    // Additional logic can be added here
}

// Get the button element
const button = document.getElementById('my-button');

// Assign the event handler function to the click event
button.addEventListener('click', handleButtonClick);
`;

const stopPropagationCode = `
// Stop the propagation of an event
button.addEventListener('click', function(event) {
    event.stopPropagation(); // Prevents the event from bubbling up the DOM
    alert('Click event will not propagate further.');
});`;

export const codes = [addEventCode, functionsHandlerCode, stopPropagationCode];
