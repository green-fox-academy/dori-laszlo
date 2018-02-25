'use strict';
// Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
// Also, the URL is missing a crutial component, find out what it is and insert it too!

let url: string = 'https//www.reddit.com/r/nevertellmethebots';
let replace = /bots/gi;
let replace2 = /https/gi;
let replacedUrl = url.replace(replace, 'odds');
let insertItUrl = replacedUrl.replace(replace2, 'https:');

console.log(replacedUrl);
console.log(insertItUrl);




// let re = /dishwasher/gi;
// let example: string = 'In a dishwasher far far away';
// let replacedExample = example.replace(/dishwasher/gi, "galaxy");
// console.log(replacedExample);