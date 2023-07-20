# styles.css
## main-body floating
   /*Animations*/
    animation-name: main-body;
    animation-duration: 2.5s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;

@keyframes main-body {
    0% {transform: translate(0, 0px);}
    50% {transform: translate(0, 10px);}
    100% {transform: translate(0, -0px);}
}

script.js
// Function to format the number with commas
function formatNumberWithCommas(number) {
    var parts = number.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}