/*
TODO: Problem-27: Create an array called fruits, where the elements are Apple, Banana, Cherry, Date, this time using Slice, extract from Banana to Cherry and put them in a separate array.
*/

//Solution: 

const fruits = ['Apple','Banana','Cherry','Date'];
// now we are slice the array from Banana to Cherry
const sliceFruits = fruits.slice(1,4);
console.log(sliceFruits); // Output: ['Banana', 'Cherry', 'Date']