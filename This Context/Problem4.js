/*
TODO: Problem-4: Declare a variable named `laptop` that contains a property called `brand` (set to 'Dell') and a method named `getBrand` which logs the laptop's brand to the console. Then, declare a variable named `mobile` that also contains a `brand` property, and use the `getBrand` method from the `laptop` object with this `mobile` object.
*/

// Solution:

const laptop = {
    brand: 'Dell',
    getBrand() {
        console.log(this.brand);
    }
};

const mobile = {
    brand: 'iPhone'
};

laptop.getBrand(); // Output: 'Dell'
mobile.getBrand = laptop.getBrand;
mobile.getBrand(); // Output: 'iPhone'
