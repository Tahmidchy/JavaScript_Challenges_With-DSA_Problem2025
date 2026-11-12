/*
TODO: Problem-8: Create a `car` object that contains `speed` and `price` properties. Then, define a `drive` method that logs the car's information to the console using `this.speed` and `this.price`. Now, invoke the `drive` method on the `car` object using `.call()`. Perform this twice: once by passing a `bike` object as the `this` context, and again by passing a `truck` object. Both the `bike` and `truck` objects should also contain `speed` and `price` properties.
*/

// Solution:

const car = {
  speed: 120,
  price: 30000,
  drive: function() {
    console.log(`The car is driving at ${this.speed} km/h and costs $${this.price}.`);
  }
};

const bike = {
  speed: 80,
  price: 1500
};

const truck = {
  speed: 100,
  price: 50000
};

// Invoke the drive method on the car object using .call() with bike as the this context
car.drive.call(bike); // Output: The car is driving at 80 km/h and costs $1500.
// Invoke the drive method on the car object using .call() with truck as the this context
car.drive.call(truck); // Output: The car is driving at 100 km/h and costs $50000.
