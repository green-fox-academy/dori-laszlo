'use strict';

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;
let allSeconds: number = 24 * 60 * 60;
let remainingTime: string = ('Remaining time (in seconds): ');

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables

console.log(remainingTime + ((allSeconds - (currentHours * 60 * 60) - 1) + (currentMinutes * 60) - 1) + currentSeconds);
