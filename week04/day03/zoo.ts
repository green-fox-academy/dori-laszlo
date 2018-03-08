'use strict';

abstract class Animal {
    name: string;
    species: string;
    gender: string;
    tiredness: number;
    hunger: number;
    age: number;

    constructor(name: string, species: string, gender: string, tiredness?: number, hunger?: number, age?: number) {
        this.name = name;
        this.species = species;
        this.gender = gender;
        this.tiredness = 50;
        this.hunger = 50;
        this.age = 2;
    }

    getName(): string {
        return this.name;
    }

    abstract breed();

    feed(): number {
        return this.hunger--;
    }

    sleep(): number {
        return this.tiredness--;
    }
}

class Mammal extends Animal {

    breed(): string {
        if (this.age > 2) {
            return `Having a new miniature ${this.species}.`
        } else {
            return;
        }
    }
}

class Reptile extends Animal {

    breed(): string {
        if (this.age > 3) {
            return `Having a new ${this.species} egg.`;
        } else {
            return;
        }

    }
}

class Bird extends Animal {

    breed(): string {
        if (this.age > 1) {
            return `Having a new ${this.species} egg.`;
        } else {
            return;
        }
    }
}

let reptile = new Reptile('Croc', 'Crocodile', 'male');
let mammal = new Mammal('Lajos', 'Koala', 'male');
let bird = new Bird('Csori', 'Parrot', 'female');

console.log("How do you breed?");
console.log("A " + reptile.getName() + " is breeding by " + reptile.breed());
console.log("A " + mammal.getName() + " is breeding by " + mammal.breed());
console.log("A " + bird.getName() + " is breeding by " + bird.breed());