/*
TODO: Example-30: In here we are testing on Slice method of array with a start index and no end index.
*/

// Example-30: Slice Method with Start Index Only
const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
// Slicing the array starting from index 2 to the end of the array
const slicedFruitsStartOnly = fruits.slice(2);
console.log('Sliced Fruits with Start Index Only:', slicedFruitsStartOnly); // Output: Sliced Fruits with Start Index Only: ['Cherry', 'Date', 'Elderberry']
// This will extract elements from index 2 to the end of the array