// Get references to the input and button elements
const input = document.getElementById('display');
const button = document.getElementById('button');
const decimal = document.getElementById('dot');
const slash = document.getElementById('divide');
const times = document.getElementById('times');
const minus = document.getElementById('minus');
const add = document.getElementById('add');
var answer = input.value;
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
    decimal.disabled = true;
    slash.disabled = true;
    times.disabled = true;
}

function appendVal(val) {
    //Check if the length is below max of 10 digits
    if (input.value.length != 10) {
        input.value += val;
        button.disabled = false;
        decimal.disabled = false;
        slash.disabled = false;
        times.disabled = false;
        add.disabled = false;
        minus.disabled = false;
    }
}

function signIt (val) {
    let last = answer.slice(-1);
    //Check for max length reach and if value includes the . sign already
    if(input.value.slice(-1) !== val) {
        input.value += val;
    }
}

function del() {
    //Check if display has numbers
    if(input.value.length != 0) {
        input.value = input.value.substring(0, input.value.length -1);
    }
    //Reset the Equal button to disabled when there is nothing on display
    if (input.value.length == 0) {
        button.disabled = true;
        decimal.disabled = true;
        slash.disabled = true;
        times.disabled = true;
    }
    
}

function compute () {
    if(input.value.slice(-1) !== '.' && input.value.slice(-1) !== '/' && input.value.slice(-1) !== '*' && input.value.slice(-1) !== '+' && input.value.slice(-1) !== '-') {
        let res = eval(input.value);
        input.value = res;
    }
    
}