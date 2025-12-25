/*
TODO: Fetch ফাংশন থেকে রিটার্ন করা প্রমিজের মাধ্যমে রেসপন্স .জেসন () কল করে , ডাটা কনভার্ট কেন করা হয় ?
*/
// Answer: রেসপন্স .জেসন () কল করার মাধ্যমে আমরা রেসপন্স বডি থেকে JSON ডাটা এক্সট্রাক্ট করতে পারি। 
// এটি একটি অ্যাসিঙ্ক্রোনাস অপারেশন যা একটি প্রমিজ রিটার্ন করে, যা কনভার্ট করা JSON ডাটা ধারণ করে।
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json()) // রেসপন্স থেকে JSON ডাটা এক্সট্রাক্ট করা হচ্ছে
    .then(data => console.log(data)) // কনভার্ট করা ডাটা কনসোলে লগ করা হচ্ছে
    .catch(error => console.error('Error:', error));
