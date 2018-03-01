'Use strict';

// Create Sharpie class
// We should know about each sharpie their color (which should be a string), width (which will be a floating point number), inkAmount (another floating point number)
// When creating one, we need to specify the color and the width
// Every sharpie is created with a default 100 as inkAmount
// We can use() the sharpie objects
// which decreases inkAmount

class Sharpie {
    public color: string;
    public width: number;
    public inkAmount: number;

    constructor(color: string, width: number) {
        this.color = color;
        this.width = width;
        this.inkAmount = 100.0;
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

let sharpie01 = new Sharpie('blue', 1.4);
sharpie01.use(70);
sharpie01.use(1);
sharpie01.use(34);