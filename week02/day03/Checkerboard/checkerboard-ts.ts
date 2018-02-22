'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Fill the canvas with a checkerboard pattern.

let squareSize: number = canvas.width / 8;
let posX: number = squareSize;
let posY: number = 0;

function checker(a: number, x: number, y: number) {
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.fillRect(x, y, a, a);
    ctx.fill();
}

for(let j: number = 1; j <=8; j++) {
    posX = 0;
    for(let i: number = 1; i <=8; i++) {
        if((i % 2) === 0 && ((j % 2)) !== 0 || ((i % 2) !== 0 && (j % 2) === 0)) {        
        checker(squareSize, posX, posY);
        }
        posX += squareSize;

    }
    posY += squareSize;
}