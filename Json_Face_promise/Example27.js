/*
TODO: Example-27: Now we are testing error handling 
*/

function validateInput(input) {
    try {
        if (typeof input != 'string') {
            throw new Error('Input must be a string');
        }
        console.log('Valid input:',input);
    } catch (error) {
        if (error) {
            console.log('Custom Error:',error.message);
        } else {
            console.log('Unknown Error:',error.message);
        }
    }
}

validateInput('Hello');
validateInput(42);