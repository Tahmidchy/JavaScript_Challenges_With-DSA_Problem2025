/*
TODO: Problem-27: Create a function called SchoolDetails, declare a variable called schoolName inside this function, then create another nested function called display school name inside the SchoolDetails function. This nested function will access the schoolName variable and print it to the console, so that the output shows the name of the school when calling the functions, now call the SchoolDetails function from outside.
*/

// Solution: We will create a function SchoolDetails that declares a variable schoolName, and then we will create a nested function displaySchoolName that accesses and prints the schoolName variable.

function SchoolDetails() {
    let schoolName = "Greenwood High"; // Variable declared with let inside the SchoolDetails function

    function displaySchoolName() { // Nested function to display the school name
        console.log("The name of the school is:", schoolName); // Accessing schoolName inside the nested function
    }
    displaySchoolName(); // Calling the nested function to display the school name
}
SchoolDetails(); // Calling the SchoolDetails function from outside
// Output: The name of the school is: Greenwood High
// This works because the nested function displaySchoolName has access to the variables in its parent function SchoolDetails due to JavaScript's lexical scoping. 
