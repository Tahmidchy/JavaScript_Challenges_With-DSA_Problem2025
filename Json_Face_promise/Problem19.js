/*
TODO: Problem-19: shopping  cart অবজেক্ট বানা ও , যার মধ্যে প্রোডাক্টস (এরে অফ প্রোডাক্টস ),টোটাল প্রাইস (সবগুলো প্রোডাক্টের টোটাল প্রাইস ) এবং user ডিটেলস (name ,id ,কন্টাক্ট ) থাকবে এরপর এইটাকে JSON স্ট্রিংয়ে কনভার্ট করো 

*/

// Solution-19: 

const shoppingCart = {
    products: ['laptop', 'phone', 'headphones'],
    totalPrice: 1500,
    userDetails: {
        name: 'John Doe',
        id: '12345',
        contact: '0123456789'
    }
};
const shoppingCartJSON = JSON.stringify(shoppingCart);
console.log(shoppingCartJSON);