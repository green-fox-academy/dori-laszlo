'use strict';

let lineCount2: number = 4;

// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

/* let star2: string = '*';
let space: string = ' ';
for (let i6: number = 1; i6 <= lineCount2; i6++) {
    console.log(space + star2);
    star2 += '*';
    space += ' ';

} */


let lineCount3: number = 4;
let star2: string = '';
for(let i7: number = 0; i7 <= lineCount3; i7++) {
        for(let j: number = 1; j <= lineCount3 - 1; j++) {
            star2 +=' ';
        /*}
        for(let k: number = 1; k<=(i*2)-1; k++) {    
           star += "*";
        } */
        console.log(star2);  
    } 