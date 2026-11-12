/*
TODO: Example-5: We are Testing the Javascript this context,Constructor Function before Es6. In this example, we will see how the value of 'this' changes based on how a function is called.
*/

//Solution:

function Person(name) {
    this.name = name;
}

const user = new Person('John');
console.log(user.name); // 'this' refers to the user object