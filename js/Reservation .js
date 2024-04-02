//   Name : - Dhruv Modi
// ID   : - N01649493
// Web Programming
// Assignment-3  

const $ = (selector) => document.querySelector(selector);
const numericRegex = /^\d+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;

function processEntries(){

    if($("#arrival").value == undefined || $("#arrival").value == null || $("#arrival").value == ''){
        message("#Error_arrivaldate","Please select arrival date.");
        event.preventDefault();
    }
    else if($("#nights").value == undefined || $("#nights").value == null || $("#nights").value == ''){
        message("#Error_nights","Enter number of nights");
        event.preventDefault();
    }
    else if(!numericRegex.test($("#nights").value)){
        message("#Error_nights","Number must be numeric.");
        event.preventDefault();
    }
    else if(parseInt($("#nights").value) < 0 || parseInt($("#nights").value) > 30 ){
        message("#Error_nights","Number must be between 0 to 10.");
        event.preventDefault();
    }
    else if($("#contname").value == undefined || $("#contname").value == null || $("#contname").value == ''){
        message("#Error_contactname","Enter contact name.");
        event.preventDefault();
    }
    else if($("#contemail").value == undefined || $("#contemail").value == null || $("#contemail").value == ''){
        message("#Error_contactemail","enter contact email.");
        event.preventDefault();
    }
    else if(!emailRegex.test($("#contemail").value)){
        message("#Error_contactemail","Invalid Email");
        event.preventDefault();
    }
    else if($("#contphone").value == undefined || $("#contphone").value == null || $("#contphone").value == ''){
        message("#Error_contactphone","Enter contact phone number.");
        event.preventDefault();
    }
    else if(!phoneRegex.test($("#contphone").value)){
        message("#Error_contactphone","Invalid phone number.");
        event.preventDefault();
    }
}

function clearData(){
    $("#arrival").focus();
    $("#arrival").select();
    $("#arrival").value = "";
    $("#nights").value = "";
    $("#nights").value = "";
    $("#adults").value = "1";
    $("#children").value = "0";
    $("#room1").checked = true;
    $("#bed1").checked = true;
    $("#smoking").checked = false;
    $("#contname").value = "";
    $("#contemail").value = "";
    $("#contphone").value = "";
}

document.addEventListener("DOMContentLoaded",()=>{
    $("#arrival").focus();
    $("#arrival").select();
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;

    $("#arrival").setAttribute("min", today);
    $("#submit").addEventListener("click",processEntries);
    $("#clear").addEventListener("click",clearData);
});

function message(selector, message){
    $(selector).textContent = message;
    $(selector).style.display = "inline";
    setTimeout(hideErrorMessage, 5000, selector);
}

function hideErrorMessage(selector) {
    $(selector).textContent = "";
    document.querySelector(selector).style.display = "none";
}
