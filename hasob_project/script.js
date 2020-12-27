
/*Start JQuery Form Validation*/
$(document).ready(()=>{
    $("#form").on('submit',  ()=>{
    ValidateForm();
    return false;
    });
})

function EmailValidate(){
    var numericExpression = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var elem = $("#email").val();
    if (elem.match(numericExpression))
        return true;
    else
        return false;
}

function ValidateForm(){
    var errorCounter = 0;
    let errorRadios = "*Kindly indicate gender";
    let errorCheckbox = "*Please select an option";
    let errordropDwn = "*Input required";
    let errorEmail = "*Email required"

    //Radios
    if ($('input[name= "gender"]:checked').length == 0) {
        $("#errorRadios").html(errorRadios);
        errorCounter++;

    }
    else {
        $("#errorRadios").html("");
    }
    //End

    //Dropdown
    if ($('#dropDwn').val()=== "") {
        
        $("#errordropDwn").html(errordropDwn);
        errorCounter++;
        
    }
    else {
        $("#errordropDwn").html('');
    }
    //End

    //Checkboxes
    if ($('input[type = checkbox]:checked').length == 0)
    {$("#errorCheckbox").html(errorCheckbox);
        errorCounter++;
    }
    else{
        $("#errorCheckbox").html("");
    }
    //End

    //Email
    if ($("#email").val() == '') {
        $("#errorEmail").html(errorEmail);
        errorCounter ++;
    }else if (!(EmailValidate())) {
            errorMessage += "*Invalid email address<br/>";
            errorCounter ++;
    }
    else {
        $("#errorEmail").html("")
    }
    //End  
   
    /*
    if (errorCounter == 0) {
        alert('Registration Successful!');
        return true;
    }else {
        return false;
    } */
}
/*End JQuery Form Validation*/

/*Form to JSON*/
/*
const formIsValid = (element) => {
    return element.name && element.value
  }

  const formIsChecked = element => {
    return !['checkbox', 'radio'].includes(element.type) || element.checked
  }

  const formHasCheckBox = element => element.type === "checkbox";
  
  const takeFormToJSON = elements => {
    const reducerFunction = (data, element) => {
      data[element.name] = element.value;
      return data
    }
    const reducerInitialValue = {};
    const formData = [].reduce.call(elements, reducerFunction, reducerInitialValue);
    return formData
  }

  const formToJSON = elements => [].reduce.call(elements, (data, element) => {
    if (formIsValid(element) && formIsChecked(element)) {
      if (formHasCheckBox(element)) {
        data[element.name] = (data[element.name] || []).concat(element.value)
      }
      else data[element.name] = element.value
    }
    return data;
  }, {})

  const onSubmit = document.getElementById('form');
  
  const handleFormSubmit = e => {
    e.preventDefault()
    e.stopPropagation()

    const data = formToJSON(form.elements);
    const dataDisplay = document.querySelectorAll(".prompt-display")[0];
    dataDisplay.textContent = JSON.stringify(data, form, null, " ").serializeArray;
  }
*/
/*
const handleFormSubmit = event => {
    event.preventDefault();
    const data = {};
    const dataContainer = document.getElementsByClassName('prompt_display')[0];
    dataContainer.textContent = JSON.stringify(data, null, "  ");
};

const form = document.getElementsByClassName('form')[0];
form.addEventListener('submit', handleFormSubmit);

const formToJSON = elements => [].reduce.call(elements, (data, element) => {
    data[element.name] = element.value;
    return data;
  }, {});

const handleFormSubmit = event => {
    event.preventDefault();
    const data = formToJSON(form.elements);
    const dataContainer = document.getElementsByClassName('prompt_display')[0];
    dataContainer.textContent = JSON.stringify(data, null, "  ");
  const form = document.getElementsByClassName('form')[0];
  form.addEventListener('submit', handleFormSubmit);

  const formToJSON = elements => [].reduce.call(elements, (data, element) => {
    data[element.name] = element.value;
    return data;
  }, {});

const handleFormSubmit = event => {
    event.preventDefault();
    const data = formToJSON(form.elements);
    const dataContainer = document.getElementsByClassName('prompt_display')[0];
    dataContainer.textContent = JSON.stringify(data, null, "  ");
};

const form = document.getElementsByClassName('form')[0];
form.addEventListener('submit', handleFormSubmit);*/

let data = [];

const formData = (ev) => {
    ev.preventDefault();
    let allData = {
        form: document.getElementById('form').value
    }
    data.push(allData);
    document.forms[0].reset();

    console.warn('submit', {data});
    let div = document.querySelector('#prompt');
    div.textContent = '\n' + JSON.stringify(data, '\t');
}

document.getElementById('submitBtn').addEventListener('submit', formData)