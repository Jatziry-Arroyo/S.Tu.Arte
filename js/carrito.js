let productosEnCarrito = localStorage.getItem("productos-en-carrito");

const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");
const botonVaciar = document.querySelector("#carrito-acciones-vaciar");
const contenedorTotal = document.querySelector("#total");

let productos = [];

fetch("../package/products.json")

    .then(response => {
        if (!response.ok) {
            throw new Error("Error al cargar el archivo JSON");
        }
        return response.json();
    })
    .then(data => {
        productos = data;
        cargarProductosCarrito(productos);
    })
    .catch(error => console.error("Error en la solicitud fetch:", error));

function cargarProductosCarrito() {

    //if (productosEnCarrito != null) {
    //console.log("HOLA");
    contenedorCarritoVacio.classList.add("disabled");
    contenedorCarritoProductos.classList.remove("disabled");
    contenedorCarritoAcciones.classList.remove("disabled");
    contenedorCarritoComprado.classList.add("disabled");
    contenedorCarritoProductos.innerHTML = "";
    let productoId = localStorage.getItem("Producto");
    console.log(productoId);
    let productoEncontrado = productos.find(producto => producto.id === parseInt(productoId));
    //console.log(productoEncontrado);
    if (productoEncontrado) {
        console.log("Producto encontrado:", productoEncontrado);
    } else {
        console.log("Producto no encontrado");
        actualizarNumeroCarrito();
        contenedorCarritoVacio.classList.remove("disabled");
        contenedorCarritoProductos.classList.add("disabled");
        contenedorCarritoAcciones.classList.add("disabled");
        contenedorCarritoComprado.classList.add("disabled");
    }


    const div = document.createElement("div");
    div.classList.add("carrito-producto");
    div.innerHTML = `
                <img class="carrito-producto-imagen" src="${productoEncontrado.images}" alt="${productoEncontrado.description}">
                <div class="carrito-producto-titulo">
                    <small>Título</small>
                    <h3>${productoEncontrado.name}</h3>
                </div>
                <div class="carrito-producto-precio">
                    <small>Precio</small>
                    <p>$${productoEncontrado.price}</p>
                </div>
                <div class="carrito-producto-subtotal">
                    <small>Envío</small>
                    <p>$${productoEncontrado.precio}</p>
                </div>
                
            `;

    contenedorCarritoProductos.append(div);

    actualizarTotal(productoEncontrado.price);

}


botonVaciar.addEventListener("click", vaciarCarrito);
function vaciarCarrito() {
    let productoId = localStorage.getItem("Producto");
    console.log(productoId);
    let productoEncontrado = productos.find(producto => producto.id === parseInt(productoId));
    Swal.fire({
        icon: 'question',
        html: `Se va a borrar ${productoEncontrado.name}.`,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: 'Sí',
        cancelButtonText: 'No',

    }).then((result) => {
        if (result.isConfirmed) {
            localStorage.removeItem('Producto');
            localStorage.setItem('productosEnCarrito', 0);
            cargarProductosCarrito();
        }
    })

    actualizarNumeroCarrito();

}


function actualizarTotal(price) {
    console.log(price);
    const numericPrice = parseFloat(price.replace(/[^0-9.-]+/g, ""));
    const totalCalculado = numericPrice + 100;
    //const totalCalculado = productosEnCarrito.reduce((acc, producto) => acc + (producto.price * producto.cantidad), 0);
    total.innerText = `$${totalCalculado}`;
}

function actualizarNumeroCarrito() {
    const productosEnCarrito = localStorage.getItem("productosEnCarrito");
    const contenedorNumCarrito = document.querySelector("#numerito");
    contenedorNumCarrito.innerHTML = productosEnCarrito;
}
window.addEventListener('storage', actualizarNumeroCarrito);
window.addEventListener('storage', cargarProductosCarrito);

actualizarNumeroCarrito();

// ***********************Formulario********************************

'use strict';

const form = document.getElementById('form-compradores');
const nombreInput = document.getElementById('nombre');
const correoInput = document.getElementById('correo');
const telefonoInput = document.getElementById('telefono');
const direccionInput = document.getElementById('direccion');
const noExteriorInput = document.getElementById('noExterior');
const noInteriorInput = document.getElementById('noInterior');
const codigoPostalInput = document.getElementById('codigoPostal');
const coloniaInput = document.getElementById('colonia');
const estadoSelect = document.getElementById('estado');

function validateRegex(input, regex, errorMessage) {
    if (!regex.test(input.value)) {
        input.setCustomValidity(errorMessage);
        input.classList.add('is-invalid');
    } else {
        input.setCustomValidity('');
        input.classList.remove('is-invalid');
    }
    input.reportValidity();
}

const regexNombre = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
const regexCorreo = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const regexTelefono = /^\d{10}$/;

nombreInput.addEventListener('input', function () {
    validateRegex(nombreInput, regexNombre, 'Debes ingresar un nombre válido (letras y acentos).');
});

correoInput.addEventListener('input', function () {
    validateRegex(correoInput, regexCorreo, 'Debes ingresar un correo electrónico válido.');
});

telefonoInput.addEventListener('input', function () {
    validateRegex(telefonoInput, regexTelefono, 'Debes ingresar un número de teléfono válido (10 dígitos).');
});

noExteriorInput.addEventListener('input', function () {
    if (noExteriorInput.value.trim() === '') {
        noExteriorInput.setCustomValidity('Debes ingresar un número exterior.');
        noExteriorInput.classList.add('is-invalid');
    } else {
        noExteriorInput.setCustomValidity('');
        noExteriorInput.classList.remove('is-invalid');
    }
    noExteriorInput.reportValidity();
});

noInteriorInput.addEventListener('input', function () {
    if (noInteriorInput.value.trim() === '') {
        noInteriorInput.setCustomValidity('Debes ingresar un número interior o poner NA en caso de no aplicar.');
        noInteriorInput.classList.add('is-invalid');
    } else {
        noInteriorInput.setCustomValidity('');
        noInteriorInput.classList.remove('is-invalid');
    }
    noInteriorInput.reportValidity();
});

codigoPostalInput.addEventListener('input', function () {
    if (codigoPostalInput.value.trim().length < 5 || codigoPostalInput.value.trim().length > 7) {
        codigoPostalInput.setCustomValidity('Debes ingresar un código postal válido.');
        codigoPostalInput.classList.add('is-invalid');
    } else {
        codigoPostalInput.setCustomValidity('');
        codigoPostalInput.classList.remove('is-invalid');
    }
    codigoPostalInput.reportValidity();
});

direccionInput.addEventListener('input', function () {
    if (direccionInput.value.trim() === '') {
        direccionInput.setCustomValidity('Debes ingresar una calle.');
        direccionInput.classList.add('is-invalid');
    } else {
        direccionInput.setCustomValidity('');
        direccionInput.classList.remove('is-invalid');
    }
    direccionInput.reportValidity();
});

coloniaInput.addEventListener('input', function () {
    if (coloniaInput.value.trim() === '') {
        coloniaInput.setCustomValidity('Debes ingresar una colonia.');
        coloniaInput.classList.add('is-invalid');
    } else {
        coloniaInput.setCustomValidity('');
        coloniaInput.classList.remove('is-invalid');
    }
    coloniaInput.reportValidity();
});

form.addEventListener('submit', function (event) {
    event.preventDefault();
    event.stopPropagation();

    form.classList.add('was-validated');

    const inputs = form.querySelectorAll('input, select');
    inputs.forEach(input => {
        if (!input.checkValidity()) {
            input.classList.add('is-invalid');
        } else {
            input.classList.remove('is-invalid');
        }
    });

    if (form.checkValidity()) {
        let registro = {
            nombre: nombreInput.value,
            correo: correoInput.value,
            telefono: telefonoInput.value,
            direccion: direccionInput.value,
            noExterior: noExteriorInput.value,
            noInterior: noInteriorInput.value,
            codigoPostal: codigoPostalInput.value,
            colonia: coloniaInput.value,
            estado: estadoSelect.value,
        };

        localStorage.setItem('registro', JSON.stringify(registro));
        console.log(registro);
        alert("Datos guardados correctamente.");

        form.classList.remove('was-validated');
        form.reset();

        window.location.href = "metodo.html";
    }
}, false);

document.addEventListener('DOMContentLoaded', function () {
    let registro = JSON.parse(localStorage.getItem('registro'));
    if (registro) {
        console.log(registro);
    }
});

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