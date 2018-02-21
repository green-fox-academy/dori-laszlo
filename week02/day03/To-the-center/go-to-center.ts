'use strict';

let canvas2 = document.querySelector('.main-canvas') as HTMLCanvasElement;
let ctx = canvas2.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas
// Draw 3 lines with that function. Use loop for that.

let x: number = 10;
let y: number = 50;
function toTheCenter(first: number , second: number) {
    ctx.strokeStyle = '#DD577A';
    ctx.beginPath();
    ctx.moveTo(first , second);
    ctx.lineTo(300 , 200);
    ctx.stroke();
}

for(let i: number = 1; i <= 3; i++) {
    toTheCenter(x , y);
    x += 30;
    y += 10;
}
