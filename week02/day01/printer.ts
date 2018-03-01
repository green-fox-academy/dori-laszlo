'use strict';

// -  Create a function called `printer`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)

let Numbers: any[] = [1, 'hello', false, 2,3,4,5];
function printer(logToConsole: any[]) {
    let valami: string = '';
    logToConsole.forEach(function(item) {
        valami += item + ' ';
    })
    console.log(valami);
}

printer(Numbers);

//PRACTICING

let Strings: string[] = ['alma','körte','banán','narancs'];
function fruits(printOut: string[]) {
    printOut.forEach(function(gyumik) {
        console.log(gyumik);
    })
}

fruits(Strings);