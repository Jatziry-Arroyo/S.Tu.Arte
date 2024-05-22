'use strict';
//Asegurarnos que estamos validando el formulario al dar click
//en siguiente
const btn_guardar=document.querySelector('#btn-guardar');
const nombre =document.querySelector('#nombre');
const apaterno =document.querySelector('#apaterno');
const amaterno =document.querySelector('#amaterno');
const comprador =document.querySelector('#comprador');
const artistx =document.querySelector('#artistx');
const correo =document.querySelector('#correo');
const telefono =document.querySelector('#telefono');
const contraseña =document.querySelector('#contraseña');
const reincontraseña =document.querySelector('#reincontraseña');
const acepto =document.querySelector('#acepto');

let validar= () =>{
    let inputs_requeridos = document.querySelectorAll('#form-registro [required]');
    let error= false;

    for(let i=0; i<inputs_requeridos.length;i++){
        if(inputs_requeridos[i].value ==''){
            inputs_requeridos[i].classList.add('input-error');
            error = true;
        } else{
            inputs_requeridos[i].classList.remove('input-error');
        }
    }
    return error;
};

let obtener_datos=()=>{
    let error= validar ();
    if (error){
        Swal.fire({
            'title': 'No pudimos enviar sus datos, revise las casillas',
            'icon': 'warning',
        });

    }else{
        Swal.fire({
            'title': 'Enviaste tus datos de forma exitosa',
            'icon': 'success',
        });
        
    }

};
btn_guardar.addEventListener('click', obtener_datos);

//Esto es lo que hace que al escoger cierto radius se muestre determinando formulario

document.getElementById("btn-guardar").addEventListener("click", function() {
    var status = document.querySelector('input[name="status"]:checked').value;

    if (status === "1") {
        window.location.href = "registroComprador.html";
    } else if (status === "2") {
        window.location.href = "registroartistx.html";
    }
});

//Hacer que la contraseña y la confirmación de la contraseña coincidan 

function validarContraseña() {
    var contraseña = document.getElementById("contraseña").value;
    var reincontraseña = document.getElementById("reincontraseña").value;

    if (contraseña.length < 8) {
        document.getElementById("error-contraseña").innerText = "La contraseña debe tener al menos 8 caracteres";
        return false;
    }

    if (contraseña !== reincontraseña) {
        document.getElementById("error-contraseña").innerText = "Las contraseñas no coinciden";
        return false;
    }

    return true;
}


