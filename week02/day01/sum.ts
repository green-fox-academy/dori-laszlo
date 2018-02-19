'use strict';

// -  Write a function called `sum` that sum all the numbers until the given parameter
// -  The function should return the result

let givenNumber: number = 5;
function sum(sumNum: number): number {
    let calculateSum: number = 0;
    for (let i: number = 0; i <= sumNum; i++) {
        calculateSum += i;
    }
   
    return calculateSum;
}

console.log(sum(givenNumber));
