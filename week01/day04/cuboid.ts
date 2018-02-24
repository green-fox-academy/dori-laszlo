'use strict';

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000

let a: number = 15.3;
let b: number = 20.8;
let c: number = 10.25;
let surface: string = 'Surface Area: ';
let volume: string = 'Volume: ';

console.log(surface + ((2 * a) + (2 * b * c) + (2 * a * c)));
console.log(volume + (a * b * c));

