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
    validateRegex(facultadInput, /^[a-zA-Z0-9,.\sáéíóúÁÉÍÓÚñÑüÜ-]{3,30}$/, 'Debes ingresar mínimo de 10 carácteres y máximo 60');
});
reseInput.addEventListener('input', function () {
    validateRegex(reseInput, /^[a-zA-Z0-9,.\sáéíóúÁÉÍÓÚñÑüÜ]{5,30}$/, 'Debes ingresar mínimo de 5 carácteres y máximo 70');
});


/*document.getElementById("btn-guardar").addEventListener("click", function() {
    if (document.getElementById("form-registro-artistx").checkValidity()) {
        alert("Formulario válido. Datos guardados correctamente.");
    } else {
        alert("Por favor, completa todos los campos correctamente.");
    }
});
*/

nacimientoInput.addEventListener('input', function () {
    const birthDate = new Date(nacimientoInput.value);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) { age--; }
    if (age < 18) { nacimientoInput.setCustomValidity('Debes tener al menos 18 años para registrarte.'); }
    else { nacimientoInput.setCustomValidity(''); }
    nacimientoInput.reportValidity();
});

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
        alert("Formulario válido. Datos guardados correctamente.");
        form.reset();
        form.classList.remove('was-validated');
    }
}, false);
