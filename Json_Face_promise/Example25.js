/*
TODO: Example-25: Now we are testing another try, catch, finally method using case
*/

// Solution:

function getProperty(str) {
    try {
        return str.toUpperCase();
    } catch (error) {
        console.log('Error eaten by virus');
    }
}
console.log(getProperty('My name is Korona'));
console.log(getProperty());