'use strict';

function Bank() {
  // this.DEFAULT_TEMPERATURE = 20;
  // this.temperature = this.DEFAULT_TEMPERATURE;

  this.accountName = 'Max';
  this.accountNumber = 1;
  this.statement = [];
  this.DEFUALT_BALANCE = 1000;
  this.balance = this.DEFUALT_BALANCE;

  // this.MINIMUM_TEMPERATURE = 10;
  // this.powerSavingMode = true;
  // this.MAX_LIMIT_PSM_ON = 25;
  // this.MAX_LIMIT_PSM_OFF = 32;
  // this.MEDIUM_ENERGY_USAGE_LIMIT = 18;
}

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
  return this.statement
};



//
//
// Thermostat.prototype.getCurrentTemperature = function() {
//   return this.temperature;
// };
//
// Thermostat.prototype.up = function() {
//   if (this.isMaximumTemperature()) {
//     return;
//   }
//   this.temperature += 1;
// }
//
// Thermostat.prototype.down = function() {
//   if (this.isMinimumTemperature()) {
//     return;
//   }
//   this.temperature -= 1;
// }
//
// Thermostat.prototype.isMinimumTemperature = function() {
//   return this.temperature === this.MINIMUM_TEMPERATURE;
// }
//
// Thermostat.prototype.isMaximumTemperature = function() {
//   if (this.isPowerSavingModeOn() === false) {
//     return this.temperature === this.MAX_LIMIT_PSM_OFF;
//   }
//   return this.temperature === this.MAX_LIMIT_PSM_ON;
// }
//
// Thermostat.prototype.isPowerSavingModeOn = function() {
//   return this.powerSavingMode === true;
// }
//
// Thermostat.prototype.switchPowerSavingModeOff = function() {
//   this.powerSavingMode = false;
// }
//
// Thermostat.prototype.switchPowerSavingModeOn = function() {
//   this.powerSavingMode = true;
// }
//
// Thermostat.prototype.resetTemperature = function() {
//   this.temperature = this.DEFAULT_TEMPERATURE;
// }
//
// Thermostat.prototype.energyUsage = function() {
//   if (this.temperature < this.MEDIUM_ENERGY_USAGE_LIMIT) {
//     return 'low-usage';
//   }
//   if (this.temperature >= this.MEDIUM_ENERGY_USAGE_LIMIT && this.temperature <= this.MAX_LIMIT_PSM_ON) {
//     return 'medium-usage';
//   }
//   return 'high-usage';
// }
