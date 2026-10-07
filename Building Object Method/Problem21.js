/*
TODO: Problem-21: Create a new set and add the elements 10, 20, 10, 30 to it, then display it in the console.
*/

// Creating a new Set
const myNewSet = new Set();
// Adding elements to the Set
myNewSet.add(10);
myNewSet.add(20);
myNewSet.add(10); // Duplicate, will not be added
myNewSet.add(30);
// Displaying the Set in the console
console.log("New Set with elements 10, 20, 10, 30:", myNewSet); // Outputs: Set(3) { 10, 20, 30 }   