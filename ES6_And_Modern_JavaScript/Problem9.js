/*
TODO: Problem-9: Create a function that takes an object parameter, the object will be the principal and the rate. If the object is not passed, then the default principal will be 1000 and the rate will be 5. Make the function simple interest, with this formula (principal * rate / 100) then it will return the result.
*/

// Solution: 

function calculateSimpleInterest({ principal = 1000, rate = 5 } = {}) {
    return (principal * rate) / 100;
};
// Test the function
console.log(calculateSimpleInterest({ principal: 1000, rate: 5 })); // Output: 50
console.log(calculateSimpleInterest({ principal: 2000, rate: 10 })); // Output: 200
console.log(calculateSimpleInterest()); // Output: 50 (default principal 1000, rate 5)