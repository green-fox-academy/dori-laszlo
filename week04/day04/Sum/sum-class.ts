'use strict';

export class Sum {
    list: any[] = [];

    constructor(numbers: any[]) {
        this.list = numbers;
    }

    getSum(): any {
        let sum = 0;
        for (let i: number = 0; i < this.list.length; i++) {
            if (typeof this.list[i] === 'number') {
                sum += this.list[i];
            } else if (typeof this.list[i] === 'string') {
                sum += 0;
            }
        }
        return sum;
    }
}