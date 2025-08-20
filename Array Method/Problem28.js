/*
TODO: Problem-28: There is an array called car, which contains Tesla, BMW, Toyota, Ford. Slice it to keep only Tesla and BMW.
*/

// Solution: 

const car = ['Tesla', 'BMW', 'Toyota', 'Ford'];
//Now we will use the slice() method to get the first two elements of the array.
const slicedCar = car.slice(0, 2);
console.log(slicedCar); // Output: ['Tesla', 'BMW']