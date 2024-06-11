'use strict';

const btn_guardar = document.getElementById('btn-guardar');
const nombre = document.getElementById('nombre');
const apaterno = document.getElementById('apaterno');
const amaterno = document.getElementById('amaterno');
const comprador = document.getElementById('comprador');
const artistx = document.getElementById('artistx');
const correo = document.getElementById('correo');
const telefono = document.getElementById('telefono');
const contraseña = document.getElementById('contraseña');
const reincontraseña = document.getElementById('reincontraseña');
const acepto = document.getElementById('acepto');
const form = document.getElementById('form-compradores');

function validateRegex(input, regex, errorMessage) {
    if (!regex.test(input.value)) {
        input.setCustomValidity(errorMessage);
    } else {
        input.setCustomValidity('');
    }
    input.reportValidity();
}

const regexNombre = /^[a-zA-Z\sáéíóúÁÉÍÓÚñÑüÜ]{3,30}$/;
const regexCorreo = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const regexTelefono = /^\d{10}$/;
const regexContraseña = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;

nombre.addEventListener('input', function () {
    validateRegex(nombre, regexNombre, 'Debes ingresar un nombre válido (mínimo 3 caracteres y máximo 30)');
});
apaterno.addEventListener('input', function () {
    validateRegex(apaterno, regexNombre, 'Debes ingresar un apellido válido (mínimo 3 caracteres y máximo 30)');
});
amaterno.addEventListener('input', function () {
    validateRegex(amaterno, regexNombre, 'Debes ingresar un apellido válido (mínimo 3 caracteres y máximo 30)');
});
correo.addEventListener('input', function () {
    validateRegex(correo, regexCorreo, 'Debes ingresar un correo electrónico válido');
});
contraseña.addEventListener('input', function () {
    validateRegex(contraseña, regexContraseña, 'La contraseña debe tener al menos 8 caracteres, una letra minúscula, una letra mayúscula, un número y un caracter especial');
});
telefono.addEventListener('input', function () {
    validateRegex(telefono, regexTelefono, 'Debes ingresar un número de teléfono válido (10 dígitos)');
});

reincontraseña.addEventListener('input', validarContraseña);

function validarContraseña() {
    let mensaje = '';
    if (contraseña.value !== reincontraseña.value) {
        mensaje = 'Las contraseñas no coinciden';
    }
    reincontraseña.setCustomValidity(mensaje);
    reincontraseña.reportValidity();
}


form.addEventListener('submit', function (event) {
    event.preventDefault();
    event.stopPropagation();

    form.classList.add('was-validated');
    const statusElement = document.querySelector('input[name="status"]:checked');

    if (form.checkValidity()) {
        let registro = {
            'nombre': nombre.value,
            'apaterno': apaterno.value,
            'amaterno': amaterno.value,
            'comprador/artista': statusElement.value,
            'correo': correo.value,
            'telefono': telefono.value,
            'password': contraseña.value
        };
        localStorage.setItem('registro', JSON.stringify(registro));
        console.log(registro);
        alert("Datos guardados correctamente.");
        
        form.classList.remove('was-validated');
        if (statusElement) {
            var status = statusElement.value;

            if (status === "1") {
                window.location.href = "registroCompradores.html";
            } else if (status === "2") {
                window.location.href = "registroartistas.html";
            } else {
                console.error("Estado desconocido: " + status);
            }
        } else {
            console.error("No se ha seleccionado ningún estado");
        }
    }
}, false);

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