
function clearLabelText() {
    document.getElementById("top").textContent = "";
    document.getElementById("bottom").textContent = "0";
}

function appendNumber (val) {
    var labelText = document.getElementById("bottom").textContent;
    if(labelText === "0") {
        document.getElementById("bottom").textContent = val;    
    } else {
        document.getElementById("bottom").textContent += val;
    }
}
