/*
TODO: Problem-10: You create a promise to process a payment, there will be a variable called amount, if the value of this variable is positive (greater than 0) the promise will be processed successfully, and if the value of amount is 0 or less, the promise will be rejected.
*/

// Solution: 

const processPayment = new Promise((resolve,reject)=>{
    const amount = 100; // Change this value to test different scenarios

    if(amount > 0){
        resolve(`Payment of $${amount} processed successfully.`);
    } else {
        reject("Payment failed: Amount must be greater than 0.");
    }
});
processPayment.then((message)=>{
    console.log(message);
}).catch((error)=>{
    console.log(error);
});