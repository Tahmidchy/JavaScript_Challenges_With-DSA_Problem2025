/*
TODO: Example-1: We are testing the javaScript Class how to work with it.
*/

// Example-1: 

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
};
const person1 = new Person("John", 30);
console.log(person1);
const person2 = new Person("Jane", 25);
console.log(person2);