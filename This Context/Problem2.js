/*
TODO: Problem-2: ব্রাউসার console .log (this ); রান করলে this এর ভ্যালু কি হবে ?
*/

//Solution: ব্রাউসার console .log (this ); রান করলে this এর ভ্যালু window অবজেক্ট হবে। কারণ ব্রাউসার এ this কিওয়ার্ডটি গ্লোবাল কনটেক্সটের সাথে যুক্ত থাকে এবং গ্লোবাল কনটেক্সট হলো window অবজেক্ট। তাই console .log (this ); রান করলে window অবজেক্টের রেফারেন্স প্রিন্ট হবে।