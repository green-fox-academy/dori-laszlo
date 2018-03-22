'use strict';

import { test } from 'tape';
import { countLetters } from './count-letters3';

test('count letters', t => {
  const actual = countLetters('abba');
  const expected = {a: 2, b: 2};

  t.deepEqual(actual, expected);
  t.deepEqual(countLetters('ab'), {a: 1, b: 1});
  t.deepEqual(countLetters('d ftok5'), {5: 1, d: 1, ' ': 1, f: 1, t: 1, o: 1, k: 1});
  t.end();
});
