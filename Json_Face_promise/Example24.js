/*
TODO: Example-24: In this example, we are testing on JSON Error handling by using try method, catch method and finally method. We will parse a JSON string that is not properly formatted and catch the error in the catch block. We will also log the error message in the catch block and log a message in the finally block.

*/

// Solution: Example-24: In this example, we are testing on JSON Error handling by using try method, catch method and finally method. We will parse a JSON string that is not properly formatted and catch the error in the catch block. We will also log the error message in the catch block and log a message in the finally block.

const data = `{
    "name": "John Doe",
    "age": 30,
    "isStudent": true,
    "courses": ["Math", "Science", "History"],
    "address": { 
        "street": "123 Main St",
        "city": "New York",
        "state": "NY"
    }
`; // Missing closing bracket

try {
    const result = JSON.parse(data);
    console.log(result);
} catch (error) {
    console.error("Error parsing JSON:", error.message);
} finally {
    console.log("Finished attempting to parse JSON.");
}

// Explaination: In this code, we have a JSON string that is not properly formatted due to a missing closing bracket. When we attempt to parse this string using JSON.parse(), it will throw an error. The error is caught in the catch block, where we log the error message. Finally, regardless of whether an error occurred or not, we log a message indicating that we have finished attempting to parse the JSON.