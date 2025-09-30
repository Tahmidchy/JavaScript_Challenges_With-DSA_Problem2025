/*
TODO: Example-9: Now we are testing here js core concept undefined vs null. here we are testing undefined with function .
*/

// Example-9: Function with undefined vs null

function noNegative(a,b){
    if(a < 0 || b < 0){
        return 
    }
    return a + b;
}
console.log(noNegative(2,-5)); // Output: undefined
// The function noNegative is called with one negative argument (-5). The condition in the if statement evaluates to true, so the function hits the return statement without a value, resulting in an implicit return of undefined. If both arguments were non-negative, it would return their sum. 