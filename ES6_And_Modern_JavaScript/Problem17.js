/*
TODO: Problem-17: You have an object named Student, in that string there is his name, his age, and his three subject marks are given in the property called Result. And the winning value is an array, now your job will be to show the student's name, the average of his three subject results in a string using a template string, to show the average, you will add the values ​​of the three subjects and divide by three.
*/

// Solution:

const Student = {
    name: "John Doe",
    age: 20,
    Result: [85, 90, 78]
};
const average = (Student.Result.reduce((acc, mark) => acc + mark, 0) / Student.Result.length).toFixed(2); // Calculate the average of the marks
const message = `Student Name: ${Student.name}, Age: ${Student.age}, Average Marks: ${average}`;
console.log(message); // Output: Student Name: John Doe, Age: 20, Average Marks: 84.33