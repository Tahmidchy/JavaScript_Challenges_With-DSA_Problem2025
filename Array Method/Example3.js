/*

TODO: Example-3: Another example using Array.prototype.map() method for using additional operations and division operations

*/

// Example-3:

const numbers = [10, 20, 30, 40, 50];
const fiveBonus = numbers.map(num => num + 5);
const dividedByTwo = fiveBonus.map(num => num / 2);
console.log(fiveBonus); // Output: [15, 25, 35, 45, 55]
console.log(dividedByTwo); // Output: [7.5, 12.5, 17.5, 22.5, 27.5]