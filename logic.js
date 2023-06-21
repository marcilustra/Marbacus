// Get references to the input and button elements
const input = document.getElementById('display');
const button = document.getElementById('button');

// Add an event listener to the input element
input.addEventListener('input', function() {
  // Toggle the disabled attribute based on the input value
  if (input.value.trim() !== '') {
    button.disabled = false;  // Enable the button
  } else {
    button.disabled = true;   // Disable the button
  }
});

function clearField () {
    let input = document.getElementById("display");
    input.value = '';
    button.disabled = true;
}