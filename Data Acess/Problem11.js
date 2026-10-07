/*
TODO: Problem-11: Optional Chaining Read the property named 'menu' from the vehicle object, and if it does not exist, return 'Menu not valid'.
*/

// Solution:

let vehicle = {
  type: "Car",
  brand: "Toyota",
  model: "Camry"
};

let menu = vehicle.menu?.items ?? 'Menu not valid';
console.log(menu); // Output: Menu not valid