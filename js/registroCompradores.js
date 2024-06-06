'use strict';
const form = document.querySelector("#form-registro-comprador");

const state = document.getElementById('estado');
const city = document.getElementById('ciudad');
const address = document.getElementById('domicilio');
const birthday = document.getElementById('fechanacimiento');

form.addEventListener("submit", function (event) {
    event.preventDefault();
    event.stopPropagation();

    form.classList.add("was-validated");

    if (form.checkValidity()) {
        let registroComprador = {
            "estado": state.value.trim(),
            "ciudad": city.value.trim(),
            "direccion": address.value.trim(),
            "fecha-nacimiento": birthday.value,

        }
        console.log(registroComprador);

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

state.addEventListener("input", function () {
    validateRegex(state, /^[a-zA-Z,.\sáéíóúÁÉÍÓÚñÑüÜ]{3,50}$/, "Solo ingresa letras");
});
city.addEventListener("input", function () {
    validateRegex(city, /^[a-zA-Z,.\sáéíóúÁÉÍÓÚñÑüÜ]{3,50}$/, "Solo ingresa letras");
});
address.addEventListener("input", function () {
    validateRegex(address, /^[a-zA-Z0-9,.\sáéíóúÁÉÍÓÚñÑüÜ#]{15,400}$/, "Ingresa calle, número, colonia y C.P. en ese orden");
});

birthday.addEventListener("input", function () {
    if (birthday.value == "") {
        birthday.setCustomValidity("Hay un error");
    } else {
        birthday.setCustomValidity("");
    }
    birthday.reportValidity();
});

function goBack() {
    window.history.back();
}
