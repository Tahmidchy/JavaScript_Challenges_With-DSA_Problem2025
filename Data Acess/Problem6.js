/*
TODO: Problem-6: Write a program where const game ={name:'Football', players:[{name:'Alice'},{name:'Bob'}]} the object prints the first player's name.
*/

const game = {
    name: 'Football',
    players: [{name: 'Alice'}, {name: 'Bob'}]
};
console.log(game.players[0].name);