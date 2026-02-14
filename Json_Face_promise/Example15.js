/*
TODO: Example-15: Now we are Test promise resolve and reject methods by changing the userAvailable variable to false.
*/

// Solution-15:

const moneyRequest = new Promise((resolve, reject)=>{
    setTimeout(()=>resolve('Money request approved!'), 2000);
});
const transferMoney = new Promise((resolve, reject)=>{
    setTimeout(()=>resolve('Money transferred successfully!'), 3000);
});
const payFee = new Promise((resolve, reject)=>{
    setTimeout(()=>resolve('Fee paid successfully!'), 1000);
});

Promise.all([moneyRequest, transferMoney, payFee])
    .then((messages)=>{
        console.log(messages);
    })
    .catch((error)=>{
        console.log('An error occurred:', error);
    }); 