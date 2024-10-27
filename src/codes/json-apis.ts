const fetchingDataCode = `
fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parses the JSON response into a JavaScript object
  })
  .then(data => {
    console.log(data); // Handle the data from the API
  })
  .catch(error => {
    console.error('There was a problem with your fetch operation:', error);
  });`;

const sendingDataCode = `
const userData = {
    name: 'Alice',
    email: 'alice@example.com'
  };
  
  fetch('https://api.example.com/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData)
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });`;

export const codes = ["", fetchingDataCode, sendingDataCode, "", ""];
