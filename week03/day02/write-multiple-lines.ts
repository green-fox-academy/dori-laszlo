'Use strict';

// Create a function that takes 3 parameters: a path, a word and a number,
// than it should write to a file.
// The path parameter should be a string, that describes the location of the file.
// The word parameter should be a string, that will be written to the file as lines
// The number paramter should describe how many lines the file should have.
// So if the word is 'apple' and the number is 5, than it should write 5 lines
// to the file and each line should be 'apple'
// The function should not raise any error if it could not write the file.

const fs = require('fs');
let word: string = 'banana\n';
let number: number = 5;

try {
function fileWrite(path: string, word: string, number: number) {
    for(let i: number = 1; i <= number; i++) {
        fs.writeFileSync(path, word);
        word += 'banana\n';
    }
}
fileWrite('write-me.txt', word, number);

} catch(err) {
        console.log('Unable to write file: write-me.txt');
    }