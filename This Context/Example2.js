/*
TODO: Example-2: We are testing the Javascript This context. In this example, we will see how the value of 'this' changes based on how a function is called.
*/

//Solution:

const player = {
    name: 'John',
    score: 100,
    showScore() {
        console.log(this);
    }
};

player.showScore(); // 'this' refers to the player object