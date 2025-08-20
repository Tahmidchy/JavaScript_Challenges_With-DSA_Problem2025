/*

TODO: Example-4: we are using Array.prototype.map() method to perform a series of operations on an array of numbers check array length 

*/

// Example-4:

const friends = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
const lengths = friends.map(friend => friend.length);
const firstLetters = friends.map(friend => friend[0]);
console.log(lengths); // Output: [5, 3, 7, 5, 3]
console.log(firstLetters); // Output: ['A', 'B', 'C', 'D', 'E']
console.log(friends.length); // Output: 5