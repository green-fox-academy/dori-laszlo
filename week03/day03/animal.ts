'Use strict';

// Create an Animal class
// Every animal has a hunger value, which is a whole number
// Every animal has a thirst value, which is a whole number
// when creating a new animal object these values are created with the default 50 value
// Every animal can eat() which decreases their hunger by one
// Every animal can drink() which decreases their thirst by one
// Every animal can play() which increases both by one

class Animal {
    public hunger: number;
    public thirst: number;

    constructor(thirst: number = 50, hunger: number = 50) {
        this.thirst = thirst
        this.hunger = hunger
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

let cat = new Animal();
cat.play();
console.log(cat);