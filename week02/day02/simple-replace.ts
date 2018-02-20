'use strict';

//let example: string = 'In a dishwasher far far away';

// I would like to replace "dishwasher" with "galaxy" in this example
// Please fix it for me!
// Expected ouput: In a galaxy far far away


let re = /dishwasher/gi;
let example: string = 'In a dishwasher far far away';
let replacedExample = example.replace(/dishwasher/gi, "galaxy");
console.log(replacedExample);




