'use strict'

const btn_guardar=document.querySelector('#btn-guardar');
const pais =document.querySelector('#pais');
const estado =document.querySelector('#estado');
const ciudad =document.querySelector('#ciudad');
const direccion =document.querySelector('#direccion');
const fechanacimiento =document.querySelector('#fechanacimiento');


let validar= () =>{
    let inputs_requeridos = document.querySelectorAll('#form-registro-comprador [required]');
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

function goBack() {
    window.history.back();
}