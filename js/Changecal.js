/* Name : - Dhruv Modi
   ID   : - N01649493
   Web Programming
   Assignment-3 */

  //  function $(selector) {
  //   return document.querySelector(selector);
  // }
  
  // function processEntry() {
  //   const Amount = parseFloat($("#Amount").value);
  //   // const TaxRate = parseFloat($("#TaxRate").value);
  
  //   // set the alert for required amount in Amount.
  //   if (isNaN(Amount) || Amount <= 0 || Amount >= 99) {
  //       alert(" You must enter amount between 0 and 99.");
  //       return;
  //   }
  


  //   function makeChange(Amount) {
  //     var quarters = Math.floor(Amount / 25);
  //     var remainingChange = Amount % 25;
  //     var dimes = Math.floor(remainingChange / 10);
  //     remainingChange %= 10;
  //     var nickels = Math.floor(remainingChange / 5);
  //     var pennies = remainingChange % 5;
  
  //     // Display results in text boxes
  //     $('#Quarters').value = quarters;
  //     $('#Dimes').value = dimes;
  //     $('#Nickels').value = nickels;
  //     $('#Pennies').value = pennies;
  // }
  
  //   //  cursor point out at Amount field.
  //   $("#Amount").focus();
  // }
  
  // // Link the processEntry() function to Calculate button
  // $("#calculate").addEventListener("click", processEntry);
  
  // // Clear form on Clear button click
  // $("#clear").addEventListener("click", () => {
  //   $("#Amount").value = "";
  //   $("#Quarters").value = "";
  //   $("#Dimes").value = "";
  //   $("#Nickels").value = "";
  //   $("#Pennies").focus();
  // });
  
  // // Move cursor to Subtotal field on application start
  // document.addEventListener("DOMContentLoaded", () => {
  //   $("#Amount").focus();
  // });




  function $(selector) {
    return document.querySelector(selector);
  }
  
  function processEntry() {
    const Amount = parseFloat($("#Amount").value);
    // const TaxRate = parseFloat($("#TaxRate").value);
  
    // set the alert for required amount in Amount.
    if (isNaN(Amount) || Amount <= 0 || Amount >= 99) {
        alert(" You must enter amount between 0 and 99.");
        return;
    }
  
    makeChange(Amount);
  
    //  cursor point out at Amount field.
    $("#Amount").focus();
  }
  
  function makeChange(Amount) {
    var quarters = Math.floor(Amount / 25);
    var remainingChange = Amount % 25;
    var dimes = Math.floor(remainingChange / 10);
    remainingChange %= 10;
    var nickels = Math.floor(remainingChange / 5);
    var pennies = remainingChange % 5;

    // Display results in text boxes
    $('#Quarters').value = quarters;
    $('#Dimes').value = dimes;
    $('#Nickels').value = nickels;
    $('#Pennies').value = pennies;
  }
  
  // Link the processEntry() function to Calculate button
  
  // Clear form on Clear button click
  
  // Move cursor to Amount field on application start
  document.addEventListener("DOMContentLoaded", () => {
    $("#Amount").focus();
    $("#calculate").addEventListener("click", processEntry);
    $("#clear").addEventListener("click", () => {
      $("#Amount").value = "";
      $("#Quarters").value = "";
      $("#Dimes").value = "";
      $("#Nickels").value = "";
      $("#Pennies").value = "";
      $("#Amount").focus();
    });
   
  });
  