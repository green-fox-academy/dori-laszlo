'use strict';
// Create a function called "appendA()" that adds "a" to every string in the far list.
// The parameter should be a list.

let far: string[] = ['kuty', 'macsk', 'kacs', 'rók', 'halacsk'];
function appendA(list: string[]): any {
    for(let i: number = 0; i < list.length; i++) {
        list[i] += 'a';
    }
    return list.toString();
}

console.log(appendA(far));



// The output should be: 'kutya', 'macska', 'kacsa', 'róka', 'halacska'
//export = appendA;

