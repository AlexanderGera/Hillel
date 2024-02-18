
//Experement at Class

class BankAccount {
    constructor(accountNumber, accountHolderName, balance) {
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.balance = balance;
    }

    showAccountDetail() {
        console.log(`Account Details are followings:\n Number: ${this.accountNumber}\n Name: ${this.accountHolderName}\n Balance: ${this.balance}`)
    }

}

let johnBankAccount = new BankAccount(101010, 'Johann Babai', 1000);




