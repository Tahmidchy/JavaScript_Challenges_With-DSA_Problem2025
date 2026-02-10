/*
TODO: Problem-24: ইকমার্স ওয়েবসাইট প্রোডাক্ট রিভিউ এর ডাটা বানিয়ে ফেলো , যেখানে প্ৰত্যেকটা রিভিউ অবজেক্টে প্রোডাক্ট নাম , reviewer ডিটেলস (নাম , ইমেইল ) , রেটিং এন্ড রিভিউ টেক্সট থাকবে , এরপর সেই অব্জেক্টটিকে জেসন। Stringify দিয়ে কনভার্ট করো , সেই জেসন কে আবার জাভাস্ক্রিপ্ট এরে তে কনভার্ট করো 

*/

//Solution-24: 

const productReview = {
    productName: 'Wireless Earbuds',
    reviewerDetails: {
        name: 'John Doe',
        email: 'john Doe@gmail.com'
    },
    rating: 4.5,
    reviewText: 'Great sound quality and comfortable fit. Battery life could be better.'
}
const productReview_JSON = JSON.stringify(productReview);
console.log(productReview_JSON);