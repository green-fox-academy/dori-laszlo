'use strict';

// Create a method that decrypts duplicated-chars.txt

const fs = require('fs');

// function removeDuplicated(filename: string) {
//     let text: string[] = [];
//     text.push(filename.toString());
//     for (let i: number = 0; i < text.length; i++) {
//         if (text[i] === text[i - 1]) {
//             text.
//         }
//     }
// }

function removeDuplicateCharacters(string) {
    let toString = fs.readFileSync(string, 'utf-8').toString();
    return toString
        .split('')
        .filter(function (item, pos, self) {
            return self.indexOf(item) == pos;
        })
        .join('');
}
console.log(removeDuplicateCharacters('duplicated-chars.txt'));


//   function removeDuplicateCharacters(string) {
//     return string
//       .split('')
//       .filter(function(item, pos, self) {
//         return self.indexOf(item) == pos;
//       })
//       .join('');
//   }
//   console.log(removeDuplicateCharacters('baaaraban'));