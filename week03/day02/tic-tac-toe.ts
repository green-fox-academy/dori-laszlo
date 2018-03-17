'use strict';

// Write a function that takes a filename as string,
// open and read it. The file data represents a tic-tac-toe
// game result. Return 'X'/'O'/'draw' based on which player
// has winning situation.

const fs = require('fs');

function ticTacResult(filename: string): string {
    let game = fs.readFileSync(filename, 'utf-8').split('');
    if ((game[0] === 'O' && game[1] === 'O' && game[2] === 'O') || (game[0] === 'O' && game[5] === 'O' && game[10] === 'O') || (game[0] === 'O' && game[4] === 'O' && game[8] === 'O') || (game[1] === 'O' && game[5] === 'O' && game[9] === 'O') || (game[2] === 'O' && game[5] === 'O' && game[8] === 'O') || (game[2] === 'O' && game[6] === 'O' && game[9] === 'O') || (game[4] === 'O' && game[5] === 'O' && game[6] === 'O') || (game[8] === 'O' && game[9] === 'O' && game[10] === 'O')) {
        return 'O';
    } if ((game[0] === 'X' && game[1] === 'X' && game[2] === 'X') || (game[0] === 'X' && game[5] === 'X' && game[10] === 'X') || (game[0] === 'X' && game[4] === 'X' && game[8] === 'X') || (game[1] === 'X' && game[5] === 'X' && game[9] === 'X') || (game[2] === 'X' && game[5] === 'X' && game[8] === 'X') || (game[2] === 'X' && game[6] === 'X' && game[9] === 'X') || (game[4] === 'X' && game[5] === 'X' && game[6] === 'X') || (game[8] === 'X' && game[9] === 'X' && game[10] === 'X')) {
        return 'X';
    } else {
        return 'draw';
    }
};


console.log(ticTacResult('win-o.txt'))
// should print O
console.log(ticTacResult('win-x.txt'))
// should print X
console.log(ticTacResult('draw.txt'))
// should print draw