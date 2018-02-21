'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a square drawing function that takes 1 parameter:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.

let squareSize: number = 200;


function centeredSquares(a) {
    ctx.fillStyle = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    ctx.beginPath();
    ctx.fillRect((300-(a / 2)),(200-(a / 2)) ,a, a);
    ctx.fill();
}

//centeredSquares(squareSize);

for(let i: number = 1; i <= 3; i++) {
    squareSize /= 2
    centeredSquares(squareSize);
}