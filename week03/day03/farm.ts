'use strict';

// Farm
// Reuse your Animal class
// Create a Farm class
// it has list of Animals
// it has slots which defines the number of free places for animals
// breed() -> creates a new animal if there's place for it
// slaughter() -> removes the least hungry animal

class Animal {
    public hunger: number;
    public thirst: number;

    constructor(thirst: number = 50, hunger: number = 50) {
        this.thirst = thirst;
        this.hunger = hunger;
    }

    eat(): any {
        return this.hunger -= 1;
    }

    drink(): number {
        return this.thirst -= 1;
    }

    play(): number {
        return this.hunger -= 1, this.thirst -= 1;
    }
}

class Farm {
    animals: Animal[];
    maxCapacity: number = 5;

    constructor() {
        this.animals = [];
    }

    buyAnimal(animal: Animal) {
        if (this.animals.length < this.maxCapacity) {
            this.animals.push(animal);
        } else {
            console.log('You have reached your farm\'s maximum capacity');
        }
    };

    getAnimals() {
        for (let i: number = 0; i < this.animals.length; i++) {
            console.log(this.animals[i]);
        }
    };

    breed() {
        if (this.animals.length > 1 && this.animals.length < this.maxCapacity) {
            this.animals.push(new Animal);
        } if (this.animals.length === this.maxCapacity) {
            console.log('You have reached your farm\'s maximum capacity.');
        } if (this.animals.length < 2) {
            console.log(`You need at least 2 animals in your farm to breed. Now You have: ${this.animals.length}.`);
        }
    };

    slaughter() {
        this.animals.sort(function (a, b) {
            return b.hunger - a.hunger
        })
        this.animals.pop();
        return this.animals;
    };
}

let farm = new Farm();
farm.buyAnimal(new Animal(20, 60));
farm.buyAnimal(new Animal(70, 30));
farm.buyAnimal(new Animal(40, 22));
farm.slaughter();
farm.getAnimals();


//console.log(farm);