'use strict';

// Write a function, that takes two strings and returns a boolean value based on if the two strings are Anagramms or not.
// Create a test for that.

import { test } from 'tape';
import { Anagram } from './anagram-function';

test('is anagram', t => {
    let anagram = new Anagram();

    let actual = anagram.isAnagram('fundamental', 'fluted manna');
    let expected = true;

    t.equal(actual, expected);
    t.equal(new Anagram().isAnagram('lake', 'kale'), true);
    t.equal(new Anagram().isAnagram('bear', 'beer'), false);
    t.equal(new Anagram().isAnagram('l a k e', 'kale'), true);
    t.end();
});

