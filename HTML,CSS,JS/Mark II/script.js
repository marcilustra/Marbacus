/*These are global variables
answer holds the result of an operation
output has now been refactored to do what left once did
while also holding the value of the previous operation
*/
var output;
var left = 0;
var answered = false;

// let topSide = document.getElementById("top").textContent;

//Play audio function
function clickSound(audioPath) {
    var audio = new Audio(audioPath);
    audio.play();
}
//Clears the display and the three variables as well.
function clearDisplay() {
    document.getElementById("top").textContent = "";
    document.getElementById("bottom").textContent = "0";
}

function wipeVars() {
    left = 0;
    output = 0;
}
function clearAll() {
    clickSound("audio/tick.wav");
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
        document.getElementById("bottom").textContent = labelText.substring(0, labelText.length -1);
        clickSound("audio/pop.ogg")
    }
}

//Adds the number value of the button to the bottom display string
function appendNumber (val) {
    clickSound("audio/click.wav");
    var labelText = document.getElementById("bottom").textContent;
    var topText = document.getElementById("top").textContent;
    if(answered) {
        wipeVars();
        console.log(output);
    }
     //Check if the value is the default zero or if 
     // we are currently displaying answer from displayFinal()
     // to replace it with the value of the input button
    if(topText === "Ans: "){
        document.getElementById("top").textContent = "";
    }
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
        clickSound("audio/click.wav");
    }
}

/*In conjuction with StrictEval(), this function checks
the previous operator and if there is text on the top label first*/
function performOperation(val) {
    //First we should check if a number if zero
    //This way we can work with negative numbers b
    clickSound("audio/snap.wav")
    var labelText = document.getElementById("bottom").textContent;
    var topLabelText = document.getElementById("top").textContent;
  
    if (topLabelText === "") {
      output = parseFloat(labelText);
    } else {
      strictEval();
    }
  
    left = output;
    document.getElementById("top").textContent = left + " " + val;
    document.getElementById("bottom").textContent = "0";
    
}


  
function strictEval() {
    let finaloperand = document.getElementById("top").textContent.slice(-1);
    switch(finaloperand) {
        case '+':
            output = parseFloat(document.getElementById("bottom").textContent) + parseFloat(output);
            break;
        case '-':
            output = parseFloat(output) - parseFloat(document.getElementById("bottom").textContent);
            break;
        case 'X':
            output = parseFloat(output) * parseFloat(document.getElementById("bottom").textContent);
            break;
        case '/':
            output = (parseFloat(output) / parseFloat(document.getElementById("bottom").textContent));
            break;
        case '^':
            output = parseFloat(output) ** parseFloat(document.getElementById("bottom").textContent);
            break;
    }
    return output;
}
//This function changes the contents of the display
//after strictEval() as the final output.
function updateDisplay () {
    document.getElementById("bottom").textContent = output;
    document.getElementById("top").textContent = "Ans: ";
    answered = true;
    console.log("Answer: " + output);
}
function displayFinal () {
    //Only perform display final if the text at the top is filled
    if(document.getElementById("top").textContent) {
        clickSound("audio/succ.wav");
        strictEval();
        updateDisplay();
    }
}
