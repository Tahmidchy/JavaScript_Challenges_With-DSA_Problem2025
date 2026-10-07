/*
TODO: Problem-19: let price = undefined; and price ||= 90 Prove using this that the price value has changed.
*/

// Solution:

let price = undefined;
price ||= 90;
console.log(price); // Output: 90, because the logical OR assignment operator assigns 90 to `price` since it was initially undefined (falsy).