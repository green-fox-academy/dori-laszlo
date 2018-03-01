'Use strict';

// Given a non-negative int n, return the sum of its digits recursively (no loops). 
// Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while 
// divide (/) by 10 removes the rightmost digit (126 / 10 is 12).

function sum(n: number): number {
    let s: number = 0;
    s = Math.floor(n / 10) + (n % 10);
    return s;
}

function sum2(n: number): number {
    return n - sum2((n % 10) / 10);
}



// function addNum(n: number): number {
//     if (n > 0) {
//         return n + addNum(n - 1);
//     } else {
//         return 0;
//     }
// }

console.log(sum2(53));