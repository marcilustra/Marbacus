//#region Operator Functions
//We need a way to check if the top has a current operation going on
//but first if it does not, we add the number inserted at the bottom, if it is not a zero
//along with the operator that has been clicked

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
    var result = 0;
    switch (operator) {
        case "+":
            result = parseFloat(topContent) + parseFloat(bottomContent);
            break;
        case "-":
            result = parseFloat(topContent) - parseFloat(bottomContent);
            break;
        case "X":
            result = parseFloat(topContent) * parseFloat(bottomContent);
            break;
        case "/":
            if (parseFloat(bottomContent) === 0) {
                // Display an error message if the user tries to divide by zero
                topContent.textContent = "Error: Division by zero";
                bottomContent.textContent = "0";
            } else {
                // Perform the division if the bottom content is not zero
                result = parseFloat(topContent) / parseFloat(bottomContent);
            }
            break;
        case "%":
            result = parseFloat(topContent) % parseFloat(bottomContent);
            break;
        case "^":
            result = Math.pow(parseFloat(topContent), parseFloat(bottomContent));
            break;
        default:
            break;

    }
    document.getElementById("bottomContent").innerHTML = result;
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
  
    if (currentNumber === "0") {
      bottomContent.textContent = number;
    } else if (currentNumber.length < 19) {
      bottomContent.textContent += number;
    }
  
    // Format the number if it exceeds 3 digits
    var formattedNumber = formatNumberWithCommas(bottomContent.textContent);
    //Append the formatted number to the bottom content
    bottomContent.textContent = formattedNumber;
}
  
  // Function to format the number with commas
function formatNumberWithCommas(number) {
   var numericValue = Number(number.replace(/,/g, ""));
   return new Intl.NumberFormat('en-US', { maximumFractionDigits: 20 }).format(numericValue);
}
//#endregion Decimal and Number Appending END

// #region CLEAR FUNCTIONS
//Clear all does as it says, it clears all the content in the top and bottom
//in one click
function clearAll() {
    document.getElementById("topContent").innerHTML = "";
    document.getElementById("bottomContent").innerHTML = "0";

}

//deleteCut removes the last item in the bottom content
//one by one until it is down to zero.
function deleteCut() {
    var del = document.getElementById("bottomContent").innerHTML;
    if (del.length > 1) {
        if(del.charAt(del.length - 2) === ",") {
            document.getElementById("bottomContent").innerHTML = formatNumberWithCommas(del.substring(0, del.length - 2));
        }else{
            document.getElementById("bottomContent").innerHTML = formatNumberWithCommas(del.substring(0, del.length - 1));
        }
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