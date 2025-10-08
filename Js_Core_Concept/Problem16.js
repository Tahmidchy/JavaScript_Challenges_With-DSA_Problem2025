/*
TODO: Problem-16: Write a function where the first parameter is a number and the second parameter is a boolean, now with the help of the function, it will check whether these two values ​​are double equal or not? And also display the output.
*/

// Solution: function to check double equality

function checkDoubleEquality(num, bool) {
    if (num == bool) {
        console.log("The values are double equal.");
    } else {
        console.log("The values are not double equal.");
    }
}
// Example usage
checkDoubleEquality(1, true); // The values are double equal.
checkDoubleEquality(0, false); // The values are double equal.
checkDoubleEquality(2, true); // The values are not double equal.
checkDoubleEquality(1, false); // The values are not double equal.