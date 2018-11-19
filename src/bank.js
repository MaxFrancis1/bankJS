'use strict';

function Bank() {
  this.accountName = 'Max';
  this.accountNumber = 1;
  this.statement = [];
  this.DEFUALT_BALANCE = 1000;
  this.DEFUALT_DEPOSIT = 100;
  this.balance = this.DEFUALT_BALANCE;
  this.default_amount = this.DEFUALT_DEPOSIT;
}

Bank.prototype.getDefaultDeposit = function () {
  return this.default_deposit
};

Bank.prototype.getAccountName = function () {
  this.accountName
};

Bank.prototype.getAccountNumber = function () {
  return this.accountNumber
};

Bank.prototype.getBalance = function () {
  return this.balance
};

Bank.prototype.getStatement = function () {
  return this.statement
};

Bank.prototype.up = function () {
  this.default_amount += 100
};

Bank.prototype.down = function () {
  this.default_amount -= 100
};

Bank.prototype.deposit = function (damount, ddate) {

  this.balance += damount

  var dtransaction = {'Amount':damount, 'Date':ddate, 'Indicator':'C', 'Balance':this.balance};

  this.statement.push(dtransaction)
  console.log(this.statement)
};

Bank.prototype.withdraw = function (wamount, wdate) {

  this.balance -= wamount

  var wtransaction = {'Amount':wamount, 'Date':wdate, 'Indicator':'D', 'Balance':this.balance};

  this.statement.push(wtransaction)
  console.log(this.statement)
};

Bank.prototype.printStatement = function () {

  this.statement.forEach(function(i) {console.log(i)})
};
