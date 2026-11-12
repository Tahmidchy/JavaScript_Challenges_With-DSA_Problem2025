/*
TODO: Problem-19: var দিয়ে ডিক্লেয়ার করা varibale এর হোস্টিং behavior কেমন ? উদাহরণ সহ ব্যাখ্যা করো 

*/

// Solution:

// In JavaScript, variables declared with 'var' are hoisted to the top of their containing function or global scope. This means that the declaration of the variable is moved to the top of its scope, but the initialization (assignment of a value) remains in place. As a result, you can reference a 'var' variable before its declaration without getting a ReferenceError, but it will be undefined until it is assigned a value.


/*
TODO: Problem-20: let and var এর hoisting  behavior কি একই ?
*/

// Solution:

// No, the hoisting behavior of 'let' and 'var' is not the same. While both 'let' and 'var' declarations are hoisted to the top of their scope, 'let' variables are not initialized until their declaration is evaluated. This means that if you try to access a 'let' variable before its declaration, you will get a ReferenceError due to the Temporal Dead Zone (TDZ). In contrast, 'var' variables are initialized with 'undefined', allowing them to be accessed before their declaration without throwing an error.