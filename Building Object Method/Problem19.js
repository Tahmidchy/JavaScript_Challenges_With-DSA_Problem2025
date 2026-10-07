/*
TODO: Problem-19: "I am eating an apple.apple is good.apple helps me a lot." Here, replace the word "Apple" with "JavaScript" everywhere in the entire text, using the g flag to change everything in the entire text.
*/

// Given sentence with multiple occurrences of "apple" 

const sentence = "I am eating an apple.apple is good.apple helps me a lot.";

// Replace all occurrences of "apple" with "JavaScript" using the g flag
const updatedSentence = sentence.replace(/apple/g, "JavaScript");
console.log("Updated Sentence:", updatedSentence); // Outputs the sentence with all "apple" replaced by "JavaScript"