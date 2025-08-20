/*
TODO: Problem-30: An array called Players, whose elements are Messi, Ronaldo, Neymar, Mbappe. Using splash, remove Neymar and add Holland.
*/

// Solution: 

const players = ['Messi', 'Ronaldo', 'Neymar', 'Mbappe'];
const newPlayers = [...players.slice(0, 2), 'Holland', ...players.slice (3)];
console.log(newPlayers);