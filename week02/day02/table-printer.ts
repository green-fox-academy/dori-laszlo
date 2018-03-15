'use strict';
// Create a function that prints the ingredient list of dictionaries to the console in the following format:
//
// +--------------------+---------------+----------+
// | Ingredient         | Needs cooling | In stock |
// +--------------------+---------------+----------+
// | vodka              | Yes           | 1        |
// | coffee_liqueur     | Yes           | -        |
// | fresh_cream        | Yes           | 1        |
// | captain_morgan_rum | Yes           | 2        |
// | mint_leaves        | No            | -        |
// +--------------------+---------------+----------+
//
// OPTIONAL
// The frist columns should be automatically as wide as the longest key
let ingredients: any[] = [
    { name: 'vodka', in_stock: 1, needs_cooling: true },
    { name: 'coffee_liqueur', in_stock: 0, needs_cooling: true },
    { name: 'fresh_cream', in_stock: 1, needs_cooling: true },
    { name: 'captain_morgan_rum', in_stock: 2, needs_cooling: true },
    { name: 'mint_leaves', in_stock: 0, needs_cooling: false },
    { name: 'sugar', in_stock: 0, needs_cooling: false },
    { name: 'lime juice', in_stock: 0, needs_cooling: true },
    { name: 'soda', in_stock: 0, needs_cooling: true }
];

let plus: string = '+';
let minus: string = '-';
let pipe: string = '|';
let space: string = ' ';

function print(ingredients) {
    let firstLine: string[] = [];
    firstLine.push(plus);
    for (let i: number = 1; i <= 20; i++) {
        firstLine.push(minus);
    }
    firstLine.push(plus);
    for (let i: number = 1; i <= 15; i++) {
        firstLine.push(minus);
    }
    firstLine.push(plus);
    for (let i: number = 1; i <= 10; i++) {
        firstLine.push(minus);
    }
    firstLine.push(plus, '\n', pipe, ' Ingredient');
    for (let i: number = 1; i <= 9; i++) {
        firstLine.push(space);
    }
    firstLine.push(pipe, ' Needs cooling ', pipe, ' In stock ', pipe, '\n');
    firstLine.push(plus);
    for (let i: number = 1; i <= 20; i++) {
        firstLine.push(minus);
    }
    firstLine.push(plus);
    for (let i: number = 1; i <= 15; i++) {
        firstLine.push(minus);
    }
    firstLine.push(plus);
    for (let i: number = 1; i <= 10; i++) {
        firstLine.push(minus);
    }
    firstLine.push(plus, '\n', pipe, space, ingredients[0].name);
    for (let i: number = 1; i <= 14; i++) {
        firstLine.push(space);
    }
    firstLine.push(pipe, space, ingredients[0].needs_cooling);
    return firstLine.join('');
};

console.log(print(ingredients));