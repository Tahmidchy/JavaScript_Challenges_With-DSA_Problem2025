/*
TODO: Problem-26: এখন sendEmail নামে একটা ফাংশন বানিয়ে ফেলো , সেই ফাংশনের এর ভিতরে একটা প্রমিজ বানিয়ে ফেলবি এবং সেই প্রমিজ কে রিটার্ন করবি , এই ফাংশন একটা প্যারামিটার নিবো , প্যারামিটার হিসাবে একটা ই মেইল নিবি এবং প্রমিজের ওপরে সেই ফাংশনের ভিতরে ভ্যালিড ইমেইল এর একটা এরে থাকবে , যে ই মেইল প্যারামিটার হিসাবে পাঠানো হয়েছে , সেটা যদি ভ্যালিড ইমেইল এর এরে এর মধ্যে থাকে , তাহলে প্রমিজ resolve করে বলে দিবে , ইমেইল ফ্রম নাইজেরিয়ান প্রিন্স , আর যদি ইমেইল এড্রেস ভ্যালিড ইমেইল এর মধ্যে না পাই তাহলে বলে দিবে ,লেটস ডান্স ইন the স্প্যাম ফোল্ডার 
*/

// Solution-26:

/*function sendEmail(email){
    const validEmails = ["@gmail.com", "@yahoo.com", "@hotmail.com"];
    return new Promise((resolve, reject) => {
        const isValidEmail = validEmails.some(validEmail => email.endsWith(validEmail));
        if (isValidEmail) {
            resolve("Email from Nigerian Prince");
        } else {
            reject("Let's dance in the spam folder");
        }
    });
}

// Example usage:
sendEmail("tahmidchy@hotmail.com")
    .then(message => console.log(message))
    .catch(error => console.log(error));

sendEmail("tahmidchy@xyz.com")
    .then(message => console.log(message))
    .catch(error => console.log(error));*/

/* Again Code */

function sendEmail(email) {
    const validEmails = ["@gmail.com", "@yahoo.com", "@hotmail.com"];
    return new Promise((resolve, reject)=> {
        const isValidEmail = validEmails.some(validEmail => email.endsWith(validEmail));
        if (isValidEmail){
            resolve("Email from Nigerian Prince");
        } else {
            reject("Let's dance in the spam folder");
        }
    });
}

// Example usage:   

sendEmail("Tahmidchy@gmail.com")
    .then(message => console.log(message))
    .catch(error => console.log(error));

sendEmail("tahmidchy@xyz.com")
    .then(message => console.log(message))
    .catch(error => console.log(error));