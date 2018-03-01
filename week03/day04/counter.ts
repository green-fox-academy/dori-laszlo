'Use strict';

// Write a recursive function that takes one parameter: n and counts down from n.

function counter(n: number): number {
    if (n < 1) {
        return 0;
    } else {
        return counter(n - 1);
    }
}
  
console.log(counter(100));