/*
TODO: Problem-18: একটা অবজেক্ট বানা ,যেখানে একটা user থাকবে। user এর মধ্যে name ,ইমেইল , এড্রেস , এবং একটা অর্ডার হিস্টরি থাকবে , সেই অর্ডার history তে অন্তত  তিনটা প্রোডাক্ট থাকবে ,জেসন Stringify দিয়ে পুরো অবজেক্ট টাকে জেসন স্ট্রিং এর কনভার্ট করা 
*/

// Solution:

const user = {
    name: 'John Doe',
    email: 'mr.pain@gmail.com',
    address: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA',
    },
    orderHistory: ['Laptop', 'Phone', 'Tablet'],
}
const userJSON = JSON.stringify(user); // Convert the user object to a JSON string
console.log(userJSON); // Output the JSON string to the console