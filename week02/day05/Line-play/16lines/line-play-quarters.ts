'use strict';

let canvas2 = document.querySelector('.main-canvas') as HTMLCanvasElement;
let ctx = canvas2.getContext('2d');

let movetoX: any = canvas2.width / 16;
let movetoY: any = 0;
let linetoX: any = canvas2.width;
let linetoY: any = canvas2.height / 16;
let color1: string = '#DD577A';
let color2: string = '#6F0953';

function lines1(mX, mY, lX, lY, color) {
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(mX, mY);
    ctx.lineTo(lX, lY);
    ctx.stroke();
}

for(let j: number = 0; j < 15; j++) {
    lines1(movetoX, movetoY, linetoX, linetoY, color1);
    movetoX += canvas2.width / 16;
    linetoY += canvas2.height / 16;
}

let movetoX2: any = (canvas2.width / 16) * 15;
let movetoY2: any = canvas2.height;
let linetoX2: any = 0;
let linetoY2: any = (canvas2.height / 16) * 15;

for(let j: number = 0; j < 15; j++) {
    lines1(movetoX2, movetoY2, linetoX2, linetoY2, color2);
    movetoX2 -= canvas2.width / 16;
    linetoY2 -= canvas2.height / 16;
}