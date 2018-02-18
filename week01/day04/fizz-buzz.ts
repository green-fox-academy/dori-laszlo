'use strict';

// Write a program that prints the numbers from 1 to 100.
// But for multiples of three print “Fizz” instead of the number
// and for the multiples of five print “Buzz”.
// For numbers which are multiples of both three and five print “FizzBuzz”.

for (let i4: number = 1; i4 <= 100; i4++) {
    if ((i4 % 3) === 0) {
        console.log('Fizz');
    } else if ((i4 % 5) === 0) {
        console.log('Buzz');
    } else if (((i4 % 3) === 0) && ((i4 % 5) === 0)) {
        console.log('FizzBuzz');
    } else {
        console.log(i4);
    }
}

