'use strict';

import { Bird } from './zoo';

export interface Flyable {
    distance: number;

    land();

    fly(tavelled, speed);

    takeOff();
}

abstract class Vehicle {
    type: string;
    speed: number;
    maxSpeed: number;

    constructor(type: string, speed: number, maxSpeed?: number) {
        this.type = type;
        this.speed = speed;
        this.maxSpeed = 100;
    }
}

class Helikopter extends Vehicle implements Flyable {
    distance: number;

    constructor(distance: number) {
        super('Helikopter', 0)
        this.distance = distance;
    };


    land(): number {
        this.speed = 0;
        return this.speed;
    };

    fly(metersTravelled, speed) {
        let flight: number[] = [];
        if (this.speed > 0) {
            this.distance += metersTravelled;
            flight.push(this.distance);
            this.speed += speed;
            flight.push(this.speed);
        }
        return flight;
    };

    takeOff() {
        this.speed++;
        this.distance++;
    };
}

let csori = new Bird('Csorike', 'parrot', 'female');
let helikopter = new Helikopter(0);

console.log(helikopter);
helikopter.takeOff();
helikopter.fly(1000, 80);
console.log(helikopter);
csori.takeOff();
csori.fly(23,15);
csori.land();
console.log(csori);