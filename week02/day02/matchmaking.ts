'use strict';
// Write a function that joins two array by matching one girl with one boy in a new array
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]
let girls: string[] = ['Eve', 'Ashley', 'Bözsi', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Béla', 'Todd', 'Neef', 'Jeff'];

function makingMatches(pairs: any[], pairs2: any[]): any {
    let matches: any[] = [];
    for(let i: number =0; i < girls.length; i++) {
        matches = matches.concat(girls[i] , boys[i]);
    }
    return matches.toString();
}

console.log(makingMatches(girls, boys));

//export = makingMatches;
