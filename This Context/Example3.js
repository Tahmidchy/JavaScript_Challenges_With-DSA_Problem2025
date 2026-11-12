/*
TODO: Example-3: Now We are testing the JavaScript This context. In This Example we will using ES6 how to bind the 'this' context to a function using arrow functions.
*/

// Solution:

class player {
    constructor(name,level) {
        this.name = name;
        this.level = level;
    }

    ShowDetails() {
        console.log(this.name);
        console.log(this.level);
    }
};

const gamer = new player('John', 10);
gamer.ShowDetails(); // 'this' refers to the gamer object