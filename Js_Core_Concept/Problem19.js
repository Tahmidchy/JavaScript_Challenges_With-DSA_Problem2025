/*
TODO: Problem-19: Check 1 == '1' and explain how JavaScript performs type conversion.
*/

// Solution: checking loose equality between number 1 and string '1'

let num = 1;
let str = '1';
if (num == str) {
    console.log("1 and '1' are loosely equal.");
} else {
    console.log("1 and '1' are not loosely equal.");
} 
// Explanation: In this case, JavaScript performs type coercion by converting the string '1' to the number 1 before making the comparison. Since both values are then of the same type and value, the comparison returns true.