/*

TODO: Now we are testing find method of Array
This code is used to demonstrate the use of the find method on an array.
The find method returns the first element in the array that satisfies the provided testing function.

*/

// Example-9: find method of Array with string values

const players1 = [75, 65, 67, 80, 90, 55, 60];
const firstHighScorer1 = players1.find(player => player > 100);
console.log(firstHighScorer1); // undefined