/*
TODO: Problem-12: Create a `fridgeTracker()` function and generate a separate closure for each person in your mess, so that every time someone opens the fridge, their individual counter increases.
*/

// Solution:

function fridgeTracker() {
    let count = 0;
    return function openFridge() {
        count++;
        console.log(`Fridge opened ${count} times.`);
    }
}

// Example usage:
const person1Fridge = fridgeTracker();
const person2Fridge = fridgeTracker();

// Person 1 opens the fridge
person1Fridge();
// Person 2 opens the fridge
person2Fridge();
// Person 1 opens the fridge again
person1Fridge();