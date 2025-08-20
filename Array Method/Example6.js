/*

TODO: Now we are testing on filter method of Array
This code is used to demonstrate the use of the filter method on an array.
The filter method creates a new array with all elements that pass the test implemented by the provided function.

*/

// Example-6: filter method of Array

const players = [75,65,67,80,90,55,60];
const selectedPlayers = players.filter(player => player > 70);
console.log(selectedPlayers); // [75, 80, 90]