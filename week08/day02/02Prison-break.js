// Create a prison function, that has your name as a private fugutive variable
// The function should return an object that has two methods:
//  - visit() // logs "[yourname] is visited [x] time(s)" to the console.
//    - the [x] times displayes the numbers the function is called
//    - If the fugitive variable is empty, then display "Nobody is here anymore"
//  - escape() // logs "BREAKING NEWS, [yourname] escaped the prison" to the console.
//    - it should empties the fugitive variable

function prison(name) {
  return {
    fugutive: name,
    numberOfVisits: 0,
    visit: function () {
      if (this.fugutive === '') {
        return `Nobody is here anymore`;
      } else {
        this.numberOfVisits++;
        return `${this.fugutive} is visited ${this.numberOfVisits} time(s)`;
      }
    },
    escape: function () {
      console.log(`BREAKING NEWS, ${this.fugutive} escaped the prison`);
      this.fugutive = '';
    },
  };
}

const alcatraz = prison('Sad Panda');

console.log(alcatraz.visit()); // Sad Panda is visited 1 time(s)
console.log(alcatraz.visit()); // Sad Panda is visited 2 time(s)
alcatraz.escape(); // BREAKING NEWS, Sad Panda escaped the prison
console.log(alcatraz.visit()); // Nobody is here anymore
