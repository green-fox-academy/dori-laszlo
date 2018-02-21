'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a square drawing function that takes 2 parameters:
// The x and y coordinates of the square's top left corner
// and draws a 50x50 square from that point.
// Draw 3 squares with that function.
// Avoid code duplication.

let TopLeftX: number = 20;
let TopLeftY: number = 20;

function square50x50(a, b) {
    ctx.fillStyle = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    ctx.beginPath();
    ctx.fillRect(a, b, 50, 50);
    ctx.fill();
}

//square50x50(TopLeftX, TopLeftY);


for(let i: number = 1; i <=3; i++) {
    TopLeftX += 60;
    square50x50(TopLeftX, TopLeftY);
}


