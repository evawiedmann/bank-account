// Business Logic
function BankAccount(name, amount) {
  this.name = name;
  this.amount = amount;
}

BankAccount.prototype.changeAmount = function(addAmount, subAmount) {
  this.amount = (!isNaN(addAmount) ? (addAmount + this.Amount) : (this.Amount));
  this.amount = (!isNaN(subAmount) ? (this.Amount - subAmount) : (this.Amount));
}

var myAccounts = {
  accounts: [],
};
// UI

$(document).ready(function () {
  $("form#regForm").submit(function(event) {
    event.preventDefault();

    var newAccount = new BankAccount($("input#name").val(), parseFloat($("input#seed").val()));
    myAccounts.accounts.push(newAccount);
  });

  $("form#depForm").submit(function() {
    event.preventDefault();

    console.log($("input#sub").val());

    myAccounts.accounts[0].changeAmount(parseFloat($("input#add")), parseFloat($("input#sub")));
  });

});
