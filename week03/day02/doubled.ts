'use strict';

// Create a method that decrypts duplicated-chars.txt

const fs = require('fs');

function removeDuplicated(filename: string) {
    let text: string[] = fs.readFileSync(filename, 'utf-8').split('');
    let decoded: string[] = [];
    for (let i: number = 0; i < text.length; i++) {
        if (text[i] === text[i - 1]) {
            continue;
        }
        decoded.push(text[i]);
    }
    return decoded.join('');
};

console.log(removeDuplicated('duplicated-chars.txt'));