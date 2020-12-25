const form = document.querySelector('form#form');
const errors_el = document.querySelector('form#form .errors');

form.addEventListener('submit', validateForm);

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