/*
TODO: Problem-25: Suppose you have two values, ​​'10.5678' and '5.4321'. Convert these two values ​​from string to number and display them as output. When displayed as output, display 1 place after the decimal. Now, write a program.
 */

//Solution: 

let firstNumber = '10.5678';
let secondNumber = '5.4321';
let convert1= parseFloat(firstNumber);
let convert2 = parseFloat(secondNumber);
console.log(convert1.toFixed(1));
console.log(convert2.toFixed(1));