'use strict';
// When saving this quote a disk error has occured. Please fix it.
// Add "always takes longer than" to between the words "It" and "you"

let quote: string = 'Hofstadter\'s Law: It you expect, even when you take into account Hofstadter\'s Law.'
let added = /It/gi;
let reQuote = quote.replace(added, 'It always takes longer than');
quote = reQuote;

console.log(quote);

//OTHER WAY

let quote2: string = 'Hofstadter\'s Law: It you expect, even when you take into account Hofstadter\'s Law.'
let quote21 = quote2.slice(0, 20);
let quote22 = quote2.slice(21);

console.log(quote21 + ' always takes longer than ' + quote22);

