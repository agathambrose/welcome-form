const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const sex = document.getElementById('sex');
const qualif = document.getElementById('qualif');
const interests = document.getElementById('interests');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
})

function checkInputs(){
    //get the values from the inputs
    const usernameValue = username.value;
    const emailValue = email.value.trim();

    if(usernameValue === ''){
        //show error
        //show error class
        setErrorFor(username, 'Name cannot be blank')
    } else{
        //add success class
        setSuccessFor(username)
    }
}

function setErrorFor(input, message){
    const formBody = input.parentElement; //.form-body
    const h6 = formBody.querySelector('h6');

    //add error message inside h6
    h6.innerText = message;

    //add error class
    formBody.className = 'form-control error'
}

function myFunction(form){
    
}