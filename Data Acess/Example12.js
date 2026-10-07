/*
TODO: Example-12: Now we are Logical OR Assign (||=) operator in JavaScript.
*/

let money = 0;
money ||= 100; // This will assign 100 to money only if money is falsy (which it is, since it's 0)
console.log(money); // Output: 100


let salary = 5000;
salary ||= 10000; // This will not assign 10000 to salary because salary is truthy (5000)
console.log(salary); // Output: 5000