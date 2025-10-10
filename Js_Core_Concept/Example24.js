/*
TODO: Example-24: Now we are testing on javascript scope concept.
*/

// Solution: Demonstrating JavaScript scope concept

if(true) {
    let message = "This is inside an if block";
    console.log(message); // Output: This is inside an if block
}

// Now we are testing another scope concept with for loop.

for (let i = 0; i < 3; i ++) {
    let loopMessage = "This is inside a for loop block";
    console.log(loopMessage); // Output: This is inside a for loop block
}

// Now we are testing another scope concept with while loop.

let count = 0;
while (count < 3) {
    console.log(count); // Output: 0, 1, 2
    count++;
}

// Now we are testing another scope concept with function.

function add(a,b) {
    const sum = a + b;
    return sum;
}
const result = add(5, 10);
console.log(result); // Output: 15