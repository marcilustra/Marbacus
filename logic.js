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

    //Get the ASCII values of the key pressed
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
        //Prevent non numeric keys from being accepted
        event.preventDefault();
    }
})

function clearField () {
    //Clears the text field with a single click
    input.value = '';
    button.disabled = true;
}

function appendVal(val) {
    //Check if the length is below max of 10 digits
    if (input.value.length != 10) {
        input.value += val;
        button.disabled = false;
    }
    
}

function del() {
    if(input.value.length != 0) {
        input.value = input.value.substring(0, input.value.length -1);
    }
    if (input.value.length == 0) {
        button.disabled = true;
    }
    
}