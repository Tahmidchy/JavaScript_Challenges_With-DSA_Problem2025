/*
TODO: Problem-21: Execution context কি জিনিস ? কাকে বলে , এবং এইটা কেন ইম্পরট্যান্ট ? কিভাবে কাজ করে ?
*/

// Solution:

// Execution context হলো একটি JavaScript এর concept যা code execution এর সময় তৈরি হয়। এটি মূলত একটি environment যা variable, function, এবং object এর scope এবং context কে manage করে।
// যখন একটি function call করা হয়, তখন একটি নতুন execution context তৈরি হয়। এই context এর মধ্যে function এর local variables, parameters, এবং this keyword এর value থাকে।
// Execution context এর তিনটি main phase থাকে: Creation phase, Execution phase, এবং Cleanup phase।
// Creation phase এ variable এবং function declarations কে memory তে allocate করা হয়।
// Execution phase এ code execute হয় এবং variable এর values assign করা হয়।
