/*
TODO: Example-12: Regular Expression Operation Test here,
*/

//Test case: 1: Using RegExp to test a pattern in a string
const pattern = /hello/;
const testString1 = "hello world";
const testString2 = "goodbye world";
console.log(pattern.test(testString1)); // true
console.log(pattern.test(testString2)); // false

//Test case: 2: Using RegExp to find matches in a string
const text = "The rain in SPAIN stays mainly in the plain.";
const regex = /ain/gi;
const matches = text.match(regex);
console.log("Matches found:", matches); // ['ain', 'AIN', 'ain', 'ain']

// Test Case: 3 : Using RegExp to replace text in a string

const sentence = "I have an apple and another apple.";
const newSentence = sentence.replace(/apple/g, "orange");
console.log("Replaced Sentence:", newSentence); // "I have an orange and another orange."

// Test Case: 4 : Email validation using RegExp

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const email1 = "example@mail.com";
const email2 = "invalid-email@.com";
console.log("Is email1 valid?", emailPattern.test(email1)); // true
console.log("Is email2 valid?", emailPattern.test(email2)); // false

// Test Case: 5 : Phone number validation using RegExp

const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
const phone1 = "123-456-7890";
const phone2 = "123-45-6789";
console.log("Is phone1 valid?", phonePattern.test(phone1)); // true
console.log("Is phone2 valid?", phonePattern.test(phone2)); // false