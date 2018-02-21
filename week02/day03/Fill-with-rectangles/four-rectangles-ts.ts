'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw four different size and color rectangles.
// Avoid code duplication.


//NOT PERFECT SOLUTION
// STARTING COLOR: #5AA6B1
let colorValue: number = 1;
let rectangleWidth: number = 200;
let rectangleHeight: number = 200;

function makeRectangles2() {
    for(let i: number = 1; i <= 4; i++) {
        ctx.fillStyle = `#${colorValue}AA6B1`;
        colorValue += 2;
        rectangleWidth -= 40;
        rectangleHeight -= 40;
        ctx.beginPath();
        ctx.fillRect(10, 10, rectangleWidth, rectangleHeight);
        ctx.fill();
    }
}

//makeRectangles2();


//THIS ONE WORKS CORRECTLY

let rectangleSize1: number = 200;
let rectangleSize2: number = 200;

function makeRectangles() {
    for(let i: number = 1; i <= 4; i++) {
        ctx.fillStyle = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
        rectangleSize1 -= 40;
        rectangleSize2 -= 40;
        ctx.beginPath();
        ctx.fillRect(10, 10, rectangleSize1, rectangleSize2);
        ctx.fill();
    } 
}

makeRectangles();

