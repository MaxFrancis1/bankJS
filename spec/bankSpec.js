'use strict';

describe('Bank', function() {

  var bank;

  beforeEach(function() {
    bank = new Bank();
  });

  it('Starts with the account name', function() {
    expect(bank.accountName).toEqual('Max');
  });

  it('Starts with the account number', function() {
    expect(bank.accountNumber).toEqual(1);
  });

  it('Starts with 1000 in balance', function() {
    expect(bank.balance).toEqual(1000);
  });

  it('deposits £1000', function() {
    bank.deposit(1000, new Date());
    expect(bank.balance).toEqual(2000);
  });

  it('withdraws £500', function() {
    bank.withdraw(500, new Date());
    expect(bank.balance).toEqual(500);
  });

});
