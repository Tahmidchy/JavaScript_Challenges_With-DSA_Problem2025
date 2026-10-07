/*
TODO: Example-7: Now we are testing instance method in the class and how to use it.
*/

// Solution:

class BankAccount {
    constructor(owner,balance) {
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
        return this.balance;
    }
    withdraw(amount) {
        if(this.balance >= amount) {
            this.balance -= amount;
            return amount;
        }else {
            return "Insufficient balance";
        }

}
}

const MyAccount = new BankAccount("Leo", 1000);
MyAccount.deposit(500);
MyAccount.withdraw(200);
console.log(MyAccount);