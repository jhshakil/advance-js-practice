// Practice 1

function example() {
  const num = 5;

  return function logNum() {
    console.log(num);
  };
}

const innerFunction = example();

console.log(innerFunction());

// Practice 2

function makeFunction() {
  let privateNum = 0;

  function privateIncrement() {
    privateNum++;
  }

  return {
    logNum: () => console.log(privateNum),
    increment: () => {
      privateIncrement();
      console.log("increment");
    },
  };
}

const { logNum, increment } = makeFunction();

logNum();
increment();
logNum();

// Practice 3

function Programmer(name, preferredLanguage) {
  // private property
  let privateName = name;

  // public property
  this.preferredLanguage = preferredLanguage;

  // public method
  this.writeCode = function () {
    console.log(`${privateName} in ${this.preferredLanguage}`);
  };

  // private method
  let drinkCoffee = function () {
    console.log("Gulp...");
  };

  // public method that use a colsure
  this.startDay = function () {
    drinkCoffee();
  };
}

const programmer = new Programmer("Jahid", "JavaScript");

programmer.writeCode();
programmer.startDay();

// Practice 4

function BankAccount(initialBalance) {
  let balance = initialBalance || 0;

  const validateAmount = function (amount) {
    return typeof amount === "number" && amount > 0;
  };

  this.deposit = function (amount) {
    if (validateAmount(amount)) {
      balance += amount;
      console.log(`Deposited: ${amount}`);
    } else {
      console.log("invalid deposit amount");
    }
  };
  this.withdraw = function (amount) {
    if (validateAmount(amount)) {
      if (amount <= balance) {
        balance -= amount;
        console.log(`Withdraw: ${amount}`);
      } else {
        console.log("Insufficient funds");
      }
    } else {
      console.log("invalid withdraw amount");
    }
  };

  this.getBalance = function () {
    return balance;
  };
}

const myAccount = new BankAccount(500);
myAccount.deposit(300);
console.log(myAccount.getBalance());
myAccount.withdraw(100);
console.log(myAccount.getBalance());
