/*
TODO: Problem-17: একটা turthy veriable  grapes = ১৯  দিয়ে।। = অপারেটর ব্যবহার করলে এর মান কি হবে এবং কেন ?

*/

// Solution:

let grapes = 19;
grapes ||= 10; // Using the logical OR assignment operator. Since `grapes` is truthy (19), it will not be assigned the value 10.
console.log(grapes); // Output: 19