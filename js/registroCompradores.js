/*'use strict'

const btn_guardar = document.querySelector('#btn-guardar');
const pais = document.querySelector('#pais');
const estado = document.querySelector('#estado');
const ciudad = document.querySelector('#ciudad');
const direccion = document.querySelector('#direccion');
const fechanacimiento = document.querySelector('#fechanacimiento');


let validar = () => {
    let inputs_requeridos = document.querySelectorAll('#form-registro-comprador [required]');
    let error = false;

    for (let i = 0; i < inputs_requeridos.length; i++) {
        if (inputs_requeridos[i].value == '') {
            inputs_requeridos[i].classList.add('input-error');
            error = true;
        } else {
            inputs_requeridos[i].classList.remove('input-error');
        }
    }
    return error;
};

let obtener_datos = () => {
    let error = validar();
    if (error) {
        Swal.fire({
            'title': 'No pudimos enviar sus datos, revise las casillas',
            'icon': 'warning',
        });

    } else {
        Swal.fire({
            'title': 'Enviaste tus datos de forma exitosa',
            'icon': 'success',
        });

    }

};
btn_guardar.addEventListener('click', obtener_datos);

function goBack() {
    window.history.back();
}
*/

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
//})

document.addEventListener('DOMContentLoaded', function() {
    let registro = JSON.parse(localStorage.getItem('registro'));
    if (registro) {
        console.log(registro);
    }
});