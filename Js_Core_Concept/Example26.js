/*
TODO: Now we are testing on JavaScript function scope (local scope) concept.
*/

// Solution: Demonstrating JavaScript function scope (local scope) concept

function add (a,b){
    const total = a + b;
    console.log(a,b);
    return total;
}

// trying to access 'a', 'b', or 'total' outside the function will cause an error
console.log(a,b); // ReferenceError: a is not defined
add(5,10);
console.log(total); // ReferenceError: total is not defined