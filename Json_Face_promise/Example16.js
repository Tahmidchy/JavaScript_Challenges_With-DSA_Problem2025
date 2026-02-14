/*
TODO: Example-16: Now we are testing JSON fetching using promises.
*/

// Solution-16:

const url = 'https://jsonplaceholder.typicode.com/posts/1';
fetch(url)
    .then(response => {
        if (!response.ok) { 
            throw new Error('Network response was not ok ' + response.statusText);
        }   
        return response.json();
    })
    .then(data => {
        console.log('JSON data fetched successfully:', data);
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });