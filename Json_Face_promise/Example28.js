/*
TODO: Example-28: Now we are testing on async test
*/

// Solution:

fetch('https://jsonplaceholder.typicode.com/users/1')
.then (response => response.json())
.then(data => {
    console.log(data);
})
.catch(error => {
    console.error('Error:',error);
});