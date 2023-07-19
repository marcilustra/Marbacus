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