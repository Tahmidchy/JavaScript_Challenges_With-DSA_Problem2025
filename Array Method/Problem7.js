/*
TODO: Problem-7: Suppose you have an array, like ['Tom','Harry','Sam','Jack'] , now find the names that start with H , using the find operation.
*/

// Solution:

const Names = ['Tom', 'Harry', 'Sam', 'Jack'];
const NameStartingWithH = Names.find(name => name.startsWith('H'));
console.log(NameStartingWithH); // Output: 'Harry'
// The find method returns the first element in the array that satisfies the provided testing function, effectively locating the first name that starts with the letter 'H'.
// This solution uses the find operator to iterate over each name in the Names array and checks if the name starts with 'H', resulting in the first matching name. If no match is found, it returns undefined.
// The output is logged to the console to verify the found name that starts with 'H'.   