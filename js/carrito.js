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
    localStorage.removeItem('productosEnCarrito');
    cargarProductosCarrito();
        }
    })
    
    actualizarNumeroCarrito();
    
}


function actualizarTotal(price) {
    console.log(price);
    const numericPrice = parseFloat(price.replace(/[^0-9.-]+/g, ""));
    const totalCalculado = numericPrice+100;
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
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form-compradores');
    const correo = document.getElementById('correo');
    const direccion = document.getElementById('direccion');
    const noExterior = document.getElementById('noExterior');
    const codigoPostal = document.getElementById('codigoPostal');
    const telefono = document.getElementById('telefono');
    const estado = document.getElementById('estado');
    const name = document.getElementById('name');
    const colonia = document.getElementById('colonia');
    
    const correoError = document.getElementById('correoError');
    const direccionError = document.getElementById('direccionError');
    const noExteriorError = document.getElementById('noExteriorError');
    const codigoPostalError = document.getElementById('codigoPostalError');
    const telefonoError = document.getElementById('telefonoError');
    const estadoError = document.getElementById('estadoError');
    const nameError = document.getElementById('nameError');
    const coloniaError = document.getElementById('coloniaError');

    form.addEventListener('submit', function (event) {
        let valid = true;

        
        // Validación de correo electrónico
        if (!correo.checkValidity()) {
            valid = false;
            correoError.textContent = 'Por favor, ingrese un correo electrónico válido.';
            correo.classList.add('input-error');
        } else {
            correoError.textContent = '';
            correo.classList.remove('input-error');
        }

          // Validación de nombre
          if (name.value.trim() === '') {
            valid = false;
            nameError.textContent = 'Por favor, ingrese su nombre.';
            name.classList.add('input-error');
        } else {
            nameError.textContent = '';
            name.classList.remove('input-error');
        }

        // Validación de dirección
        if (direccion.value.trim() === '') {
            valid = false;
            direccionError.textContent = 'Por favor, ingrese su dirección.';
            direccion.classList.add('input-error');
        } else {
            direccionError.textContent = '';
            direccion.classList.remove('input-error');
        }

        // Validación de noExterior
        if (noExterior.value.trim() === '') {
            valid = false;
            noExteriorError.textContent = 'Por favor, ingrese el número exterior.';
            noExterior.classList.add('input-error');
        } else {
            noExteriorError.textContent = '';
            noExterior.classList.remove('input-error');
        }

        // Validación de código postal
        if (codigoPostal.value.length < 5 || codigoPostal.value.length > 7) {
            valid = false;
            codigoPostalError.textContent = 'El código postal debe tener mínimo 5 caracteres.';
            codigoPostal.classList.add('input-error');
        } else {
            codigoPostalError.textContent = '';
            codigoPostal.classList.remove('input-error');
        }

        // Validación de colonia
        if (colonia.value.trim() === '') {
            valid = false;
            coloniaError.textContent = 'Por favor, ingrese su colonia.';
            colonia.classList.add('input-error');
        } else {
            coloniaError.textContent = '';
            colonia.classList.remove('input-error');
        }

        // Validación de estado
        if (estado.value === '') {
            valid = false;
            estadoError.textContent = 'Por favor, seleccione un estado.';
            estado.classList.add('input-error');
        } else {
            estadoError.textContent = '';
            estado.classList.remove('input-error');
        }

        // Validación de teléfono
        if (telefono.value.length !== 10) {
            valid = false;
            telefonoError.textContent = 'El número de teléfono debe tener exactamente 10 dígitos.';
            telefono.classList.add('input-error');
        } else {
            telefonoError.textContent = '';
            telefono.classList.remove('input-error');
        }

        if (!valid) {
            event.preventDefault();
        // } else {
        //     window.location= '../pages/metodo.html';

        }
//         if (!form.checkValidity()) {
//             event.preventDefault();
//         } else {
//             window.location.href = 'https://www.youtube.com/';
//             }

    });
});

