'use strict'
const nacimiento=document.querySelector('#nacimiento');
const alias=document.querySelector('#alias');
const facultad=document.querySelector('#facultad');
const añoescolar=document.querySelector('#añoescolar');
const tecnicas=document.querySelector('#tecnicas');
const reseña=document.querySelector('#reseña');



document.getElementById("btn-guardar").addEventListener("click", function() {
    if (document.getElementById("form-registro-artistx").checkValidity()) {
        alert("Formulario válido. Datos guardados correctamente.");
    } else {
        alert("Por favor, completa todos los campos correctamente.");
    }
});

function goBack() {
    window.history.back();
}