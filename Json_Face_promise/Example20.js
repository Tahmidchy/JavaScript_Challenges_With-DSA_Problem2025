/*
TODO: Example-20: Now we are testing on PUT method
*/

// Create a new Promise to fetch data from a JSON file

const url = 'https://example.com/api/users/1';
const updatedUser = {
    name: 'Jane Doe',
    email: 'jane.doe@newwmail.com'
};
const options = {
    method: 'PUT',
    body: JSON.stringify(updatedUser),
    headers: {
        'Content-Type': 'application/json',
    },
};
fetch(url, options)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.error('Error:', error));