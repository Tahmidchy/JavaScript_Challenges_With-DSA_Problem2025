/*
TODO: Example-11: Now we are testing this with call and bind methods in Javascript.
*/

// Solution:

const tina = {
    name: 'Tina',
    Salary: 20000,
    getInfo() {
        console.log(`Name: ${this.name}, Salary: ${this.Salary}`);
    }
};

tina.getInfo(); // Output: Name: Tina, Salary: 20000 - this refers to the tina object

const john = {
    name: 'John',
    Salary: 25000
};

// Using call to invoke getInfo with john as the context
tina.getInfo.call(john); // Output: Name: John, Salary: 25000 - this refers to the john object
// Using bind to create a new function with john as the context
const boundGetInfo = tina.getInfo.bind(john);
boundGetInfo(); // Output: Name: John, Salary: 25000 - this refers to the john object
