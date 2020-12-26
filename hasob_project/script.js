/*
const form = document.querySelector('form#form');
form.addEventListener('submit', ValidateForm);

const errors_el = document.querySelector('form#form .errors');

function validateForm (e){
    e.preventDefault();

    const username = document.querySelector('#form #username');
    const email = document.querySelector('#form #email');
}

let errors = [];

const form_email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

if (username.value === ''){
    errors.push({text: "username", el: username});
}

if(email.value === ''){
    errors.push({text: "email", el: email});
} else if(!form_email.test(email.value)){
    errors.push({text: "email", el: email});
}

if (errors.length > 0){
    handle_errors(errors);
    return false;
}

alert('REGISTRATION SUCCESSFUL!');
return true;

function handle_errors(errs){
    let str = "You have errors with the following fields; ";

    errs.map((er) => {
        er.el.classList.add('error');
        str += er.text + ", ";
    });

    errs[0].el.focus();

    let error_el = document.createElement('div');
    error_el.classList.add('error');
    error_el.innerText = str;

    error_el.addEventListener('click', function () {
        errors_el.removeChild(error_el);
    });

    errors_el.appendChild(error_el);
}
/*Start Event Listeners*/
/*
const form = document.querySelector("#form");
const username = document.querySelector("#username");
const radios = document.querySelector("#radios");
const dropDwn = document.querySelector("#dropDwn");
const checkboxes = document.querySelector("#checkboxes");
const email = document.querySelector("#email");

if (form){
    form.addEventListener("submit", function(e) {
        submitForm(e, this);
    })
}

let form = document.getElementsById("form")[0];
form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Form Submitted!");
});
/*End Event Listeners*/

/*Start Dropdown Validation*/
/*
function Validate() {
    var dropDwn = document.getElementById("dropDwn");
    var required = document.getElementById("required")
    if (dropDwn.value == "") {
        //If the "Please Select" option is selected display error.
        alert(h6);
        return false;
    }
    return true;
}
/*End Dropdown Validation*/

/*Start JSON*/
/*
    async function submitForm(e, form){
        //prevent page reload
        e.preventDefault();
        //submit form

        //user interaction
        const submitBtn = document.getElementById("submitBtn");
        submitBtn.disabled = true;
        setTimeout(() => submitBtn.disabled = false, 2000);
        //JSON body
        const jsonFormData = buildJsonFormData(form);
        //JSON headers
        const headers = buildHeaders();
        //request and response
        const response = await fetchService.performPostHttpRequest('https://jsonplaceholder.typicode.com/posts', headers, jsonFormData); //makes use of JSON placeholder
        console.log(response); //informs user of result

        if(response)
            window.location = `/success.html?username=${response.username}&radio=${response.radio}&dropDwn=${response.dropDwn}&checkboxes=${response.checkboxes}&email=${response.email}&id=${response.id}`;
        else
            alert(`An error occurred`)
    }
/*End JSON*/

const form = document.querySelector('form#form');
form.addEventListener('submit', ValidateForm);

function ValidateForm (e){

}

$(document).ready(function () {
    $("#submitBtn").click(function (e) {
        ValidateForm();
        return false;
      });
  });


function EmailValidate(){
    var numericExpression = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var elem = $("email").val();
    if (elem.match(numericExpression))
        return true;
    else
        return false;
}

function ValidateForm(){
    var errorCounter = 0;
    var errorMessage = "";
    //Name
    if ($("#username").val() == '') {
        errorMessage += "*Full name required<br/>";
        errorCounter ++;
    }
    //End

    //Radios
    if ((!($("#radios").prop('checked')))) {
        errorMessage += "*Kindly indicate gender<br/>";
        errorCounter++;
    }
    //End

    //Dropdown
    if ($('#dropDwn').val() == 'select') {
        errorMessage += "*Qualification required<br/>";
        errorCounter++;
    }
    //End

    //Checkboxes
    if (!($('#checkboxes').prop('checked')))
    {
        errorMessage += "*Kindly indicate interests<br/>"
        errorCounter++;
    }
    //End

    //Email
    if ($("#email").val() == '') {
        errorMessage += "*Email Required<br/>";
        errorCounter ++;
    }else if (!(EmailValidate())) {
            errorMessage += "*Invalid email address<br/>";
            errorCounter ++;
    }
    //End  
    
    $("#errorDiv").html(errorMessage);
    if (errorCounter == 0) {
        alert('Registration Successful!');
        return true;
    }else {
        return false;
    }
}
    

