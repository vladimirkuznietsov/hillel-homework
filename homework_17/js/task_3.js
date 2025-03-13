class BankAccount {
    #balance

    constructor(initBalance) {
        if(initBalance <= 0 || typeof initBalance != 'number') {
            throw new Error('Initial balance should be a positive number.')
        }
        this.#balance = initBalance;
    }

    get balance() {
        return this.#balance;
    }

    deposit(amount) {
        return this.#balance += amount;
    }

    withdraw(amount) {
        return this.#balance > amount ? this.#balance -= amount : console.log('Not enough money on account.')
    }
}

const account1 = new BankAccount(1000);

console.log(account1.balance);
account1.withdraw(200);
console.log(account1.balance);
account1.deposit(400);
console.log(account1.balance);

const account2 = new BankAccount('1000');
const account3 = new BankAccount(-2);