/*
TODO: Example-23: In this example, we will test the behavior of a promise when an error is thrown inside the executor function. We will create a promise that throws an error and see how it is handled in the catch block. We will also log the error message in the catch block.
*/

//Solution: 

const data = `{
    "name": "John Doe",
    "age": 30,
    "city": "New York"
}`;
const result = JSON.parse(data);
console.log(result);