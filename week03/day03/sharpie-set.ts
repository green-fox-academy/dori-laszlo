'Use strict';

// Reuse your Sharpie class
// Create SharpieSet class
// it contains a list of Sharpie
// countUsable() -> sharpie is usable if it has ink in it
// removeTrash() -> removes all unusable sharpies

class Sharpie {
    public color: string;
    public width: number;
    public inkAmount: number;

    constructor(color: string, width: number, inkAmount: number) {
        this.color = color;
        this.width = width;
        this.inkAmount = inkAmount;
    }

    use(use: number) {
        if ((this.inkAmount > 0) && (this.inkAmount - use) >= 0) {
            this.inkAmount -= use;
            console.log(`Written: ${use} units. Ink left: ${this.inkAmount} units`);
            return this.inkAmount;
        } else if (this.inkAmount - use < 0) {
            console.log(`Written: ${this.inkAmount} units. Ink has run out, ${use - this.inkAmount} units left unwritten!`);
            return this.inkAmount = 0;
        } else {
            console.log('Ink has run out!');
        }
    }
}

class SharpieSet {

    sharpieSet: Sharpie[];

    constructor() {
        this.sharpieSet = [];
    }

    addToSet(sharpie: Sharpie) {
        this.sharpieSet.push(sharpie);
    };

    countUsable(): any {
        let count: number = 0;
        for (let i: number = 0; i < this.sharpieSet.length; i++) {
            if (this.sharpieSet[i].inkAmount > 0) {
                count++;
            }
        }
        return 'Number of usable Sharpies: ' + count;
    };

    removeTrash() {
        let countTrash: number = 0;
        for (let i: number = 0; i < this.sharpieSet.length; i++) {
            if (this.sharpieSet[i].inkAmount === 0) {
                countTrash++;
            }
        }
        this.sharpieSet.sort(function (a, b) {
            return b.inkAmount - a.inkAmount;
        })
        for (let i: number = 0; i < this.sharpieSet.length; i++) {
            if (this.sharpieSet[i].inkAmount === 0) {
                this.sharpieSet.splice(i, countTrash);
                return this.sharpieSet;
            }
        }
    };
}

let set = new SharpieSet();
set.addToSet(new Sharpie('red', 0.2, 70));
set.addToSet(new Sharpie('black', 0.6, 0));
set.addToSet(new Sharpie('yellow', 0.2, 0));
set.addToSet(new Sharpie('purple', 0.5, 5));
set.addToSet(new Sharpie('pink', 0.3, 42));
set.removeTrash();
console.log(set.countUsable());
console.log(set);