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

/*
document.getElementById("form-registro-comprador").addEventListener("submit", function (event) {
    event.preventDefault();

    var numOptionPais = document.getElementById("pais");
    var selectedOption = numOptionPais.options[numOptionPais.selectedIndex].text;
    var estado = document.getElementById("estado").value.trim();
    var ciudad = document.getElementById("ciudad").value.trim();
    var domicilio = document.getElementById("domicilio").value.trim();
    var fechanacimiento = document.getElementById("fechanacimiento").value;

    var domicilioRegex = /^[a-zA-Z0-9áéíóúÁÉÍÓÚüÜñÑ#\-\. ]+$/;
    var edoCdRegex = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\-\ ]+$/;

    var paisError = '';
    var domicilioError = "";
    var edoError = "";
    var cdError = "";
    var fnacimientoError = "";

    if (selectedOption == "Opciones") {
        var paisError = "Necesitas elegir una opción";
        document.getElementById("pais").classList.add("input-error");
    }

    if (!edoCdRegex.test(estado)) {
        var edoError = "Por favor inserta un estado que no contenga números";
        document.getElementById("estado").classList.add("input-error");
    }

    if (!edoCdRegex.test(ciudad)) {
        var cdError = "Por favor inserta una ciudad que no contenga números";
        document.getElementById("ciudad").classList.add("input-error");
    }

    if (!domicilioRegex.test(domicilio) && domicilio.length < 10) {
        var domicilioError = "Asegúrate de que la dirección tenga suficientes caracteres y estos sean necesarios para una dirección";
        document.getElementById("domicilio").classList.add("input-error");
    }

    //var diaMesAño = fechanacimiento.split("-");
    if (fechanacimiento == "") {
        var fnacimientoError = "Inserta tu fecha de nacimiento";
        document.getElementById("fechanacimiento").classList.add("input-error");
    }

    document.getElementById("paisError").textContent = paisError;
    document.getElementById("edoError").textContent = edoError;
    document.getElementById("cdError").textContent = cdError;
    document.getElementById("domicilioError").textContent = domicilioError;
    document.getElementById("fnacimientoError").textContent = fnacimientoError;

    if (paisError || edoError || cdError || domicilioError || fnacimientoError) {
        return;
    } else {
        const dataComprador = {
            "pais": selectedOption,
            "estado": estado,
            "ciudad": ciudad,
            "domicilio": domicilio,
            "fecha-nacimiento": fechanacimiento,
        }
        const stringifyData = JSON.stringify(dataComprador);
        console.log(stringifyData);
    }
});
//es necesario lo de abajo porque si no, no se muestran los mensajes de error
//document.addEventListener("DOMContentLoaded", function () {
document.getElementById("form-registro-comprador").addEventListener("input", function () {
    document.getElementById("errorMessages").innerHTML = "";
    document.getElementById("pais").classList.remove("input-error");
    document.getElementById("estado").classList.remove("input-error");
    document.getElementById("ciudad").classList.remove("input-error");
    document.getElementById("domicilio").classList.remove("input-error");
    document.getElementById("fechanacimiento").classList.remove("input-error");
});
//})*/
