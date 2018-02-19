'use strict';


// -  Create a function called `factorio`
//    that returns it's input's factorial

let givenNumber2: number = 17;
function factorio(factor: number): number {
    let calculateFactorial: number = 1;
    for (let i2: number = 1; i2 <= givenNumber2; i2++) {
        calculateFactorial = (calculateFactorial * i2);
    }
    return calculateFactorial;
}

console.log(factorio(givenNumber2));

