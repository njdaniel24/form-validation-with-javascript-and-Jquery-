function checkInputs(){
const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const Email = document.getElementById('Email');

    var firstname = document.myform.firstName.value;
    var lastname = document.myform.lastName.value;
    var email = document.myform.Email.value;
    


    if(firstname ===""||firstname ==="null")
    {
     alert("firstname is not filled");
    return false;

    }else if(firstname.length<2){
        alert("firstname must have more than 3 letters");
    return false;
    }
    if(lastname === ""||lastname ==="null")
    {
        alert("lastname is not filled");
        return false;
    }else if(lastname.length<2){
        alert("lastname must have more than 3 letters");
    return false;
    }
    if(email ==""|| email=="null") {
        alert("email is not enterd")
        return false;
    }        
    }
