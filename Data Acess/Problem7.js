/*
TODO:  Const vehicle = {type: 'car',features: {color: 'red',brand:{name: 'Toyota',model: 'Corolla'}}} the object prints the brand name of the vehicle.
*/
const vehicle = {
    type: 'car',
    features: {
        color: 'red',
        brand: {
            name: 'Toyota',
            model: 'Corolla'
        }
    }
};
console.log(vehicle.features.brand.name);