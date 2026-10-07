/*
TODO: Problem-22: Set{10,20,30} remove from 10 value and display the set in the console.
*/

// Creating a new Set with initial values
let mySet = new Set([10, 20, 30]);
mySet.delete(10); // Removing the value 10 from the Set

// Displaying the updated Set in the console
console.log("Set after removing 10:", mySet); // Outputs: Set(2) { 20, 30 }