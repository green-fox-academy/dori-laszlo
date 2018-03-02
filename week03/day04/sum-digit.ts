'Use strict';

// Given a non-negative int n, return the sum of its digits recursively (no loops). 
// Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while 
// divide (/) by 10 removes the rightmost digit (126 / 10 is 12).

// function sum(n: number): number {
//     let s: number = 0;
//     s = Math.floor(n / 10) + (n % 10);
//     return s;
// }

// function sum2(n: number): number {
//     let rest: number = 0;
//     let divideten: number = 0;
    
//     return sum2(n)
// }

function sumDigits(n: number) {
    return n == 0 ? 0 : n % 10 + sumDigits(Math.floor(n / 10));
  }

console.log(sumDigits(53));