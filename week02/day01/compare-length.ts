'use strict';

// -  Create a variable named `firstList`
//    with the following content: `[1, 2, 3]`
// -  Create a variable named `secondList`
//    with the following content: `[4, 5]`
// -  Log to the console if `secondList` has more elements than `firstList`


let firstList: any[] = [1, 2, 3];
let secondList: any[] = [4, 5];
function list(print: any[]) {
    if (secondList.length > firstList.length) {
    print.forEach(function(elements) {
        console.log(elements);
    })
}
}

list(secondList);
