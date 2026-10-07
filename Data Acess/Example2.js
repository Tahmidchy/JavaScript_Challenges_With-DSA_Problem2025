/*
TODO: Example-2: We are Testing on Data Access from object 
 */

const products =  {
    count: 5000,
    data: [
        {id: 1, name: 'Product-1', price: 100},
        {id: 2, name: 'Product-2', price: 200},]
};
console.log(products.data[1].price);