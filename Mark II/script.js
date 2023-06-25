var answer = 0;
var left = 0;
var right = 0;

function clearLabelText() {
    document.getElementById("top").textContent = "";
    document.getElementById("bottom").textContent = "0";
    left = "";
    right = "";
    answer = "";
}

function appendNumber (val) {
    var labelText = document.getElementById("bottom").textContent;
    if(labelText === "0") {
        document.getElementById("bottom").textContent = val;
    } else {
        document.getElementById("bottom").textContent += val;
    }
}

function dotIT (val) {
    var labelText = document.getElementById("bottom").textContent;

    if(!labelText.includes(".")) {
        document.getElementById("bottom").textContent += val;
    }
}

function delEat () {
    var labelText = document.getElementById("bottom").textContent;

    if(labelText.length == 1) {
        document.getElementById("bottom").textContent = 0;
    } else {
        document.getElementById("bottom").textContent = labelText.substring(0, labelText.length -1)
    }
}

function plus(val) {
    var bottomText = document.getElementById("bottom").textContent;
    document.getElementById("top").textContent += bottomText + " " + val;
    left = document.getElementById("top").textContent;
    if (left) {
        document.getElementById("bottom").textContent = "0";
    }
}
