/*
TODO: Create/Post Now we are testing the post method
*/

// Create a new Promise to fetch data from a JSON file

const url = 'https://example.com/api/users';
const user = {
    name: 'John Doe',
    email: 'john.doe@example.com'
}
const options = {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
        'Content-Type': 'application/json',
    },
}

fetch(url, options)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.error('Error:', error));