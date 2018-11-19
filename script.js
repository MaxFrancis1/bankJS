$(document).ready(function() {

  var bank = new Bank();

  accountDetails();

  function accountDetails() {
    $('#accountName').text(bank.accountName);
    $('#accountNumber').text(bank.accountNumber);
    $('#balance').text(bank.balance);
    $('#default_amount').text(bank.default_amount);
  }

  $('#up').on('click', function() {
    bank.up();
    accountDetails();
  })

  $('#down').on('click', function() {
    bank.down();
    accountDetails();
  })

  $('#deposit').on('click', function() {
    bank.deposit(bank.default_amount);
    accountDetails();
  })

  $('#withdraw').on('click', function() {
    bank.withdraw(bank.default_amount);
    accountDetails();
  })

  $('#printstatement').on('click', function() {
for (i = 0; i < bank.statement.length; i++) {
  var li = document.createElement("li");
  var text = document.createTextNode('transaction no '+i+' '+JSON.stringify(bank.statement[i]));
  li.appendChild(text);
  document.getElementById("myUl").appendChild(li);
}
    bank.printStatement();
  })

});
