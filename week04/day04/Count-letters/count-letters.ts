'use strict';

// Write a function, that takes a string as an argument and returns a dictionary with all letters in the string as keys, and numbers as values that shows how many occurrences there are.
// Create a test for that.

function countLetters(string: string): any {
  let letters: any[] = [
    { a: 0 },
    { b: 0 },
    { c: 0 },
    { d: 0 },
    { e: 0 },
    { f: 0 },
    { g: 0 },
    { h: 0 },
    { i: 0 },
    { j: 0 },
    { k: 0 },
    { l: 0 },
    { m: 0 },
    { n: 0 },
    { o: 0 },
    { p: 0 },
    { q: 0 },
    { r: 0 },
    { s: 0 },
    { t: 0 },
    { u: 0 },
    { v: 0 },
    { w: 0 },
    { x: 0 },
    { y: 0 },
    { z: 0 }
  ];
  for (let i: number = 0; i < string.length; i++) {
    if (string[i] === 'a' || string[i] === 'A' || string[i] === 'á' || string[i] === 'Á') {
      letters[0].a++;
    } if (string[i] === 'b' || string[i] === 'B') {
      letters[1].b++;
    } if (string[i] === 'c' || string[i] === 'C') {
      letters[2].c++;
    } if (string[i] === 'd' || string[i] === 'D') {
      letters[3].d++;
    } if (string[i] === 'e' || string[i] === 'E') {
      letters[4].e++;
    } if (string[i] === 'f' || string[i] === 'F') {
      letters[5].f++;
    } if (string[i] === 'g' || string[i] === 'G') {
      letters[6].g++;
    } if (string[i] === 'h' || string[i] === 'H') {
      letters[7].h++;
    } if (string[i] === 'i' || string[i] === 'I' || string[i] === 'í' || string[i] === 'I') {
      letters[8].i++;
    } if (string[i] === 'j' || string[i] === 'J') {
      letters[9].j++;
    } if (string[i] === 'k' || string[i] === 'K') {
      letters[10].k++;
    } if (string[i] === 'l' || string[i] === 'L') {
      letters[11].l++;
    } if (string[i] === 'm' || string[i] === 'M') {
      letters[12].m++;
    } if (string[i] === 'n' || string[i] === 'N') {
      letters[13].n++;
    } if (string[i] === 'o' || string[i] === 'O' || string[i] === 'ó' || string[i] === 'Ó' || string[i] === 'ö' || string[i] === 'ő' || string[i] === 'Ö' || string[i] === 'Ő') {
      letters[14].o++;
    } if (string[i] === 'p' || string[i] === 'P') {
      letters[15].p++;
    } if (string[i] === 'q' || string[i] === 'Q') {
      letters[16].q++;
    } if (string[i] === 'r' || string[i] === 'R') {
      letters[17].r++;
    } if (string[i] === 's' || string[i] === 'S') {
      letters[18].s++;
    } if (string[i] === 't' || string[i] === 'T') {
      letters[19].t++;
    } if (string[i] === 'u' || string[i] === 'U' || string[i] === 'ü' || string[i] === 'Ü' || string[i] === 'ű' || string[i] === 'Ű') {
      letters[20].u++;
    } if (string[i] === 'v' || string[i] === 'V') {
      letters[21].v++;
    } if (string[i] === 'w' || string[i] === 'W') {
      letters[22].w++;
    } if (string[i] === 'x' || string[i] === 'X') {
      letters[23].x++;
    } if (string[i] === 'y' || string[i] === 'Y') {
      letters[24].y++;
    } if (string[i] === 'z' || string[i] === 'Z') {
      letters[25].z++;
    }
    return letters;
  }
};

  console.log(countLetters('gfujk'));