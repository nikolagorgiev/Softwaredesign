"use strict";
var Wortverdreher;
(function (Wortverdreher) {
    let input = prompt("Write your sentence.");
    let inputReversed = input.split("").reverse().join("");
    console.log(inputReversed);
    let words = input.split(" ");
    let wordsReversed = inputReversed.split(" ");
    console.log(words.reverse().join(" "));
    console.log(wordsReversed.reverse().join(" "));
})(Wortverdreher || (Wortverdreher = {}));
//# sourceMappingURL=Wortverdreher.1.js.map