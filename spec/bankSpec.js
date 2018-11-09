'use strict';

describe('Bank', function() {

  var bank;

  beforeEach(function() {
    bank = new Bank();
  });

  it('Starts with the account name', function() {
    expect(bank.getAccountName()).toEqual('Max');
  });

  it('Starts with the account number', function() {
    expect(bank.getAccountNumber()).toEqual(1);
  });

  it('Starts with 1000 in balance', function() {
    expect(bank.getBalance()).toEqual(1000);
  });

  it('deposits £1000', function() {
    bank.deposit(1000, new Date());
    expect(bank.getBalance()).toEqual(2000);
  });

});
