/*

TODO: Now we are testing on Array Method on Map method
This code is used to demonstrate the use of the map method on an array.

*/

// Example-12: map method of Array

const students = [
    { name: 'Alice', age: 20 },
    { name: 'Bob', age: 21 },
    { name: 'Charlie', age: 22 }
];

const studentInfo = students.map(student => `${student.name} is ${student.age} years old`);
console.log(studentInfo); // ["Alice is 20 years old", "Bob is 21 years old", "Charlie is 22 years old"]