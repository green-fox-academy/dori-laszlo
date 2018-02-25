'use strict';

let students: any[] = [
  {name: 'Teodor', age: 3, candies: 2},
  {name: 'Rezso', age: 9.5, candies: 2},
  {name: 'Zsombor', age: 12, candies: 5},
  {name: 'Aurel', age: 7, candies: 3},
  {name: 'Olaf', age: 12, candies: 7},
  {name: 'Gerzson', age: 10, candies: 1},
];

// create a function that takes a list of students and logs: 
// - how many candies are owned by students
// create a function that takes a list of students and logs:
// - Sum of the age of people who have lass than 5 candies


function studentList(list: any[]): any {
    let candiesSum = 0;
    list.forEach(function(item) {
        candiesSum += item.candies;
    })
    return candiesSum;
}

console.log(studentList(students));

function listAge(list: any[]): any {
    let ageSum = 0;
    list.forEach(function(item) {
       if(item.candies > 5) {
        ageSum += item.age;
    }
    })
    return ageSum;
}

console.log(listAge(students));