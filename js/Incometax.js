//  Name : - Dhruv Modi
// ID   : - N01649493
// Web Programming
// Assignment-3  


function $(selector) {
    return document.querySelector(selector);
  }


  function processEntries(){
    let income = $("#income").value;
    let taxRate = 0;

    if (income == ""){
        alert("Income : Value must needed.");
        clearData();
        return;
    }
    else if (isNaN(income) || (parseInt(income)<0 || parseInt(income)>99999999)){
     alert("Tax Amount : Its a numeric number and is between 0 to 99999999");
     clearData();
     return;
    }
    else{
        income = parseInt(income)
        taxRate = calculateTax(income);
        $("#taxloan").value = taxRate.toFixed(2);
    }
}
function calculateTax(income){
    let taxRate = 0;
    const taxArray = [0, 9875,40125,85525,163300,207350,518400];
    const taxpercentArray = [0.10,0.12,0.22,0.24,0.32,0.35,0.37];

    for(let i in taxArray){
        i = parseInt(i);
       
        if(taxArray[i+1] != undefined && taxArray[i]<=income && income<taxArray[i+1]){
            taxRate += (income-taxArray[i]) * taxpercentArray[i];
            break;
        }else{
            if(taxArray[i+1] == undefined){
                taxRate += (income-taxArray[i]) * taxpercentArray[i];
                break;
            }else{
                taxRate += (taxArray[i+1]-taxArray[i]) * taxpercentArray[i];
            }
        }
        
    }
    return taxRate;
}

    function clearData(){
        $("#income").focus();
        $("#income").select();
        $("#income").value = "";
        $("#taxloan").value = "";
    }
    
    document.addEventListener("DOMContentLoaded",()=>{
        $("#income").focus();
        $("#income").select();
        $("#calculate").addEventListener("click",processEntries);
        $("#clear").addEventListener("click",clearData);
    });


// // function processEntries() {
//     const income = parseFloat(document.getElementById("income").value);
//     let taxOwed = 0;

//     if (isNaN(income) || income < 0 || income > 99999999) {
//         alert("Income: Please enter a valid numeric amount between 0 and 99999999.");
//         clearData();
//         return;
//     } else {
//         taxOwed = calculateTax(income);
//         document.getElementById("taxOwed").value = taxOwed.toFixed(2);
//     }
// }

// function calculateTax(income) {
//     const taxArray = [0, 9875, 40125, 85525, 163300, 207350, 518400];
//     const taxPercentArray = [0.10, 0.12, 0.22, 0.24, 0.32, 0.35, 0.37];
//     let taxOwed = 0;

//     for (let i = 0; i < taxArray.length; i++) {
//         if (taxArray[i + 1] !== undefined && income >= taxArray[i] && income < taxArray[i + 1]) {
//             taxOwed += (income - taxArray[i]) * taxPercentArray[i];
//             break;
//         } else {
//             if (taxArray[i + 1] === undefined) {
//                 taxOwed += (income - taxArray[i]) * taxPercentArray[i];
//                 break;
//             } else {
//                 taxOwed += (taxArray[i + 1] - taxArray[i]) * taxPercentArray[i];
//             }
//         }
//     }
//     return taxOwed;
// }

// function clearData() {
//     const incomeInput = document.getElementById("income");
//     const taxOwedInput = document.getElementById("taxOwed");

//     incomeInput.focus();
//     incomeInput.value = "";
//     taxOwedInput.value = "";
// }
