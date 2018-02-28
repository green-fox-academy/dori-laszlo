'Use stict';

// Create a few example post-it objects:
// an orange with blue text: "Idea 1"
// a pink with black text: "Awesome"
// a yellow with green text: "Superb!"

class PostIt {
    public backgroundColor: string;
    public text: string;
    public textColor: string

    constructor(background: string, text: string, textcolor: string) {
        this.backgroundColor = background;
        this.text = text;
        this.textColor = textcolor;
    }
} 

let post1 = new PostIt('orange','Idea 1','blue');
let post2 = new PostIt('pink','Awesome','black');
let post3 = new PostIt('yellow','Superb!','green');

console.log(post1);
console.log(post2);
console.log(post3);