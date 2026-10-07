/*
TODO:Example-18: Read/Get fetch data from a JSON file using Promise and display it on the console. 
*/

// Create a new Promise to fetch data from a JSON file

const url = 'https://jsonplaceholder.typicode.com/users';   // Example JSON URL
fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data));