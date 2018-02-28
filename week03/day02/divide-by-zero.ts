'use strict';

// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

function divide(number: number): any {
    if(number === 0) {
        return console.log('fail');
    }
    return console.log(number / 10);
}

divide(0);
divide(8);