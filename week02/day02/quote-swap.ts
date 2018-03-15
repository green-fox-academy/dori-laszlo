'use strict';
// Accidentally I messed up this quote from Richard Feynman.
// Two words are out of place
// Your task is to fix it by swapping the right words with code
// Also, log the sentence to the console with spaces in between.
// Create a function called quoteSwap().
let words: string[] = ['What', 'I', 'do', 'create,', 'I', 'cannot', 'not', 'understand.'];
let keyNumbers = {
    0: 0,
    1: 1,
    2: 5,
    3: 3,
    4: 4,
    5: 2,
    6: 6,
    7: 7,
};

function quoteSwap(mixedWords) {
    mixedWords[5] = mixedWords.splice(2, 1, mixedWords[5]);
    return mixedWords.join(' ');
};

console.log(quoteSwap(words));


// Expected output: "What I cannot create I do not understand."
export = quoteSwap;