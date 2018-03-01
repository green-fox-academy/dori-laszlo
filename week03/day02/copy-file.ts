'Use strict';

// Write a function that copies a file to an other
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

const fs = require('fs');

try {
function copy(fileName1: string, fileName2: string): any {
     fs.writeFileSync(fileName1, fs.readFileSync('copy.txt', 'utf-8'));
     return console.log(true);
} 

copy('paste.txt', 'copy.txt');

} catch(err) {
    console.log(false);
}