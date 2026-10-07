/*
TODO: Example-5: Now we are testing Optional chaining operator
*/

const user = {
    name:'John Doe',
    address: {
        street: '123 Main St',
        city: 'Anytown',
    }
};

console.log(user?.address?.city); // Output: Anytown
console.log(user?.profile?.email); // Output: undefined (no error thrown)