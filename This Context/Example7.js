/*
TODO: Example-7: Now we are testing the Javascript this context with object arrow function. In this example, we will see how the value of 'this' changes based on how a function is called.
*/

//Solution:

const person = {
    name : 'John',
    greet: () => {
        return `Hello, my name is ${this.name}`;
    }
};

console.log(person.greet()); // 'this' refers to the global object, not the person object