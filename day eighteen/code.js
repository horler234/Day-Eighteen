function loan() {
  var money = document.getElementById("amount").value;
  var percent = document.getElementById("interest").value;
  var duration = document.getElementById("months").value;
  var interest = (percent * 0.01) * money;
  var interest_monthly = interest / duration
  var money_monthly = money / duration
  var loan_money = (interest_monthly + money_monthly).toFixed(2);
  loan_money = loan_money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  document.getElementById('output').innerHTML = '$' + loan_money;

  if (money === "" || percent === "" || duration === "") {
    alert("Incomplete Information!");
  }
}
