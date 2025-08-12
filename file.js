const getEl = (id) => document.getElementById(id);
const result = getEl("result");
const button = document.querySelector("button");

const formatter = new Intl.NumberFormat("en-US", {
  style: 'currency',
  currency: 'USD'
});

function sanitizeInput(str) {
  return str.replace(/[^\d.]/g, '').replace(/(\..*)\./g, '$1');
}

function perPerAmt(totalAmount, peopleCount, tipPercent) {
  const tipAmount = totalAmount * (tipPercent / 100);
  const perPerson = (totalAmount + tipAmount) / peopleCount;
  result.textContent = `Each person pays ${formatter.format(perPerson)}`;
}

function getSplit() {
  const totalAmountRaw = sanitizeInput(getEl('totalAmount').value.trim());
  const peopleCountRaw = sanitizeInput(getEl('peopleCount').value.trim());
  const tipPercentRaw = sanitizeInput(getEl('tipPercent').value.trim());

  const totalAmount = Number(totalAmountRaw);
  const peopleCount = Number(peopleCountRaw);
  const tipPercent = Number(tipPercentRaw) || 0;

  if (!totalAmountRaw) {
    result.textContent = "Please enter total amount!";
    return;
  }
  if (!peopleCountRaw) {
    result.textContent = "Please enter number of people!";
    return;
  }

  if (isNaN(totalAmount) || isNaN(peopleCount) || isNaN(tipPercent) || peopleCount <= 0) {
    result.textContent = "Please enter a valid number.";
    return;
  }

  perPerAmt(totalAmount, peopleCount, tipPercent);
}

button.addEventListener("click", (e) => {
  e.preventDefault();
  getSplit();
});
