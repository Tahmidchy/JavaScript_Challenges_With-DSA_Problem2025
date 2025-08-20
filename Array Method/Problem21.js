/*
TODO: Problem-21: Show this shortcut for descending order using an array numbers = [13,2,45,9,6];
*/

//Solution: 

const numbers = [13,2,45,9,6];
// now we will sort the array in descending order
const sortDescending = numbers.sort((a, b) => b - a);
console.log(sortDescending); // Output: [ 45, 13, 9, 6 , 2 ]