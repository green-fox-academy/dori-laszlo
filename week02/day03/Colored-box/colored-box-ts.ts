'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// draw a box that has different colored lines on each edge.

ctx.strokeStyle = "#EDDE45";
ctx.beginPath();
ctx.moveTo(50 , 50);
ctx.lineTo(350 , 50);
ctx.stroke();

ctx.strokeStyle = "#61D2D6";
ctx.beginPath();
ctx.moveTo(350 , 50);
ctx.lineTo(350 , 300);
ctx.stroke();

ctx.strokeStyle = "#ED146F";
ctx.beginPath();
ctx.moveTo(350 , 300);
ctx.lineTo(50 , 300);
ctx.stroke();

ctx.strokeStyle = "#9BF0E9";
ctx.beginPath();
ctx.moveTo(50 , 300);
ctx.lineTo(50 , 50);
ctx.stroke();