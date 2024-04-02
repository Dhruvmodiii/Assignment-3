/* Name : - Dhruv Modi
   ID   : - N01649493
   Web Programming
   Assignment-3 */

function $(selector) {
  return document.querySelector(selector);
}

function processEntries() {
  const SubTotal = parseFloat($("#SubTotal").value);
  const TaxRate = parseFloat($("#TaxRate").value);

  // set the alert for required amount in subtotal.
  if (isNaN(SubTotal) || SubTotal <= 0 || SubTotal >= 10000) {
      alert("SubTotal must be a positive number between 0 and 10000.");
      return;
  }

  // set the alert for required amount in taxrate.
  if (isNaN(TaxRate) || TaxRate <= 0 || TaxRate >= 12) {
      alert("Tax rate must be a positive number between 0 and 12.");
      return;
  }

  // Calculate sales tax and total
  const salesTax = SubTotal * (TaxRate / 100);
  const total = SubTotal + salesTax;

  // Display results
  $("#salestax").value = salesTax.toFixed(2);
  $("#total").value = total.toFixed(2);

  // Move cursor to Subtotal field
  $("#SubTotal").focus();
}

// Attach processEntries() function to Calculate button
$("#calculate").addEventListener("click", processEntries);

// Clear form on Clear button click
$("#clear").addEventListener("click", () => {
  $("#SubTotal").value = "";
  $("#TaxRate").value = "";
  $("#salestax").value = "";
  $("#total").value = "";
  $("#SubTotal").focus();
});

// Move cursor to Subtotal field on application start
document.addEventListener("DOMContentLoaded", () => {
  $("#SubTotal").focus();
});
