
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with rainbow colored squares.

let size: number = 690;
let fillColor: string[] = ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#9400D3'];

function rainbowSquares(a: number, b: string) {
    ctx.fillStyle = b;
    ctx.beginPath();
    ctx.fillRect((300-(size / 2)),(200-(size / 2)) ,size, size);
    ctx.fill();
}

for(let i: number = 0; i <= 7; i++) {
    //size -= size / 7;
    size -= 90;
    rainbowSquares(size, fillColor[i]);
}
