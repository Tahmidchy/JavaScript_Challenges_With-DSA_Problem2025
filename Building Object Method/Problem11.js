/*
TODO: Problem-11: Write a function that takes a decimal number as an input parameter. Then inside that function, log that number to the console using Math.Round, Math.Floor, Math.ceil.
*/

// Solution:

function logRoundedValues(decimalNumber) {
    const roundedValue = Math.round(decimalNumber);
    const flooredValue = Math.floor(decimalNumber);
    const ceiledValue = Math.ceil(decimalNumber);
    console.log(`For the number ${decimalNumber}:`);
    console.log(`Math.round: ${roundedValue}`);
    console.log(`Math.floor: ${flooredValue}`);
    console.log(`Math.ceil: ${ceiledValue}`);
}
logRoundedValues(4.7);
logRoundedValues(4.3);
// Output:  
// For the number 4.7:
// Math.round: 5
// Math.floor: 4
// Math.ceil: 5
// For the number 4.3:
// Math.round: 4
// Math.floor: 4
// Math.ceil: 5
