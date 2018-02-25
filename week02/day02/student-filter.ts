'use strict';

let students2: any[] = [
  {name: 'Rezso', age: 9.5, candies: 2},
  {name: 'Zsombor', age: 12, candies: 5},
  {name: 'Aurel', age: 7, candies: 3},
  {name: 'Olaf', age: 12, candies: 7},
  {name: 'Gerzson', age: 10, candies: 1},
];

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies
// create a function that takes a list of students and logs: 
//  - how many candies they have on average

function candiesList(people: any[]) {
  people.forEach(function(person) {
    if(person.candies > 4) {
      console.log(person.name)
    }
  })
}

candiesList(students2);

function candiesAverage(people: any[]): any {
    let average: number = 0;
    people.forEach(function(person) {
        average += person.candies;
    })
    return average / people.length;
}

console.log(candiesAverage(students2));