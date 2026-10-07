/*
TODO: Now we are testing method in the class and how to use it.
*/

// Solution:

class Player {
    constructor(name, runs, wickets) {
        this.name = name;
        this.runs = runs;
        this.wickets = wickets;
    }
    getRun() {
        return this.runs;
    }
};

const tam = new Player("Tamim", 5000, 150);
const tamimRun = tam.getRun();
console.log(tamimRun);

