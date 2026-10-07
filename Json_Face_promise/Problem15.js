/*
TODO: Write an API call that will load the user list from 'https://jsonplaceholde. typicode.com/users'

*/

// Answer:
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json()) // রেসপন্স থেকে JSON ডাটা এক্সট্রাক্ট করা হচ্ছে
    .then(data => console.log(data)) // কনভার্ট করা ডাটা কনসোলে লগ করা হচ্ছে
    .catch(error => console.error('Error:', error));