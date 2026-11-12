/*
TODO: Problem-3: অবজেক্ট এর মেথড নরমাল function আর arrow function দিয়ে ডিক্লেয়ার করলে this এর কোনো কিছু কি ডিফারেন্ট হবে ?
*/

//Solution: হ্যাঁ, অবজেক্ট এর মেথড নরমাল function আর arrow function দিয়ে ডিক্লেয়ার করলে this এর ভ্যালু ডিফারেন্ট হবে। নরমাল function এ this অবজেক্টের রেফারেন্স হিসেবে কাজ করে, যেখানে arrow function এ this গ্লোবাল কনটেক্সটের সাথে যুক্ত থাকে। উদাহরণস্বরূপ:

const obj = {
    name: 'Alice',
    normalFunction: function() {
        console.log(this.name); // 'Alice' - this refers to the object
    },
    arrowFunction: () => {
        console.log(this.name); // undefined - this refers to the global context
    }
};