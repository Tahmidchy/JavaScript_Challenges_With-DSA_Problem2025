/*
TODO: Problem-19: DRY প্রিন্সিপাল উদাহরণ সহ ব্যাখ্যা করো 
*/
//Answer: 

/*
DRY এর পূর্ণরূপ হলো Don't Repeat Yourself (নিজের পুনরাবৃত্তি করবেন না)। এটি সফটওয়্যার ইঞ্জিনিয়ারিংয়ের একটি অত্যন্ত গুরুত্বপূর্ণ নীতি বা প্রিন্সিপাল।
এর মূল কথা হলো—কোডের যেকোনো জ্ঞান বা লজিক পুরো সিস্টেমে কেবল একবারই থাকা উচিত। একই কোড বা লজিক বারবার বিভিন্ন জায়গায় কপি-পেস্ট করা যাবে না।


*/

// Bad Practice

// সাধারণ গ্রাহকের ডিসকাউন্ট হিসাব
function calculateRegularDiscount(price) {
    let tax = price * 0.15; // ১৫% ট্যাক্স
    let finalPrice = (price - 20) + tax; // ২০ টাকা ফ্ল্যাট ছাড়
    return finalPrice;
}

// প্রিমিয়াম গ্রাহকের ডিসকাউন্ট হিসাব
function calculatePremiumDiscount(price) {
    let tax = price * 0.15; // ১৫% ট্যাক্স (একই কোডের পুনরাবৃত্তি)
    let finalPrice = (price - 50) + tax; // ৫০ টাকা ফ্ল্যাট ছাড়
    return finalPrice;
}

// Good Practice

// ট্যাক্স হিসাব করার কমন ফাংশন
function calculateTax(price) {
    return price * 0.15; // ট্যাক্স লজিক এখন এক জায়গায়
}

// সাধারণ গ্রাহকের ডিসকাউন্ট হিসাব
function calculateRegularDiscount(price) {
    return (price - 20) + calculateTax(price);
}

// প্রিমিয়াম গ্রাহকের ডিসকাউন্ট হিসাব
function calculatePremiumDiscount(price) {
    return (price - 50) + calculateTax(price);
}

/*

সংক্ষেপে DRY এর সুবিধা:

• রক্ষণাবেক্ষণ সহজ (Easier Maintenance): এক জায়গায় পরিবর্তন করলে সব জায়গায় কাজ হয়ে যায়।
• কোড পাঠযোগ্যতা (Readability): কোড পরিষ্কার ও সহজে বোঝার মতো হয়।
• ভুল কম হওয়া (Fewer Bugs): বারবার একই কোড লিখতে গিয়ে টাইপিং বা লজিক্যাল ভুল হওয়ার সুযোগ থাকে না।
*/