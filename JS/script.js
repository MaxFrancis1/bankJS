$(document).ready(function() {

  var bank = new Bank();

  accountDetails();

  function accountDetails() {
    $('#accountName').text(bank.getAccountName);
    $('#accountNumber').text(bank.getAccountNumber);
    $('#balance').text(bank.getBalance);
    $('#default_amount').text(bank.getDefaultDeposit);
  }

  $('#up').on('click', function() {
    bank.up();
    accountDetails();
  })

  $('#down').on('click', function() {
    bank.down();
    accountDetails();
  })
