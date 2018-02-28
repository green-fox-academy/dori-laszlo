'Use strict';

// Open a file called 'my-file.txt'
// Write your name in it as a single line
// If the program is unable to write the file,
// then it should print an error message like: 'Unable to write file: my-file.txt'

const fs = require('fs');

try {
    fs.writeFileSync('myname-file.txt', 'László Dóri');
} catch(err) {
    console.log('Unable to write file: myname-file.txt');
}
