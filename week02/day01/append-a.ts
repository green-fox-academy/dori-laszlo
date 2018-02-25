'Use strict';

// -  Create an array variable named `nimals`
//    with the following content: `["kuty", "macsk", "cic"]`
// -  Add all elements an `"a"` at the end

let nimals: string[] = ['kuty', 'macsk', 'cic'];

function appenda (animals: string[]) {
    for(let i: number = 0; i < animals.length; i++) {
        animals[i] += 'a';
        console.log(animals[i]);
    }
}

appenda(nimals);