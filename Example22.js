/*
TODO: Example-22: Now we are testing the try and catch block in the promise. We will throw an error in the try block and catch it in the catch block. We will also log the error message in the catch block.
*/

//Solution: Example-22: Now we are testing the try and catch block in the promise. We will throw an error in the try block and catch it in the catch block. We will also log the error message in the catch block.

function testPromise() {
    return new Promise((resolve, reject) => {
        try {
            // Throw an error
            throw new Error("This is a test error");
        } catch (error) {
            // Catch the error and reject the promise
            reject(error);
        }
    });
}

testPromise()
    .then(result => {
        console.log("Promise resolved with result:", result);
    })
    .catch(error => {
        console.error("Promise rejected with error:", error.message);
    });