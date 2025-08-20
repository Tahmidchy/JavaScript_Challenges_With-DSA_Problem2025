/*
TODO: Example-31: In here we are testing on slice method of array with no start and end indices.
*/

// Example-31: Slice Method with No Start and End Indices
const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
// Slicing the entire array (equivalent to creating a shallow copy)
const slicedFruitsFull = fruits.slice();
console.log('Sliced Fruits with No Start and End Indices:', slicedFruitsFull); // Output: Sliced Fruits with No Start and End Indices: ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry']
// This will create a shallow copy of the entire array