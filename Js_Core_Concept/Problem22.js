/*
TODO: Problem-22: Write a function called NumberProcessor that takes a number and a callback, divides the number by 5, and displays the output through the callback.
*/

// Solution: Function that processes a number and uses a callback to display the result

function NumberProcessor(num, callback) {
    const result = num / 5;
    callback(result);
}
// Callback function to display the result
function displayResult(result) {
    console.log("Result after dividing by 5:", result);
}

// Example number
const number = 25;
// Calling the function with the number and the callback
NumberProcessor(number, displayResult);
// Output: Result after dividing by 5: 5

// Explanation:
// 1. The NumberProcessor function takes a number and a callback function as parameters.
// 2. It divides the number by 5 and stores the result.
// 3. The callback function is then called with the result as its argument.
// 4. The displayResult function is defined to log the result to the console.
// 5. Finally, we call NumberProcessor with an example number (25) and the displayResult callback to see the output. 