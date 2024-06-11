/*'use strict'
const nacimientoInput = document.getElementById('nacimiento');
const aliasInput = document.getElementById('alias');
const facultadInput = document.getElementById('facultad');
const reseInput = document.getElementById('reseña');
const form = document.getElementById('form-registro-artistx');

//form.ValidityState = true;

function goBack() {
    window.history.back();
}

function validateRegex(input, regex, errorMessage) {
    //let valid = true;
    if (!regex.test(input.value)) {
        //valid = false;
        input.setCustomValidity(errorMessage);

    }
    else {

        input.setCustomValidity('');
    }
    input.reportValidity();
}

aliasInput.addEventListener('input', function () {
    validateRegex(aliasInput, /^[a-zA-Z0-9,.\sáéíóúÁÉÍÓÚñÑüÜ]{3,30}$/, 'Debes ingresar mínimo de 3 carácteres y máximo 30');
});
facultadInput.addEventListener('input', function () {
    validateRegex(facultadInput, /^[a-zA-Z0-9,.\sáéíóúÁÉÍÓÚñÑüÜ-]{3,30}$/, 'Debes ingresar mínimo de 8 carácteres y máximo 60');
});
reseInput.addEventListener('input', function () {
    validateRegex(reseInput, /^[a-zA-Z0-9,.\sáéíóúÁÉÍÓÚñÑüÜ]{5,30}$/, 'Debes ingresar mínimo de 5 carácteres y máximo 30');
});

nacimientoInput.addEventListener('input', function () {
    const birthDate = new Date(nacimientoInput.value);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age = age - 1;
    }

    if (age < 18) {
        nacimientoInput.setCustomValidity('Debes tener al menos 18 años para registrarte.');
    }
    else {
        nacimientoInput.setCustomValidity('');
    }
    nacimientoInput.reportValidity();
});

form.addEventListener('submit', function (event) {

    if (!this.checkValidity()) {
        event.preventDefault();
    }

    if (form.checkValidity()) {
        let artistx = {
            nacimiento: nacimientoInput.value,
            alias: aliasInput.value,
            facultad: facultadInput.value,
            rese: reseInput.value
        };
        console.log(artistx);
        alert("Datos guardados correctamente.");
        form.reset();
        form.classList.remove('was-validated');
    }


}, false);*/

'use strict'
const nacimientoInput = document.getElementById('nacimiento');
const aliasInput = document.getElementById('alias');
const facultadInput = document.getElementById('facultad');
const reseInput = document.getElementById('reseña');
const form = document.getElementById('form-registro-artistx');

function goBack() {
    window.history.back();
}

function validateRegex(input, regex, errorMessage) {
    if (!regex.test(input.value)) {
        input.setCustomValidity(errorMessage);

    } else {
        input.setCustomValidity('');
    }
    input.reportValidity();
}

aliasInput.addEventListener('input', function () {
    validateRegex(aliasInput, /^[a-zA-Z0-9,.\sáéíóúÁÉÍÓÚñÑüÜ]{3,30}$/, 'Debes ingresar mínimo de 3 carácteres y máximo 30');
});
facultadInput.addEventListener('input', function () {
    validateRegex(facultadInput, /^[a-zA-Z0-9,.\sáéíóúÁÉÍÓÚñÑüÜ-]{3,30}$/, 'Debes ingresar mínimo de 8 carácteres y máximo 60');
});
reseInput.addEventListener('input', function () {
    validateRegex(reseInput, /^[a-zA-Z0-9,.\sáéíóúÁÉÍÓÚñÑüÜ]{5,30}$/, 'Debes ingresar mínimo de 5 carácteres y máximo 30');
});

nacimientoInput.addEventListener('input', function () {
    const birthDate = new Date(nacimientoInput.value);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age = age - 1;
    }
    if (age < 18) { nacimientoInput.setCustomValidity('Debes tener al menos 18 años para registrarte.'); }
    else { nacimientoInput.setCustomValidity(''); }
    nacimientoInput.reportValidity();
});
/*
const inputs = document.querySelectorAll('input, textarea');

// Loop through them...
for (let input of inputs) {
    // Just before submit, the invalid event will fire, let's apply our class there.
    input.addEventListener('invalid', (event) => {
        input.classList.add('error');
    }, false);
    // Optional: Check validity onblur
       input.addEventListener('blur', (event) => {
           input.checkValidity();
       })

}
*/
form.addEventListener('submit', function (event) {
    event.preventDefault();
    event.stopPropagation();

    form.classList.add('was-validated');

    if (form.checkValidity()) {
        let artistx = {
            nacimiento: nacimientoInput.value,
            alias: aliasInput.value,
            facultad: facultadInput.value,
            rese: reseInput.value
        };
        console.log(artistx);
        alert("Datos guardados correctamente.");
        form.reset();
        form.classList.remove('was-validated');
    }
}, false);



document.addEventListener('DOMContentLoaded', function () {
    let registro = JSON.parse(localStorage.getItem('registro'));
    if (registro) {
        console.log(registro);
    }
});