'use strict';

let canvas2 = document.querySelector('.main-canvas') as HTMLCanvasElement;
let ctx = canvas2.getContext('2d');

let movetoX: any = canvas2.width / 64;
let movetoY: any = 0;
let linetoX: any = canvas2.width;
let linetoY: any = canvas2.height / 64;

function lines1(mX, mY, lX, lY) {
    ctx.strokeStyle = '#DD577A';
    ctx.beginPath();
    ctx.moveTo(mX, mY);
    ctx.lineTo(lX, lY);
    ctx.stroke();
}

function lines2(mX, mY, lX, lY) {
    ctx.strokeStyle = '#6F0953';
    ctx.beginPath();
    ctx.moveTo(mX, mY);
    ctx.lineTo(lX, lY);
    ctx.stroke();
}

for(let j: number = 0; j < 63; j++) {
    lines1(movetoX, movetoY, linetoX, linetoY);
    movetoX += canvas2.width / 64;
    linetoY += canvas2.height / 64;
}

let movetoX2: any = (canvas2.width / 64) * 63;
let movetoY2: any = canvas2.height;
let linetoX2: any = 0;
let linetoY2: any = (canvas2.height / 64) * 63;

for(let j: number = 0; j < 63; j++) {
    lines2(movetoX2, movetoY2, linetoX2, linetoY2);
    movetoX2 -= canvas2.width / 64;
    linetoY2 -= canvas2.height / 64;
}
