const email = document.getElementById("mail");
email.addEventListener("input", function (event) {
    if (email.validity.typeMismatch) {
     email.setCustomValidity( "¡Se esperaba una dirección de correo electrónico, no una obra de arte!" );
    } else {
        email.setCustomValidity("");
    }
});

const text = document.getElementById("name");
text.addEventListener("input",function(event){
    if (text.validity.typeMismatch) {
        text.setCustomValidity("Normalmente los nombres tienen letras no números");
    } else{
        text.setCustomValidity("");
    }
});

const msm = document.getElementById("msm");
msm.addEventListener("input", function (event) {
   if (msm.validity.typeMismatch) {
     msm.setCustomValidity("¿No nos quiere escribir?" );
    } else { 
        msm.setCustomValidity("Nos alegra que nosescribas");
    }
});

const number = document.getElementById("number");
number.addEventListener("input", function (event) {
  if (number.validity.typeMismatch) {
     number.setCustomValidity("Recuerda escribir tú número a 10 dígitos");
    } else {
     number.setCustomValidity("");
    }
});