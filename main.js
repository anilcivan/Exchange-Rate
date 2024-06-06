// Select the amount input field
const amountInput = document.querySelector("#amount");
// Select the first currency dropdown
const firstOption = document.querySelector("#firstCurrencyOption");
// Select the second currency dropdown
const secondOption = document.querySelector("#secondCurrencyOption");
// Select the result input field
const resultInput = document.querySelector("#result");
// Create a new instance of the Currency class
const currency = new Currency();

// Initialize event listeners
runEventListeners();

// Function to set up event listeners
function runEventListeners() {
  // Add an event listener for input events on the amount input field
  amountInput.addEventListener("input", exchange);
}

// Function to handle the exchange process
function exchange() {
  // Get the amount from the input field and convert it to a number
  const amount = Number(amountInput.value.trim());
  // Get the selected value of the first currency dropdown
  const firstOptionValue = firstOption.options[firstOption.selectedIndex].textContent;
  // Get the selected value of the second currency dropdown
  const secondOptionValue = secondOption.options[secondOption.selectedIndex].textContent;

  // Call the exchange method of the Currency instance and pass the amount and selected currencies
  currency.exchange(amount, firstOptionValue, secondOptionValue)
    .then((result) => {
      // Set the result input field to the result rounded to two decimal places
      resultInput.value = result.toFixed(2);
    });
}
