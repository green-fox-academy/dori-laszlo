'use srict';

import { test } from 'tape';
import { Apple } from './apples-class';

test('get apple', t => {
    let myApple = new Apple();
  
    let actual = myApple.getApple();
    let expected = 'apple';
  
    t.equal(actual, expected);
    t.end();
});