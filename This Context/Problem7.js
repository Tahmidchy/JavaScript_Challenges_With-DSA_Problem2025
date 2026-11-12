/*
TODO: Problem-7: Create an object named `team` that contains `name` and `players` (where `players` represents the number of players). Also, include a method named `players` within the `team` object that logs a string to the console using `this.name` and `this.players`. First, call the `players` method from the `team` object and observe the output. Next, create another object named `tournament`, which also contains `name` and `players` (representing the number of players participating in the tournament). Finally, use `.bind()` to invoke the `players` method from the `team` object, while ensuring that the `tournament` object serves as the `this` context.
*/

// Solution:

const team = {
  name: 'Warriors',
  players: 11,
  playersMethod: function() {
    console.log(`Team ${this.name} has ${this.players} players.`);
    }
};

// Call the players method from the team object
team.playersMethod(); // Output: Team Warriors has 11 players.

const tournament = {
  name: 'Championship',
  players: 22
};

// Use .bind() to invoke the players method from the team object with tournament as the this context
const boundPlayersMethod = team.playersMethod.bind(tournament);
boundPlayersMethod(); // Output: Team Championship has 22 players.
