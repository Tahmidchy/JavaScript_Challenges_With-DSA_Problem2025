/*
TODO: Problem-17: There is a sentence like "I bought an orange". Now replace "orange" with "grape".
*/

// replace "orange" with "grape" in the given sentence
const sentence = "I bought an orange";
const updatedSentence = sentence.replace(/orange/g, "grape");
console.log("Updated Sentence:", updatedSentence); // Outputs: "I bought an grape"