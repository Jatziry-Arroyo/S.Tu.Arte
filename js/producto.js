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
            console.log(e.target);
        }
        reader.readAsDataURL(e.target.files[0]);
        let fileName = e.target.files[0].name;
        console.log('Nombre original de la imagen:',fileName);
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
            title: tituloObraInput.value,
            technique: tecnicaInput.value,
            materials: materialesInput.value,
            width: parseInt(anchoInput.value),
            height: parseInt(alturaInput.value),
            depth: parseInt(profundidadInput.value),
            description_product: descripcionInput.value,
            price: parseFloat(precioInput.value),
            terms_conditions: termsConditions.checked,
            url: fileInput.files[0].name,
            //artist:{idartist: parseInt(artistaInput.value)}
            artist_idartist: parseInt(artistaInput.value)
        };
        fetch('https://miprimerstuart-1.onrender.com/api/product/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(producto)
        })
        .then(response => response.json())
        .then(data => {
            console.log(JSON.stringify(data, null, 2));
        })
        .catch(error => {
            console.error('Error posting product:', error);
            //postProductResult.textContent = 'Error posting product';
        });
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
    validateRegex(artistaInput, /^[a-zA-Z0-9,.\sáéíóúÁÉÍÓÚñÑüÜ]{1,50}$/, 'Mínimo 1 caracteres (letras y números)');
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