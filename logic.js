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

input.addEventListener('keydown', function(event) {

    const keyCode = event.keyCode || event.which;

    if (
        !(
            keyCode === 8 ||
            keyCode === 9 ||
            keyCode === 13 ||
            keyCode === 27 ||
            (keyCode >= 48 && keyCode <= 57) ||
            (keyCode >= 96 && keyCode <= 105)
        )
    ) {
        event.preventDefault();
    }
})

function clearField () {
    let input = document.getElementById("display");
    input.value = '';
    button.disabled = true;
}

function appendVal(val) {
    if (input.value.length != 10) {
        input.value += val;
    }
    
}