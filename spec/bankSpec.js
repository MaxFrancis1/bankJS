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

  it('deposits 1000 on 01/01/18', function() {
    bank.deposit(1000, 010118);
    expect(bank.getStatement()).toEqual(`[1000, 010118, 'C']`);
  });


});
å
