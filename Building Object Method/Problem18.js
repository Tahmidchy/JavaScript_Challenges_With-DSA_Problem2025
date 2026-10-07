/*
TODO: Problem-17: Check if the word "ana" is in the sentence "I like to have apple and banana"?
*/

// Check if "ana" is in the given sentence

const sentence = "I like to have apple and banana";
const regex = /ana/gi;
const containsAna = regex.test(sentence);
console.log("Does the sentence contain 'ana'?", containsAna); // Outputs: true