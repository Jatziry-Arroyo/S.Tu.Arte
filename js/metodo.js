
document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("paymentForm");

    form.addEventListener("submit", function (event) {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();

            if (!cardNameInput.checkValidity()) {
                cardNameInput.classList.add("invalid");
            }

            if (!cardNumberInput.checkValidity()) {
                cardNumberInput.classList.add("invalid");
            }
            if (!expirationDateInput.checkValidity()) {
                expirationDateInput.classList.add("invalid");
            }
            if (!cvvInput.checkValidity()) {
                cvvInput.classList.add("invalid");
            }
        }

        form.classList.add("was-validated");
    }, false);

    var cardNameInput = document.getElementById("NameCard");
    cardNameInput.addEventListener("input", function (event) {
        var inputValue = event.target.value;

        inputValue = inputValue.replace(/\s/g, "");
        /*
        inputValue = inputValue.replace(/[^A-Za-z\u00C0-\u017F\s]/g, "");
        inputValue = inputValue.replace(/(\p{L}+)(?=\s*\p{L})/gu, "$1 ");
        event.target.value = inputValue;*/

        cardNameInput.classList.remove("invalid");
    });

    var cardNumberInput = document.getElementById("cardNumber");
    cardNumberInput.addEventListener("input", function (event) {
        var inputValue = event.target.value;

        inputValue = inputValue.replace(/\s/g, "");
        // Formatear el número de tarjeta con espacios cada 4 dígitos
        /*inputValue = inputValue.replace(/(\d{4})(?=\d)/g, "$1 ");
        event.target.value = inputValue;*/

        if (strippedValue.length % 4 === 0) {
            // Formatear el número de tarjeta con espacios cada 4 dígitos
            inputValue = strippedValue.replace(/(\d{4})(?=\d)/g, "$1 ");
        }

        cardNumberInput.classList.remove("invalid");
    });

    var expirationDateInput = document.getElementById("expirationDate");
    expirationDateInput.addEventListener("input", function (event) {
        var inputValue = event.target.value;
        // Eliminar cualquier carácter que no sea un número o una barra
        inputValue = inputValue.replace(/[^\d\/]/g, "");
        event.target.value = inputValue;

        expirationDateInput.classList.remove("invalid");
    });

    var cvvInput = document.getElementById("cvv");
    cvvInput.addEventListener("input", function (event) {
        var inputValue = event.target.value;
        // Permitir solo números eliminando cualquier carácter no numérico
        inputValue = inputValue.replace(/[^\d]/g, "");
        event.target.value = inputValue;

        cvvInput.classList.remove("invalid");
    });

    form.addEventListener("submit", function (event) {
        var tipoTarjetaRadios = document.querySelectorAll('input[name="status"]');
        var isChecked = false;

        for (var i = 0; i < tipoTarjetaRadios.length; i++) {
            if (tipoTarjetaRadios[i].checked) {
                isChecked = true;
                break;
            }
        }

        if (!isChecked) {
            event.preventDefault();
            alert("Por favor, elija un tipo de tarjeta.");
        }
    });
}, false);






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
pageGrabado.addEventListener('click', function () { localStorage.setItem('Tecnica', 'Grabado') });
const pageEscultura = document.getElementById('pageEscultura');
pageEscultura.addEventListener('click', function () { localStorage.setItem('Tecnica', 'Escultura') });
const pageOleo = document.getElementById('pageOleo');
pageOleo.addEventListener('click', function () { localStorage.setItem('Tecnica', 'Óleo') });
const pageCollage = document.getElementById('pageCollage');
pageCollage.addEventListener('click', function () { localStorage.setItem('Tecnica', 'Collage') });
const pageAcuarela = document.getElementById('pageAcuarela');
pageAcuarela.addEventListener('click', function () { localStorage.setItem('Tecnica', 'Acuarela') });
const pageFotografia = document.getElementById('pageFotografia');
pageFotografia.addEventListener('click', function () { localStorage.setItem('Tecnica', 'Fotografía') });
const pageAcrilico = document.getElementById('pageAcrilico');
pageAcrilico.addEventListener('click', function () { localStorage.setItem('Tecnica', 'Acrílico') });