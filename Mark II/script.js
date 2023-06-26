/*These are global variables
answer holds the result of an operation
left hods the first side value that is input
right handles the second side of an operation value

e.g 98 + 34 = 132
left = 98
right = 34
answer = 132
*/
var answer = 0;
var left = 0;
var right = 0;
var answered = false;

//Clears the display and the three variables as well.
function clearDisplay() {
    document.getElementById("top").textContent = "";
    document.getElementById("bottom").textContent = "0";
}

function wipeVars() {
    left = 0;
    right = 0;
    answer = 0;
}
function clearAll() {
    clearDisplay();
    wipeVars();
}

/*The delEat function wipes both top and bottom displays
Bottom is cleaned one by one till the last
Top if the final character of bottom has been deleted down to 0*/
function delEat () {
    var labelText = document.getElementById("bottom").textContent;

    if(labelText.length == 1) {
        clearDisplay();
    } else {
        document.getElementById("bottom").textContent = labelText.substring(0, labelText.length -1)
    }
}

//Adds the number value of the button to the bottom display string
function appendNumber (val) {
    var labelText = document.getElementById("bottom").textContent;
    if(answered) {
        wipeVars();
        console.log(answer);
    }
     //Check if the value is the default zero or if 
     // we are currently displaying answer from displayFinal()
     // to replace it with the value of the input button
    if(labelText.slice(0) === "0" || answered) {
        document.getElementById("bottom").textContent = val;
        answered = false;
    } else {
        document.getElementById("bottom").textContent += val;
    }

}

//Places a single decimal point on a number.
function dotIT (val) {
    var labelText = document.getElementById("bottom").textContent;
//Check if string already includes a dot character
    if(!labelText.includes(".")) {
        document.getElementById("bottom").textContent += val;
    }
}

function myNus (val) {
}

function plus (val) {
    left += parseFloat(document.getElementById("bottom").textContent);
    if (left) {
        document.getElementById("bottom").textContent = "0";
    }
    right = parseFloat(document.getElementById("bottom").textContent.slice(-1));
    answer = parseFloat(left) + parseFloat(right);
    document.getElementById("top").textContent = answer + " " + val;
    console.log(answer);
}

function strictEval() {
    let finaloperand = document.getElementById("top").textContent.slice(-1);
    switch(finaloperand) {
        case '+':
            answer = parseFloat(document.getElementById("bottom").textContent) + parseFloat(answer);
            break;
        case '-':
            answer = parseFloat(answer) - parseFloat(document.getElementById("bottom").textContent);
            break;
    }
    return answer;
}
function displayFinal () {
    strictEval();
    document.getElementById("bottom").textContent = answer;
    document.getElementById("top").textContent = "Ans: ";
    answered = true;
    console.log("Answer: " + answer);
}
