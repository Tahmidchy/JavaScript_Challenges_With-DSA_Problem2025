/*
TODO: Problem-26: তুমি একটা পেমেন্ট প্রসেস করার প্রমিজ বানা , সেখানে এমাউন্ট নামে একটা ভ্যারিয়েবল থাকবে , এই varibale থাকবে , এই ভ্যারিয়েবল এর মান পসিটিভ হলে (০ এর বেশি হলে ) প্রমিজ সফলভাবে প্রসেস হবে , আর যদি এমাউন্ট মান ০ বা তার কম হলে প্রমিজ রিজেক্ট হবে 

*/

// Solution-26: 

const processPayment = new Promise((resolve, reject)=>{
    const amount = 100; // তুমি এখানে amount এর মান পরিবর্তন করে দেখতে পারো
    if(amount > 0){
        resolve('Payment processed successfully!');
    }else{
        reject('Payment failed: Amount must be greater than zero.');
    }
});
processPayment.then((message)=>{
    console.log(message);
}).catch((error)=>{
    console.log(error);
});