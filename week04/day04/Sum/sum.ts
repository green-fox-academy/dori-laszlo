'use strict';

// Sum
// Create a sum method in your class which has a list of integers as parameter
// It should return the sum of the elements in the list
// Follow these steps:
// Add a new test case
// Instantiate your class
// create a list of integers
// use the t.equal to test the result of the created sum method
// Run it
// Create different tests where you
// test your method with an empyt list
// with a list with one element in it
// with multiple elements in it
// with a null
// with a string
// Run them
// Fix your code if needed

import { test } from 'tape';
import { Sum } from '../Sum/sum-class'

test('sum of elements', t => {
    let list = new Sum([1,2,3,4,5]);
  
    let actual = list.getSum();
    let expected = 15;
  
    t.equal(actual, expected);
    t.equal(new Sum([]).getSum(), 0);
    t.equal(new Sum([0]).getSum(), 0);
    t.equal(new Sum([1,2,'fox',3,]).getSum(), 6);
    t.equal(new Sum([1,2,'3',3,]).getSum(), 6);
    t.end();
});