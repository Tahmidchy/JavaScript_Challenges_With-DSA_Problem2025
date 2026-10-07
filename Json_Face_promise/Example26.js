/*
TODO: Example-26: Now we are testing on try and finally method testing.
*/

// Solution:

function performanceCleanUp() {
    try {
        console.log('String a process...');
    }
    finally {
        console.log('Cleaning Up Resources...');
    }
}
performanceCleanUp();