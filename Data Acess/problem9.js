/*
TODO: Problem-9: A Product object does not have a property named 'stock'; Nullish coalescing Set the default value of 'stock' to 0.
*/

// Solution: 

let product = {
  name: "Laptop",
  price: 1200,
  stock: null ?? 0 // This property is intentionally set to null
};

console.log(product.stock); // Output: 0
