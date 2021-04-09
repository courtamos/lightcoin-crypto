class Account {
  constructor(username) {
    this.username = username;
    this.transactions = [];
  }

  get balance() {
    let balance = 0;
    for (const transaction of this.transactions) {
      balance += transaction.value;
    }
    return balance;

  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }
}

class Transaction {
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }
  commit() {
    if (!this.isAllowed()) {
      console.log(`Insufficent Funds! You're current balance is $ ${myAccount.balance}`);
      return false;
    }
    this.time = new Date();
    this.account.addTransaction(this);
    return true;

  }
}

class Deposit extends Transaction {
  get value() {
    return this.amount;
  }

  isAllowed() {
    return true;
  }
}

class Withdrawal extends Transaction {
  get value() {
    return -this.amount;
  }

  isAllowed() {
    return (this.account.balance - this.amount >= 0);
  }
}



// DRIVER CODE BELOW
const myAccount = new Account("court");

console.log('Starting Balance:', myAccount.balance);

const t1 = new Deposit(120.00, myAccount);
t1.commit();

const t2 = new Withdrawal(50.00, myAccount);
t2.commit();

const t3 = new Deposit(2000.00, myAccount);
t3.commit();

const t4 = new Withdrawal(2050.00, myAccount);
t4.commit();

const t5 = new Withdrawal(100.00, myAccount);
t5.commit();

console.log('Ending Balance:', myAccount.balance);
