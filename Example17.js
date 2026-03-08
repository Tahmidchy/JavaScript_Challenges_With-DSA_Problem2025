/*
TODO: Now we are testing the promise with fetch, we will use the same API as before, but this time we will use the promise to handle the response.
*/

fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));