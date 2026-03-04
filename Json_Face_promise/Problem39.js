/*
TODO: Problem-39: একটা কোড লিখো , যেখানে JSON.parse ব্যবহার করে ডাটা পার্স করার চেষ্টা করবি , ধরো ,জেসন ডাটা হলো {প্রোডাক্ট: 'Data',প্রাইস :৪৫০}। তবে সার্ভার কোনো সময় ভুল ডাটা পাঠাতে পারে ,যেমন : "ডাটা কার্রাপ্টেড " লিখে স্ট্রিং ডাটা পাঠিয়ে দিলো , যদি এরর হয় , তখন সেটা catch ব্লকে হ্যান্ডেল করবে এবং কনসোলে মেসেজ দিবি "Invalid JSON ফরমেট"
*/

//Solution:

// Scenario-A: '{"Product":"Data","Price":450}
//Scenario-B: "Data corrupted"

const rawData = '{"Product":"Data","Price":450}';

try{
    //Attempting to parse the string into a JavaScript Object
    const parseData = JSON.parse(rawData);
    console.log("Data parse Successfully :",parseData);
} catch(error){
    // if the JSON.parse fails, it's jumped straight here
    console.log("Invalid JSON Formate");
}