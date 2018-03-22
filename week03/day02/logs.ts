'use strict';

// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.

const fs = require('fs');

function ipAddresses(file: string) {
  let rows = fs.readFileSync(file, 'utf-8').split('\n');
  let elements = [];
  let ipAddresses = [];
  for (let i: number = 0; i < rows.length; i++) {
    elements.push(rows[i].split(' '));
  }
  for (let i: number = 0; i < elements.length; i++) {
    if (ipAddresses.indexOf(elements[i]) === -1) {
      ipAddresses.push(elements[i][8]);
    }
  }
  return ipAddresses;
};

function ratioGetPos(file: string) {
  let rows = fs.readFileSync(file, 'utf-8').split('\n');
  let elements = [];
  let POST = 0;
  let GET = 0;
  for (let i: number = 0; i < rows.length; i++) {
    elements.push(rows[i].split(' '));
  }
  for (let i: number = 0; i < elements.length; i++) {
    if (elements[i][11] === 'POST') {
      POST++;
    } if (elements[i][11] === 'GET') {
      GET++;
    }
  }
  return `GET: ${GET} / POST: ${POST}`;
};

console.log(ipAddresses('log.txt'));
console.log(ratioGetPos('log.txt'));