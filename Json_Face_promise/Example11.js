/* Here we are starting again JSON Face promise example from zero to understand it better. We will be using the same code as before but we will be adding comments to understand it better.*/

// TODO: Simple JSON Face promise example

const user = {
    id: 1,
    name: 'John Doe',
    email: 'john Doe@gmail.com',
    job: 'Software Engineer'
}
const userJSON = JSON.stringify(user); // Convert the user object to a JSON string
console.log(userJSON); // Output the JSON string to the console

// Now we will convert the JSON string back to a JavaScript object
const userObj = JSON.parse(userJSON); // Convert the JSON string back to a JavaScript object
console.log(userObj); // Output the JavaScript object to the console