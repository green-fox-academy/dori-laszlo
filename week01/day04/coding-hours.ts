'use strict';

// An average Green Fox attendee codes 6 hours daily
// The semester is 17 weeks long
//
// Print how many hours is spent with coding in a semester by an attendee,
// if the attendee only codes on workdays.
//
// Print the percentage of the coding hours in the semester if the average
// work hours weekly is 52

let semester: number = 17;
let hoursCoding: number = 6;

console.log(hoursCoding * semester * 5);
console.log(((semester * 52) / (semester * 7 * 24)) * 100);