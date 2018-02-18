'use strict';

let lineCount: number = 4;

// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is

let star: string = '*'
for (let i5: number = 1; i5 <= lineCount; i5++) {
    console.log(star);
    star += '*';
}

