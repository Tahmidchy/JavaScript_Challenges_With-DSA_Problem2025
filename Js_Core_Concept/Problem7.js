/*
TODO: Problem-7: Write a function to add function sum (a,b,c)and call a function sum(5,10) like this, this time log the console inside the function, what is the value of the third parameter. Why did that happen?
*/

//Solution-7: 

function sum(a,b,c){
    console.log(a+b+c);
}
sum(5,10); //Output: NaN, because the third parameter 'c' is undefined. When you try to add a number with undefined, the result is NaN (Not a Number).