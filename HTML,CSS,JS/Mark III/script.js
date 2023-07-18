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