/*
TODO: Example-32: In here We are testing on splice method of array to remove elements.
*/

// Example-32: Splice Method to Remove Elements
const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
// Using splice to remove 2 elements starting from index 1
const removedFruits = fruits.splice(1, 2);
console.log('Removed Fruits:', removedFruits); // Output: Removed Fruits: ['Banana', 'Cherry']
console.log('Remaining Fruits:', fruits); // Output: Remaining Fruits: ['Apple', 'Date', 'Elderberry']
// This will remove 'Banana' and 'Cherry' from the original array and return them as a new array .