/*
TODO: Practice fetch 'https://jsonplaceholder.typicode.com/users/1' to load data from this URL
*/

// Answer:
fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json()) // রেসপন্স থেকে JSON ডাটা এক্সট্রাক্ট করা হচ্ছে
    .then(data => console.log(data)) // কনভার্ট করা ডাটা কনসোলে লগ করা হচ্ছে
    .catch(error => console.error('Error:', error));