/*
TODO: Now we are testing on FindIndex method of Array
This code is used to demonstrate the use of the findIndex method on an array.
The findIndex method returns the index of the first element in the array that satisfies the provided testing function.
*/

// Example-10: findIndex method of Array

const players = [75, 65, 67, 80, 90, 55, 60];
const veryBig = players.findIndex(player => player > 100);
console.log(veryBig); // -1
