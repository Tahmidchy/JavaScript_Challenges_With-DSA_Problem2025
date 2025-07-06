/*
TODO: Problem-2: You will create a function where there will be an opportunity to deposit money. If no amount is given, then a default of 50 taka will be given as the deposit.
*/

// Solution: 

function depositMoney(amount = 50) {
    return `Deposited: ${amount} Taka`;
};
// Test the function
console.log(depositMoney(100)); // Output: Deposited: 100 Taka
console.log(depositMoney()); // Output: Deposited: 50 Taka (default value)
