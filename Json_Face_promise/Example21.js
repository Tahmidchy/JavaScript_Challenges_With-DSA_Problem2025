/*
TODO: Example-21: Now we are testing on DELETE method 
*/

// Create a new Promise to fetch data from a JSON file

const url = 'https://example.com/api/users/1';
const options = {
    method: 'DELETE',
};
fetch(url, options)
    .then(res => res.json())
    .then(data => console.log('Delete:', data))
    .catch(error => console.error('Error:', error));