/*
TODO: Problem-1: Create a variable named Name and set its value to 15. Then create another variable named Copy and set its value to Name. This time, change the value of Copy to 25. Then check the console log for the values ​​of Name and Copy. Have the values ​​of both changed?
*/

// Problem-1: Primitive Types with Re-assignment

let num = 15; // Initial value
let copyNum = num; // Copying the value of num to copyNum
copyNum = 25; // Changing the value of copyNum
console.log("Value of num:", num); // Output: Value of num: 15
console.log("Value of copyNum:", copyNum); // Output: Value of copyNum: 25
// num remains unchanged because primitive types are passed by value and we reassigned copyNum to a new value 