'use strict';
const tituloObraInput = document.getElementById('titulo-obra');
const artistaInput = document.getElementById('artista');
const tecnicaInput = document.getElementById('tecnica');
const materialesInput = document.getElementById('materiales');
const anchoInput = document.getElementById('ancho');
const alturaInput = document.getElementById('altura');
const profundidadInput = document.getElementById('profundidad');
const descripcionInput = document.getElementById('descripcion');
const precioInput = document.getElementById('precio');
const defaultImagen = "../assets/imagen-vacia.png";
const fileInput = document.getElementById('myFoto');
const img = document.getElementById('subirImagen');
const termsConditions = document.getElementById('invalidCheck');
const form = document.querySelector('#form-pro');

fileInput.addEventListener('change', e => {
    if (e.target.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            img.src = e.target.result;
        }
        reader.readAsDataURL(e.target.files[0])
    } else {
        img.src = defaultImagen;
    }
});

//document.addEventListener('DOMContentLoaded', function () {
//  'use strict';

form.addEventListener('submit', function (event) {
    event.preventDefault();
    event.stopPropagation();

    form.classList.add('was-validated');

    if (form.checkValidity()) {
        let producto = {
            'name': tituloObraInput.value,
            'artist': artistaInput.value,
            'tecnica': tecnicaInput.value,
            'materiales': materialesInput.value,
            'ancho': anchoInput.value,
            'altura': alturaInput.value,
            'profundidad': profundidadInput.value,
            'description': descripcionInput.value,
            'price': precioInput.value,
            'images': img.src,
            'termsConditions': termsConditions.checked,
        };
        console.log(producto);
        //localStorage.setItem("Producto", JSON.stringify(producto));

        form.reset();
        form.classList.remove('was-validated');
        img.src = defaultImagen;
    }
}, false);

function validateRegex(input, regex, errorMessage) {
    if (!regex.test(input.value)) {
        input.setCustomValidity(errorMessage);
    } else {
        input.setCustomValidity('');
    }
    input.reportValidity();
}

tituloObraInput.addEventListener('input', function () {
    validateRegex(tituloObraInput, /^[a-zA-Z0-9,.\sáéíóúÁÉÍÓÚñÑüÜ]{3,75}$/, 'Mínimo 3 caracteres (letras y números)');
});

artistaInput.addEventListener('input', function () {
    validateRegex(artistaInput, /^[a-zA-Z0-9,.\sáéíóúÁÉÍÓÚñÑüÜ]{3,50}$/, 'Mínimo 3 caracteres (letras y números)');
});

materialesInput.addEventListener('input', function () {
    validateRegex(materialesInput, /^[a-zA-Z0-9,.\sáéíóúÁÉÍÓÚñÑüÜ]{10,100}$/, 'Mínimo 10 caracteres (letras y números)');
});

descripcionInput.addEventListener('input', function () {
    validateRegex(descripcionInput, /^[a-zA-Z0-9,.\sáéíóúÁÉÍÓÚñÑüÜ]{10,500}$/, 'Mínimo 10 caracteres (letras y números)');
});

precioInput.addEventListener('input', function () {
    validateRegex(precioInput, /^(?!0(\.00?)?$)\d+(\.\d{2})$/, 'Mayor a cero y con dos decimales');
});

fileInput.addEventListener('change', function () {
    if (fileInput.files.length === 0 || !fileInput.files[0].type.startsWith('image/')) {
        fileInput.setCustomValidity('Invalid');
    } else {
        fileInput.setCustomValidity('');
    }
    fileInput.reportValidity();
});
//});

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