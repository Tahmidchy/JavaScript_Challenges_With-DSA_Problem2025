/*
TODO: Example-6: Now we are testing this method in the class and how to use it.
*/

// Solution:

class Player {
    constructor(name, runs, wickets) {
        this.name = name;   
        this.runs = runs;
        this.wickets = wickets;
    }
    addRun(run) {
        this.runs += run;
    }
}

const player1 = new Player("Tamim", 5000, 150);
player1.addRun(100);
player1.addRun(50);
console.log(player1);