"use strict";
const form = document.querySelector("#contactanos-form");

var Name = document.getElementById('full-name');
var telephone = document.getElementById('cellphone');
var numberOption = document.getElementById('options');
var selectedOption = numberOption.options[numberOption.selectedIndex].text;
var email = document.getElementById('user-email');
var message = document.getElementById('message');


form.addEventListener("submit", function (event) {
    event.preventDefault();
    event.stopPropagation();

    form.classList.add("was-validated");

    if (form.checkValidity()) {
        let contactoUsuario = {
            "personName": Name.value.trim(),
            "phone": telephone.value.trim(),
            "visitorType": numberOption.options[numberOption.selectedIndex].text,
            "email": email.value.trim(),
            "message": message.value.trim(),
        }
        console.log(contactoUsuario);

        form.reset();
        form.classList.remove("was-validated");
    }
}, false);

function validateRegex(input, regex, errorMessage) {
    if (!regex.test(input.value)) {
        input.setCustomValidity(errorMessage);
    } else {
        input.setCustomValidity("");
    }
    input.reportValidity();
}

Name.addEventListener("input", function () {
    validateRegex(Name, /^[a-zA-Z,.\sáéíóúÁÉÍÓÚñÑüÜ]{3,50}$/, "Solo ingresa letras");
})
telephone.addEventListener("input", function () {
    validateRegex(telephone, /^[0-9]{10}$/, "Por favor sólo ingresa números y que sean 10");
})
numberOption.addEventListener("select", function () {
    if (selectedOption == "Opciones") {
        input.setCustomValidity("hay error");
    } else {
        input.setCustomValidity("");
    }
    input.reportValidity();
})
email.addEventListener("input", function () {
    validateRegex(email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Recuerda escribir el dominio de tu correo electrónico ej: @mail.com");
})
message.addEventListener("input", function () {
    validateRegex(message, /^[a-zA-Z0-9,.\sáéíóúÁÉÍÓÚñÑüÜ]{15,400}$/, "");
});
