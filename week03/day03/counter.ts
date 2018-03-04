'Use strict';

// Create a Counter class
// which has an integer property
// when creating it should have a default value 0 or we can specify it when creating
// we can add(number) to increase the counter's value by a whole number
// or we can add() without parameters just increasing the counter's value by one
// and we can get() the current value as string
// also we can reset() the value to the initial value

class Counter {
    public value: number = 0;
    constructor(value: number = 0) {
        this.value = value;
    }

    add(number?: number) {
        if (number) {
            return this.value += number;
        } else {
            return this.value += 1;
        }
    }

    get(): string {
        return this.value.toString();
    }

    reset() {
        this.value = 0;
    }
}

let number = new Counter;
console.log(number);
number.add();
number.reset();
number.get();
console.log(number);
number.add(12);
console.log(number.get());