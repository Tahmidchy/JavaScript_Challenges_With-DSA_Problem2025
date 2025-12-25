/*
TODO: fetch কেন use করা হয় ?
*/

// Answer: fetch ফাংশনটি ওয়েব থেকে ডাটা রিকোয়েস্ট এবং রিসিভ করার জন্য ব্যবহার করা হয়। এটি একটি আধুনিক এবং প্রমিজ-ভিত্তিক API যা অ্যাসিঙ্ক্রোনাস HTTP রিকোয়েস্ট তৈরি করতে সাহায্য করে, যেমন GET, POST, PUT, DELETE ইত্যাদি। এটি ব্রাউজার এবং সার্ভার উভয় পরিবেশে ব্যবহার করা যায়।
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json()) // রেসপন্স থেকে JSON ডাটা এক্সট্রাক্ট করা হচ্ছে
    .then(data => console.log(data)) // কনভার্ট করা ডাটা কনসোলে লগ করা হচ্ছে
    .catch(error => console.error('Error:', error));