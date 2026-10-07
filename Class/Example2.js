/*
TODO: Example-2: We are Testing the JavaScript Class how to work with it.
*/

class Player {
    constructor(name,runs,wickets){
        this.name = name;
        this.runs = runs;
        this.wickets = wickets;
    }
};

const tam = new Player("Tamim", 5000, 150);
console.log(tam);
const sakib = new Player("Sakib", 4000, 200);
console.log(sakib);