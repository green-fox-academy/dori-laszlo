'Use strict';

function addNum(n: number): number {
    if (n > 0) {
        return n + addNum(n - 1);
    } else {
        return 0;
    }
}
  
console.log(addNum(20));