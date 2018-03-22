'use strict';

export function countLetters(string: string): any {
  let stringToArray = string.split('');
  const ls = {};

  for (let i: number = 0; i < stringToArray.length; i++) {
    if (ls[stringToArray[i]] === undefined) {
      ls[stringToArray[i]] = 1;
    } else {
      ls[stringToArray[i]]++;
    }
  }
  return ls;
};