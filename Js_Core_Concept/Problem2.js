/*
TODO: Problem-2: Create an array called arr with [1,2,3] in it. Create another variable set in it. Add 88 to the copied variable. Then log the console to the first and copied arrays, see if the output shows the difference between the two?
*/

// Problem-2: Non-Primitive Types with Modification

let arr = [1,2,3]; // Initial array
let copiedArr = arr; // Copying the reference of arr to copiedArr
copiedArr.push(88); // Modifying copiedArr by adding 88
console.log("Value of arr:", arr); // Output: Value of arr: [1, 2, 3, 88]
console.log("Value of copiedArr:", copiedArr); // Output: Value of copiedArr: [1, 2, 3, 88]
// arr is modified because arrays are passed by reference and we changed the contents of the array through copiedArr 