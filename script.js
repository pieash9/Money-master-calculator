function getInputValue(inputId) {
  const inputElement = document.getElementById(inputId);
  const inputValueString = inputElement.value;
  const inputValue = parseFloat(inputValueString);

  if (isNaN(inputValueString) || inputValueString == "" || inputValue < 0) {
    inputElement.value = "";
    alert("Input a valid positive number !!");
    return false;
  } else {
    return inputValue;
  }
}
function setInnerText(id, newValue) {
  const textElement = document.getElementById(id);
  textElement.innerText = newValue;
}
function getInnerTextValue(id) {
  const TextElement = document.getElementById(id);
  const TextValue = parseFloat(TextElement.innerText);
  return TextValue;
}

document.getElementById("calculate-btn").addEventListener("click", function () {
  if (true) {
    const incomeTotalValue = getInputValue("income");

    const expenseValue = getInputValue("expense");
    const rentValue = getInputValue("rent");
    const clothesValue = getInputValue("clothes");
    const totalExpenseFloat = expenseValue + rentValue + clothesValue;

    if (incomeTotalValue < totalExpenseFloat) {
      alert("Income er ceye Expense beshi howa jabe na !!");
    } else {


      
      const totalExpense = Number(totalExpenseFloat.toFixed(2));
      setInnerText("total-expense", totalExpense);
      const balanceAfterExpenseFloat = incomeTotalValue - totalExpense;
      const balanceAfterExpense = Number(balanceAfterExpenseFloat.toFixed(2));
      setInnerText("balance-after-expanse", balanceAfterExpense);
    }
  }
});

document.getElementById("savings-btn").addEventListener("click", function () {
  const incomeTotalValue = getInputValue("income");
  const savingsPercentage = getInputValue("saving-percentage");
  const totalExpense = getInnerTextValue("total-expense");
  const previousBalance = getInnerTextValue("balance-after-expanse");
  if (savingsPercentage > 100) {
    alert("100%  er upor save kora somvon noy");
  } else {
    //calculate percentage
    const savingsAmountFloat = incomeTotalValue * (savingsPercentage / 100);
    const savingsAmount = Number(savingsAmountFloat.toFixed(2));
    if (savingsAmount > previousBalance) {
      document.getElementById("saving-percentage").value = "";
      alert("Savings amount  Balance er ceye beshi hote parbe na");
    } else {
      setInnerText("savings-amount", savingsAmount);
      const remainBalance = Number((incomeTotalValue - savingsAmount - totalExpense).toFixed(2));
      
      setInnerText("remaining-balance", remainBalance);
    }
  }
});
