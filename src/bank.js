'use strict';

function Bank() {
  // this.DEFAULT_TEMPERATURE = 20;
  // this.temperature = this.DEFAULT_TEMPERATURE;

  this.accountName = 'Max';
  this.accountNumber = 1;
  this.statement = [];
  this.DEFUALT_BALANCE = 1000;
  this.balance = this.DEFUALT_BALANCE;
  this.default_deposit = 100

  // this.MINIMUM_TEMPERATURE = 10;
  // this.powerSavingMode = true;
  // this.MAX_LIMIT_PSM_ON = 25;
  // this.MAX_LIMIT_PSM_OFF = 32;
  // this.MEDIUM_ENERGY_USAGE_LIMIT = 18;
}

Bank.prototype.getDefaultDeposit = function () {
  return this.default_deposit
};

Bank.prototype.getAccountName = function () {
  return this.accountName
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
