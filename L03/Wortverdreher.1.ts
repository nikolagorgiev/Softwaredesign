namespace Wortverdreher {
    let input: string = prompt("Write your sentence.");
    let inputReversed: string = input.split("").reverse().join("");
    console.log(inputReversed);
    
    let words: string[] = input.split(" ");
    let wordsReversed: string[] = inputReversed.split(" ");
    console.log(words.reverse().join(" "));
    console.log(wordsReversed.reverse().join(" "));
}
