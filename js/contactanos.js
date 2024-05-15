const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    if (!form.checkValidity()) {
        e.preventDefault();
    }
    form.classList.add("was-validated");
    console.log("submit");
},
    false
);

/*
const email = document.getElementById("validationCustom04");
form.addEventListener("submit", e => {
    e.preventDefault()
    let warning = "";
    let entrar = false;
    let regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-])*$/;
    // console.log(regexEmail.test(email.value))
    if (!regexEmail.test(email.value)) {
        warning += "El email no es valido <br>"
        entrar = true
    }
    if (entrar) {
        parrafo.innerHTML = warning
        parrafo.style.color = "red"
    }

})
*/

// Example starter JavaScript for disabling form submissions if there are invalid fields
/*(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()*/


/*const email = document.getElementById("mail");
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
*/