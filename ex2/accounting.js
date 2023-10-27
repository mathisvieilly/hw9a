class Account {
  constructor(name) {
    this.name = name;
    this.balance = 0;
  }

  credit(amount) {
    this.balance += amount;
    return this.balance;
  }

  describe() {
    return `owner: ${this.name}, balance: ${this.balance}`;
  }
}

module.exports = Account;