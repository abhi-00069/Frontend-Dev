class BankAccount {
  #balance = 0;

  deposit(amount) {
    if (amount <= 0) throw new Error("Invalid deposit");
    this.#balance += amount;
  }

  withdraw(amount) {
    if (amount > this.#balance) throw new Error("Insufficient balance");
    this.#balance -= amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const acc = new BankAccount();

try {
  acc.deposit(1000);
  console.log(acc.getBalance());
  acc.withdraw(500);
  console.log(acc.getBalance());
  acc.withdraw(1000);
} catch (e) {
  console.log("Error:", e.message);
}
