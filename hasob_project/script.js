
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
   
    if (errorCounter == 0) {
        alert('Registration Successful!');
        return true;
    }else {
        return false;
    }
}
    

