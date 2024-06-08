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
    validateRegex(tituloObraInput, /^[a-zA-Z0-9,.\sáéíóúÁÉÍÓÚñÑüÜ]{5,75}$/, 'Mínimo 5 caracteres (letras y números)');
});

artistaInput.addEventListener('input', function () {
    validateRegex(artistaInput, /^[a-zA-Z0-9,.\sáéíóúÁÉÍÓÚñÑüÜ]{3,50}$/, 'Mínimo 5 caracteres (letras y números)');
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
