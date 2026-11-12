/*
TODO: Example-8: We are testing the Javascript this context, use strict mode. In this example, we will see how the value of 'this' changes based on how a function is called.
*/

//Solution:

'use strict';
function test() {
    console.log(this); // 'this' is undefined in strict mode
}
test();