/*
TODO: Example-6: We are Testing the Javascript this context,Event Listener. In this example, we will see how the value of 'this' changes based on how a function is called.
*/

//Solution:

document.getElementById('get-user').addEventListener("click", function() {
    console.log(this); // 'this' refers to the button element that was clicked
});