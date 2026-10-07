/*
TODO: Problem-10: ProductDetails object Write code to set the value of the `discount` variable to 10 if it is falsy.
*/

// Solution: 

let productDetails = {
  name: "Smartphone",
  price: 800,
  discount: null // This property is intentionally set to null
};

productDetails.discount = productDetails.discount || 10;
console.log(productDetails.discount); // Output: 10