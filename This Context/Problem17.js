/*
TODO: Problem-17: Temporal Dead Zone (TDZ) কি জিনিস ? কাকে বলে , এবং এইটা কেন ইম্পরট্যান্ট ?
*/

// Solution:

// Temporal Dead Zone (TDZ) হলো একটি JavaScript এর behavior যা variable declaration এর আগে variable access করার চেষ্টা করলে ঘটে।
// এটি মূলত variable declaration এর scope এর মধ্যে থাকে, এবং variable declaration এর আগে variable access করার চেষ্টা করলে ReferenceError throw করে।
// TDZ এর কারণে variable declaration এর আগে variable access করা সম্ভব হয় না, যা code এর predictability এবং safety বাড়ায়। 
// এটি variable declaration এর timing এবং scope এর মধ্যে variable access করার নিয়ম নির্ধারণ করে, যা code এর behavior কে আরও predictable এবং understandable করে তোলে।