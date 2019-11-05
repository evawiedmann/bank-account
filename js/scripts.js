// Business Logic
function BankAccount(name, amount) {
  this.name = name;
  this.amount = amount;
}

BankAccount.prototype.changeAmount = function(addAmount, subAmount) {
  if (!isNaN(addAmount)) {
    this.amount += addAmount;
  } else if (!isNaN(subAmount)) {
    this.amount -= subAmount;
  }
}

var myAccounts = {
  accounts: [],
};
// UI

$(document).ready(function () {
  var display = $("p#output");
  $("form#regForm").submit(function(event) {
    event.preventDefault();

    var newAccount = new BankAccount($("input#name").val(), parseFloat($("input#seed").val()));
    myAccounts.accounts.push(newAccount);
    display.text(myAccounts.accounts[0].amount.toFixed(2));
  });

  $("form#depForm").submit(function() {
    event.preventDefault();

    myAccounts.accounts[0].changeAmount(parseFloat($("input#add").val()), parseFloat($("input#sub").val()));
    display.text(myAccounts.accounts[0].amount.toFixed(2));
  });



});
