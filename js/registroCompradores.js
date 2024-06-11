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

// Actualizar nùmero carrito
function actualizarNumeroCarrito() {
    const productosEnCarrito = localStorage.getItem("productosEnCarrito");
    const contenedorNumCarrito = document.querySelector("#numerito");
    contenedorNumCarrito.innerHTML = productosEnCarrito;
}
window.addEventListener('storage', actualizarNumeroCarrito);
actualizarNumeroCarrito();

// Guardando la tècnica para filtrar
const pageGrabado = document.getElementById('pageGrabado');
pageGrabado.addEventListener('click', function(){localStorage.setItem('Tecnica', 'Grabado')});
const pageEscultura = document.getElementById('pageEscultura');
pageEscultura.addEventListener('click', function(){localStorage.setItem('Tecnica', 'Escultura')});
const pageOleo = document.getElementById('pageOleo');
pageOleo.addEventListener('click', function(){localStorage.setItem('Tecnica', 'Óleo')});
const pageCollage = document.getElementById('pageCollage');
pageCollage.addEventListener('click', function(){localStorage.setItem('Tecnica', 'Collage')});
const pageAcuarela = document.getElementById('pageAcuarela');
pageAcuarela.addEventListener('click', function(){localStorage.setItem('Tecnica', 'Acuarela')});
const pageFotografia = document.getElementById('pageFotografia');
pageFotografia.addEventListener('click', function(){localStorage.setItem('Tecnica', 'Fotografía')});
const pageAcrilico = document.getElementById('pageAcrilico');
pageAcrilico.addEventListener('click', function(){localStorage.setItem('Tecnica', 'Acrílico')});