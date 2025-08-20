/*
TODO: Now we are testing on FindIndex method of Array
This code is used to demonstrate the use of the findIndex method on an array.
The findIndex method returns the index of the first element in the array that satisfies the provided testing function.
*/

// Example-10: findIndex method of Array

const numbers = [10,25,30,50];
const index = numbers.findIndex(number => number > 27);
console.log(index); // 2