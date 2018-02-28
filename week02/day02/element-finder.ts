'use strict';

// Write a function that checks if the array contains "7"
// if it contains return "Hoorray" otherwise return "Noooooo"
const numbers: number[] = [1, 2, 3, 4, 5, 6, 8];

// The output should be: "Noooooo"
// Do this again with a different solution using different list functions!
//export = containsSeven;


//THIS SOLUTION DOES NOT RUN WHEN TYPECHECK IS ON

// function containsSeven(list: any[]): any {
//     if(list.includes(7)) {
//         return 'Hoorray';
//     } else {
//         return 'Noooooo';
//     }
// }


function containsSeven(list: any[]): any {
   let contains: string = '';
    for(let i: number = 0; i < list.length; i++)
        if(list[i] === 3) {
        contains = 'Hoorray';
        break;
    } else {
        contains = 'Noooooo';
    }
    return contains;
}

console.log(containsSeven(numbers));