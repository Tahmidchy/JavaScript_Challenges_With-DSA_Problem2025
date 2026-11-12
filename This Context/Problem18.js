/*
TODO: Problem -18: function expression দিয়ে লেখা ফাংশন কে hoisting করলে কেন initialization এর আগে কল করা যায় না ?
*/

// Solution:

// Function expressions are not hoisted in the same way as function declarations. When you define a function using a function expression, the variable that holds the function is hoisted, but its initialization (the assignment of the function to the variable) is not. This means that if you try to call the function before it has been assigned, you'll get a TypeError because the variable is undefined at that point.