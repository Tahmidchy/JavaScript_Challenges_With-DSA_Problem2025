/*
TODO: Now we are testing on find method of Array
This code is used to demonstrate the use of the find method on an array.
The find method returns the value of the first element in the array that satisfies the provided testing function.
*/

// Example-8: find method of Array

const players = [75, 65, 67, 80, 90, 55, 60];
const firstHighScorer = players.find(player => player > 70);
console.log(firstHighScorer); // 75