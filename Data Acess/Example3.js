/*
TODO: Example-3: We are testing on Nested Data Access, so we need to create a test for it.
*/

const User = {
    id: 5001,
    name: 'John Doe',
    address: {
        street: {
            second: 'poribag er goli'
        },
        city: 'Dhaka',
    }
};

console.log(User.address.street.second);