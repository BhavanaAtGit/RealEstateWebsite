function validateSignUp() {

    var usernameField = document.forms["form"]["username"];
    var usernamePrompt = document.getElementById("usernameError");
    if (usernameField.value.length < 4) {
      usernamePrompt.style.display = "block";
      usernameField.setCustomValidity("Invalid field.");
    }
    else{
      usernamePrompt.style.display = "none";  
      usernameField.setCustomValidity("");
    }
    
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; 
    var mailField = document.forms["form"]["email"];
    var mailPrompt = document.getElementById("mailError");
    if ( !(mailField.value.match(validRegex)) ) {
      mailPrompt.style.display = "block";
      mailField.setCustomValidity("Invalid field.");
    }
    else{
      mailPrompt.style.display = "none";  
      mailField.setCustomValidity("");
    }

    var pwField = document.forms["form"]["password"];
    var pwPrompt = document.getElementById("passwordError");
    if (pwField.value.length < 8){
      pwPrompt.style.display = "block";
      pwField.setCustomValidity("Invalid field.");
    }
    else{
      pwPrompt.style.display = "none";  
      pwField.setCustomValidity("");
    }
    
    var cpwField = document.forms["form"]["cpassword"];
    var cpwPrompt = document.getElementById("confirmationError");
    if ( !(cpwField.value === pwField.value) ){
      cpwPrompt.style.display = "block";
      cpwField.setCustomValidity("Invalid field.");
    }
    else{
      cpwPrompt.style.display = "none";  
      cpwField.setCustomValidity("");
    }
}
  
function validateLogin(){

    var usernameField = document.forms["form"]["username"];
    var pwField = document.forms["form"]["password"];
    var prompt = document.getElementById("error");
    if (usernameField.value.length < 4 || pwField.value.length < 8) {
      prompt.style.display = "block";
      usernameField.setCustomValidity("Invalid field.");
      pwField.setCustomValidity("Invalid field.");
    }
    else{
      prompt.style.display = "none";  
      usernameField.setCustomValidity("");
      pwField.setCustomValidity("");
    }
}
