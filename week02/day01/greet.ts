'use strict';

// -  Create variable named `name` and assign the value `Greenfox` to it
// -  Create a function called `greet` that greets it's input parameter
//     -  Greeting is printing e.g. `Greetings, dear Greenfox`
//     -  Prepare for the special case when no parameters are given
// -  Greet `name`

let name2: string = 'Greenfox';
function greet(greeting?: string) {
    if (name2) {
        return 'Greetings, dear ' + greeting;
    } else {
        return 'Greet name';
    }
}

console.log(greet(name2));


let name3: string = 'Greenfox';
function greet1(greeting?: string) {
    let welcomeString: string = 'Greetings, dear ';
    if (greeting) {
        welcomeString += greeting;
    } else {
        welcomeString += '\'name\'';
    }

    return welcomeString;
}

console.log(greet1());
