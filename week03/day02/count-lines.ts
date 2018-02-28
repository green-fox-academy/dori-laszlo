'Use strict';

// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

const fs = require('fs');

// function lineCount(): any {
//     let fileContent = fs.readFileSync('my-file.txt', 'utf-8');
//     let numEnter = 0;
//     for(let i: number = 1; i<fileContent.length; i++) {
//         if(fileContent[i] === '\n') {
//             numEnter++;
//         }
//     } return console.log(numEnter);
// }

//lineCount();

try {
    function lineCount(): any {
        let fileContent = fs.readFileSync('my-fie.txt', 'utf-8');
        let numEnter = 0;
        for(let i: number = 1; i<fileContent.length; i++) {
            if(fileContent[i] === '\n') {
                numEnter++;
            }
        } return console.log(numEnter);
    }
lineCount();
} catch(err) {
    console.log('0');
}