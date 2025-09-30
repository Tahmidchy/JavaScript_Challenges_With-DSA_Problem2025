/*
TODO: Example-8: Now we are testing here js core concept undefined vs null. here we are testing undefined with function parameter.
*/

// Example-8: Function Parameter with undefined vs null

function second(a,b){
    const total = a + b;
}
console.log(second()); // Output: undefined
// The function second is called without arguments, so both a and b are undefined. The addition of two undefined values results in NaN (Not a Number), and since the function does not return anything, it implicitly returns undefined.