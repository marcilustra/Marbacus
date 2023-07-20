//#region Global Variables
var output = 0;
var left = 0;

//#region Operator Functions
//We need a way to check if the top has a current operation going on
//but first if it does not, we add the number inserted at the bottom, if it is not a zero
//along with the operator that has been clicked
function Operate(operator) {
    var topContent = document.getElementById("topContent");
    var bottomContent = document.getElementById("bottomContent");
    var currentNumber = bottomContent.textContent;
    var currentOperator = topContent.textContent.slice(-1);

    if (currentNumber === "0" && currentOperator !== "") {
        return;
    } else if (currentNumber === "0" && currentOperator === "") {
        topContent.textContent = "0" + operator;
        return;
    } else if (currentNumber !== "0" && currentOperator === "") {
        topContent.textContent = currentNumber + operator;
        bottomContent.textContent = "0";
        return;
    } else if(currentNumber === "0" && currentOperator !== "") {
        topContent.textContent = topContent.textContent.slice(0, -1) + operator;
        return;
    } else if (currentNumber !== "0" && currentOperator !== "") {
        strictEvaluation();
        topContent.textContent = output + operator;
        bottomContent.textContent = "0";
        return;
    }
}
//A function to find the Factorial of a number
function permutate() {
    var bottomContent = document.getElementById("bottomContent");
    var currentNumber = bottomContent.textContent;
    var result = 1;
    if (currentNumber.includes(".")) {
        return;
    }
    if (currentNumber === "52") {
        //Open a link to the deck of cards
        window.open("https://youtu.be/hoeIllSxpEU");
    }
    if (currentNumber > 15) {
        return;
    }
    if (currentNumber === "0") {
        bottomContent.textContent = "1";
        return;
    } else {
        for (var i = 1; i <= currentNumber; i++) {
            result *= i;
        }
        bottomContent.textContent = result;
    }
}
//This function will append a - sign or remove it depending on what is in the bottom content
//If a number is in the bottom content, it will add a - sign to it
//If a - sign is already in the bottom content, it will remove it
//If the number is a zero it will not do anything
function addSubtract() {
    var bottomContent = document.getElementById("bottomContent");
    var currentNumber = bottomContent.textContent;
    if (currentNumber === "0") {
        return;
    } else if (currentNumber.includes("-")) {
        bottomContent.textContent = currentNumber.substring(1);
    } else {
        bottomContent.textContent = "-" + currentNumber;
    }
}

//We need to handle when the user presses the = button
//The top content will be clear but only after a strictEvaluation() call
//The bottom content will be the output of the strictEvaluation() call
function equals() {
    var topContent = document.getElementById("topContent");
    var bottomContent = document.getElementById("bottomContent");
    if (topContent.textContent === "") {
        return;
    } else {
        strictEvaluation();
        topContent.textContent = "";
        bottomContent.textContent = parseFloat(output.toFixed(3));
    }
}


//If the top content is empty, we add the number and the operator
//Else we check if the top content has an operator, if it does, we carry out the operation
//By calling a kind of strictEvaluation() function and passing the top content and its operator and the bottom content

//The strictEvaluation() function will check if the top content has an operator, if it does, it will carry out the operation
function strictEvaluation() {
    //Get the numbers from the top and bottom content
    let topContent = document.getElementById("topContent").innerHTML.slice(0, -1);
    //Get the operator from the top content
    let operator = document.getElementById("topContent").innerHTML.slice(-1);
    let bottomContent = document.getElementById("bottomContent").innerHTML;
    
    switch (operator) {
        case "+":
            output = parseFloat(topContent) + parseFloat(bottomContent);
            break;
        case "-":
            output = parseFloat(topContent) - parseFloat(bottomContent);
            break;
        case "X":
            output = parseFloat(topContent) * parseFloat(bottomContent);
            break;
        case "/":
            if (parseFloat(bottomContent) === 0) {
                // Display an error message if the user tries to divide by zero
                document.getElementById("topContent").innerHTML = "Error: Division by zero";
                bottomContent.textContent = "No divide by 0";
            } else {
                // Perform the division if the bottom content is not zero
                output = parseFloat(topContent) / parseFloat(bottomContent);
            }
            break;
        case "%":
            output = parseFloat(topContent) % parseFloat(bottomContent);
            break;
        case "^":
            output = Math.pow(parseFloat(topContent), parseFloat(bottomContent));
            break;
        default:
            break;

    }
    document.getElementById("bottomContent").innerHTML = output;
}

//#endregion Operator Functions END

//#region Decimal and Number Appending
//A function to add a decimal point to the number at the bottom
function addDecimal() {
    var bottomContent = document.getElementById("bottomContent");
    var currentNumber = bottomContent.textContent;
    //Check first if the number already has a decimal point
    if(currentNumber.includes(".")) {
        return;
    }
    //If not, add a decimal point
    bottomContent.textContent += ".";
}

//Append numered buttons to bottom content
function appendNumber(number) {
    var bottomContent = document.getElementById("bottomContent");
    var currentNumber = bottomContent.textContent;
    var intCount = (currentNumber.match(/\d/g) || []).length;
  
    if (currentNumber === "0") {
      bottomContent.textContent = number;
    } else if (currentNumber.length < 15) {
      bottomContent.textContent += number;
    }
}
  

//#endregion Decimal and Number Appending END

// #region CLEAR FUNCTIONS
//Clear all does as it says, it clears all the content in the top and bottom
//in one click
function clearAll() {
    document.getElementById("topContent").innerHTML = "";
    document.getElementById("bottomContent").innerHTML = "0";
    output = 0;
}

//deleteCut removes the last item in the bottom content
//one by one until it is down to zero.
function deleteCut() {
    var del = document.getElementById("bottomContent").innerHTML;
    if (del.length > 1) {
        document.getElementById("bottomContent").innerHTML = del.substring(0, del.length - 1);
        } else {
        document.getElementById("bottomContent").innerHTML = "0";
    }
}

//Clear bottom takes out the bottom content and replaces it with 0
//in one click
function clearBottom() {
    document.getElementById("bottomContent").innerHTML = "0";
}
// #endregion CLEAR FUNCTIONS END

// #region THEME FUNCTIONS

function changeTheme(filename) {
    var cssLink = document.getElementById("styles_header");
    cssLink.href = filename;

    localStorage.setItem("selectedCSS", filename);
}

document.addEventListener("DOMContentLoaded", function () {
    var selectedCSS = localStorage.getItem("selectedCSS");
    if (selectedCSS) {
        var cssLink = document.getElementById("styles_header");
        cssLink.href = selectedCSS;
    }
});

// #endregion THEME FUNCTIONS END

// #region Mode Switching
function toHex() {
    var elementsToEnable = document.querySelectorAll(".letter");
    var elementsToDisable = document.querySelectorAll(".special");

    for (var i = 0; i < elementsToEnable.length; i++) {
        elementsToEnable[i].disabled = false;
    }
    for (var i = 0; i < elementsToDisable.length; i++) {
        elementsToDisable[i].disabled = true;
    }
}