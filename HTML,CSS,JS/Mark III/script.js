//Append numered buttons to bottom content
function appendNumber(number) {
    var bottomContent = document.getElementById("bottomContent");
    var currentNumber = bottomContent.textContent;
  
    if (currentNumber === "0") {
      bottomContent.textContent = number;
    } else if (currentNumber.length < 19) {
      bottomContent.textContent += number;
    }
  
    // Format the number if it exceeds 999 digits
    var formattedNumber = formatNumberWithCommas(bottomContent.textContent);
    bottomContent.textContent = formattedNumber;
  }
  
  // Function to format the number with commas
  function formatNumberWithCommas(number) {
    var numericValue = parseInt(number.replace(/,/g, ""));
    return numericValue.toLocaleString();
  }
  

//CLEAR FUNCTIONS
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
//CLEAR FUNCTIONS END


//Change themes
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