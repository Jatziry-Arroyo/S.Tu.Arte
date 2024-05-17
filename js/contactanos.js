document.getElementById('contactanos-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission


    var name = document.getElementById('name').value.trim();
    var telephone = document.getElementById('phone').value.trim();
    //var selectedOption = document.getElementById('options').value;
    var numberOption = document.getElementById('options');
    var selectedOption = numberOption.options[numberOption.selectedIndex].text; //devuelve no el no. de opcion sino el texto de esa opcion
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();

    // Regular expressions for validation
    var nameRegex = /^[a-zA-Z\s]+$/;
    var telephoneRegex = /^[0-9]{10}$/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Initial error messages
    var nameError = '';
    var phoneError = '';
    var optionsError = '';
    var emailError = '';
    var messageError = '';

    // Validaciones
    if (!nameRegex.test(name)) {
        nameError = "Los nombres no llevan números, ¿o sí?";
        document.getElementById("name").classList.add("input-error");
    }

    if (!telephoneRegex.test(telephone)) {
        phoneError = "Por favor sólo ingresa números y que sean 10";
        document.getElementById("phone").classList.add("input-error");
    }

    if (selectedOption === "Opciones") {
        optionsError = "Por favor selecciona una opción";
        document.getElementById("options").classList.add("input-error");
    }

    if (!emailRegex.test(email)) {
        emailError = "Se esperaba un email, no una obra de arte";
        document.getElementById("email").classList.add("input-error");
    }
    if (message.length < 15) {
        messageError = "Tu mensaje no nos dice mucho, escribe más por favor";
        document.getElementById("message").classList.add("input-error");
    }

    // Display error messages
    document.getElementById('nameError').textContent = nameError;
    document.getElementById('phoneError').textContent = phoneError;
    document.getElementById('optionsError').textContent = optionsError;
    document.getElementById('emailError').textContent = emailError;
    document.getElementById('messageError').textContent = messageError;

    if (nameError || phoneError || optionsError || emailError || messageError) {
        return; // sale de la función si hay errores
    } else {
        const data = {
            "personName": name,
            "phone": telephone,
            "visitorType": selectedOption,
            "email": email,
            "message": message,
        }
        const stringifyData = JSON.stringify(data);
        console.log(stringifyData);
        //document.getElementById('contactanos-form').submit(); //si esto se pone hace submit sin guardar el json
    }
});
// Clear error messages and input error styles on input change
document.getElementById('contactanos-form').addEventListener('input', function () {
    document.getElementById('errorMessages').innerHTML = '';
    document.getElementById('name').classList.remove('input-error');
    document.getElementById('phone').classList.remove('input-error');
    document.getElementById('options').classList.remove('input-error');
    document.getElementById('email').classList.remove('input-error');
    document.getElementById('message').classList.remove('input-error');
});


/*const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    if (!form.checkValidity()) {
        e.preventDefault();
    }
    form.classList.add("was-validated");
    console.log("submit");
},
    false
);
*/

//Vaciado de info a un JSON
/*
document.getElementById('contactanos-form').addEventListener("submit", function () {

    var name = document.getElementById('name').value.trim();
    var telephone = document.getElementById('phone').value.trim();
    var numberOption = document.getElementById('options');
    var selectedOption = numberOption.options[numberOption.selectedIndex].text;
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();

    const data = {
        "personName": name,
        "phone": telephone,
        "visitorType": selectedOption, //devuelve el numero de opcion no el valor
        "email": email,
        "message": message,
    }

    const stringifyData = JSON.stringify(data);
    console.log(stringifyData);
}) */
//console.log("hola");


/*
function handleFormSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.target);

    const formJSON = Object.fromEntries(data.entries());

    // for multi-selects, we need special handling
    formJSON.options = data.getAll('options');

    const results = document.querySelector('.results pre');
    results.innerText = JSON.stringify(formJSON, null, 2);
  }

  const form = document.getElementById('contactanos-form');
  form.addEventListener('submit', handleFormSubmit);
*/
/*
    // Error messages
    var errors = [];
    if (!nameRegex.test(name)) {
        errors.push("Name is invalid.");
        document.getElementById("name").classList.add("input-error");
    } else {
        document.getElementById("name").classList.remove("input-error");
    }
    if (!telephoneRegex.test(telephone)) {
        errors.push("Telephone is invalid.");
        document.getElementById("phone").classList.add("input-error");
    } else {
        document.getElementById("phone").classList.remove("input-error");
    }
    if (selectedOption === "") {
        errors.push("Por favor selecciona una opción");
        document.getElementById("options").classList.add("input-error");
    } else {
        document.getElementById("options").classList.remove("input-remove");
    }
    if (!emailRegex.test(email)) {
        errors.push("Email is invalid.");
        document.getElementById("email").classList.add("input-error");
    } else {
        document.getElementById("email").classList.remove("input-error");
    }
    if (message.length < 15) {
        errors.push("Message should be at least 15 characters long.");
        document.getElementById("message").classList.add("input-error");
    } else {
        document.getElementById("message").classList.remove("input-error");
    }


    // Display error messages
    var errorMessagesDiv = document.getElementById('errorMessages');
    if (errors.length > 0) {
        errorMessagesDiv.innerHTML = '<div class="error">' + errors.join('<br>') + '</div>';
    } else {
        errorMessagesDiv.innerHTML = ''; // Clear error messages
        document.getElementById('contactanos-form').submit();
    }
});

// Clear error messages and input error styles on input change
document.getElementById('contactanos-form').addEventListener('input', function () {
    document.getElementById('errorMessages').innerHTML = '';
    document.getElementById('name').classList.remove('input-error');
    document.getElementById('phone').classList.remove('input-error');
    document.getElementById('options').classList.remove('input-error');
    document.getElementById('email').classList.remove('input-error');
    document.getElementById('message').classList.remove('input-error');
});
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