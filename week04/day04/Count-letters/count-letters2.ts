'use strict';

// Write a function, that takes a string as an argument and returns a dictionary with all letters in the string as keys, and numbers as values that shows how many occurrences there are.
// Create a test for that.

function countLetters(string: string): any {
  let stringToArray = string.split('');
  // let letters: any[] = [
  //   { a: 0 },
  //   { b: 0 },
  //   { c: 0 },
  //   { d: 0 },
  //   { e: 0 },
  //   { f: 0 },
  //   { g: 0 },
  //   { h: 0 },
  //   { i: 0 },
  //   { j: 0 },
  //   { k: 0 },
  //   { l: 0 },
  //   { m: 0 },
  //   { n: 0 },
  //   { o: 0 },
  //   { p: 0 },
  //   { q: 0 },
  //   { r: 0 },
  //   { s: 0 },
  //   { t: 0 },
  //   { u: 0 },
  //   { v: 0 },
  //   { w: 0 },
  //   { x: 0 },
  //   { y: 0 },
  //   { z: 0 }
  // ];

  const ls = {};

  for (let i: number = 0; i < stringToArray.length; i++) {
    if (ls[stringToArray[i]] === undefined) {
      ls[stringToArray[i]] = 1;
    } else {
      ls[stringToArray[i]]++;
    }

    // if (stringToArray[i] === 'a' || stringToArray[i] === 'A' || stringToArray[i] === 'á' || stringToArray[i] === 'Á') {
    //   letters[0].a++;
    // } if (stringToArray[i] === 'b' || stringToArray[i] === 'B') {
    //   letters[1].b++;
    // } if (stringToArray[i] === 'c' || stringToArray[i] === 'C') {
    //   letters[2].c++;
    // } if (stringToArray[i] === 'd' || stringToArray[i] === 'D') {
    //   letters[3].d++;
    // } if (stringToArray[i] === 'e' || stringToArray[i] === 'E') {
    //   letters[4].e++;
    // } if (stringToArray[i] === 'f' || stringToArray[i] === 'F') {
    //   letters[5].f++;
    // } if (stringToArray[i] === 'g' || stringToArray[i] === 'G') {
    //   letters[6].g++;
    // } if (stringToArray[i] === 'h' || stringToArray[i] === 'H') {
    //   letters[7].h++;
    // } if (stringToArray[i] === 'i' || stringToArray[i] === 'I' || stringToArray[i] === 'í' || stringToArray[i] === 'I') {
    //   letters[8].i++;
    // } if (stringToArray[i] === 'j' || stringToArray[i] === 'J') {
    //   letters[9].j++;
    // } if (stringToArray[i] === 'k' || stringToArray[i] === 'K') {
    //   letters[10].k++;
    // } if (stringToArray[i] === 'l' || stringToArray[i] === 'L') {
    //   letters[11].l++;
    // } if (stringToArray[i] === 'm' || stringToArray[i] === 'M') {
    //   letters[12].m++;
    // } if (stringToArray[i] === 'n' || stringToArray[i] === 'N') {
    //   letters[13].n++;
    // } if (stringToArray[i] === 'o' || stringToArray[i] === 'O' || stringToArray[i] === 'ó' || stringToArray[i] === 'Ó' || stringToArray[i] === 'ö' || stringToArray[i] === 'ő' || stringToArray[i] === 'Ö' || stringToArray[i] === 'Ő') {
    //   letters[14].o++;
    // } if (stringToArray[i] === 'p' || stringToArray[i] === 'P') {
    //   letters[15].p++;
    // } if (stringToArray[i] === 'q' || stringToArray[i] === 'Q') {
    //   letters[16].q++;
    // } if (stringToArray[i] === 'r' || stringToArray[i] === 'R') {
    //   letters[17].r++;
    // } if (stringToArray[i] === 's' || stringToArray[i] === 'S') {
    //   letters[18].s++;
    // } if (stringToArray[i] === 't' || stringToArray[i] === 'T') {
    //   letters[19].t++;
    // } if (stringToArray[i] === 'u' || stringToArray[i] === 'U' || stringToArray[i] === 'ü' || stringToArray[i] === 'Ü' || stringToArray[i] === 'ű' || stringToArray[i] === 'Ű') {
    //   letters[20].u++;
    // } if (stringToArray[i] === 'v' || stringToArray[i] === 'V') {
    //   letters[21].v++;
    // } if (stringToArray[i] === 'w' || stringToArray[i] === 'W') {
    //   letters[22].w++;
    // } if (stringToArray[i] === 'x' || stringToArray[i] === 'X') {
    //   letters[23].x++;
    // } if (stringToArray[i] === 'y' || stringToArray[i] === 'Y') {
    //   letters[24].y++;
    // } if (stringToArray[i] === 'z' || stringToArray[i] === 'Z') {
    //   letters[25].z++;
    // }
  }

  //console.log('ezekvoltak: ', ls);
  return ls;  
};

console.log(countLetters('gfujgk'));