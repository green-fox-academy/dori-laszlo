'use strict';
// 1.
// setTimeout(function(){
//   console.log('TIMED OUT!');
// }, 300);


// 2.
require('es6-promise');

// var promise = new Promise(function (fulfill, reject) {
//   // After the timeout reaches 300ms, fulfill the promise with value
//   // 'FULFILLED!'.

//   setTimeout(function () {
//     fulfill('FULFILLED!');
//   }, 300);
// });

// promise.then(console.log);


// 3.
// var promise = new Promise(function (fulfill, reject) {
//   // Your solution here
//   setTimeout(function () {
//     reject(new Error('REJECTED!'));
//   }, 300);
// });

// function onReject (error) {
//   // Your solution here
//   console.log(error.message);
// };

// // Your solution here
// promise.then(null, onReject);


// 4.
// var promise = new Promise(function (fulfill, reject) {
//   fulfill('I FIRED');
//   reject(new Error('I DID NOT FIRE'));
// });

// function onReject(error) {
//   console.log(error.message);
// }

// promise.then(console.log, onReject);


// 5.
// var promise = new Promise(function (fulfill, reject) {
//   fulfill('PROMISE VALUE');
// });

// promise.then(console.log);

// console.log('MAIN PROGRAM');

// 6.
// // promise.catch(function (err) {
// //   console.error('THERE IS AN ERROR!!!');
// //   console.error(err.message);
// // });

var message;
var promise;

function randomBytes(n) {
  return (Math.random() * Math.pow(256, n) | 0).toString(16);
}

message =
  'A fatal exception ' + randomBytes(1) + ' has occurred at ' +
  randomBytes(2) + ':' + randomBytes(4) + '. Your system\nwill be ' +
  'terminated in 3 seconds.';

promise = Promise.reject(new Error(message));

promise.catch(function (err) {
  var i = 3;

  process.stderr.write(err.message);

  setTimeout(function boom() {
    process.stderr.write('\rwill be terminated in ' + (--i) + ' seconds.');
    if (!i) {
      process.stderr.write('\n..... . . . boom . . . .....\n');
    } else {
      setTimeout(boom, 1000);
    }
  }, 1000);
});
