
function reverseString(str) {
    return str.split('').reverse().join('');
}

let text = "Akademia108";
let reversedText = reverseString(text);
console.log(reversedText);
