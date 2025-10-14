/*
TODO: Problem-25:Create a function that declares a variable called insideSecret with a let. Its value will be "Internal Secret Hiding Place". Try to access insideSecret from outside the function.
*/

// Solution: We will create a function that declares a variable insideSecret using let, and then we will try to access it from outside the function.


function revealSecret() {
    let inside = "Internal Secret Hiding Place"; // Variable declared with let inside the function
    console.log("Inside the function, the secret is:", inside); // Accessing insideSecret inside the function
}
revealSecret(); // Calling the function to see the secret inside

// Trying to access insideSecret from outside the function
console.log("Outside the function, the secret is:", inside); // This will throw an error because insideSecret is not accessible here

// Output: ReferenceError: inside is not defined 
// This error occurs because insideSecret is scoped to the function and cannot be accessed from outside.
