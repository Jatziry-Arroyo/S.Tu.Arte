document.addEventListener('DOMContentLoaded', function () {
    const paymentForm = document.getElementById('paymentForm');


    function validateInput(input, pattern, message) {
        if (!pattern.test(input.value)) {
            input.setCustomValidity(message);
            input.classList.add('is-invalid');
        } else {
            input.setCustomValidity('');
            input.classList.remove('is-invalid');

        }
        input.reportValidity();
    }

    const nameCardInput = document.getElementById('NameCard');
    const cardNumberInput = document.getElementById('cardNumber');
    const expirationDateInput = document.getElementById('expirationDate');
    const cvvInput = document.getElementById('cvv');

    const regexName = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
    const regexCardNumber = /^\d{4} \d{4} \d{4} \d{4}$/;
    const regexExpirationDate = /^(0[1-9]|1[0-2])\/([0-9]{2})$/;
    const regexCVV = /^\d{3,4}$/;

    nameCardInput.addEventListener('input', function () {
        validateInput(nameCardInput, regexName, 'Debes ingresar un nombre válido (letras y acentos).');
    });

    cardNumberInput.addEventListener('input', function () {
        validateInput(cardNumberInput, regexCardNumber, 'Debes ingresar un número de tarjeta válido.');
    });

    expirationDateInput.addEventListener('input', function () {
        validateInput(expirationDateInput, regexExpirationDate, 'Debes ingresar una fecha válida (MM/YY).');
    });

    cvvInput.addEventListener('input', function () {
        validateInput(cvvInput, regexCVV, 'Debes ingresar un CVV válido.');
    });

    paymentForm.addEventListener('submit', function (event) {
        event.preventDefault();
        event.stopPropagation();

        paymentForm.classList.add('was-validated');

        const inputs = paymentForm.querySelectorAll('input');
        inputs.forEach(input => {
            if (!input.checkValidity()) {
                input.classList.add('is-invalid');
            } else {
                input.classList.remove('is-invalid');
            }
        });

        if (paymentForm.checkValidity()) {
            let paymentData = {
                nameCard: nameCardInput.value,
                cardNumber: cardNumberInput.value,
                expirationDate: expirationDateInput.value,
                cvv: cvvInput.value
            };

            console.log(paymentData);

            Toastify({
                text: "¡Gracias por tu compra! Click para volver a comprar",
                duration: 5000,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "center", 
                stopOnFocus: true, 
                style: {
                    background: "linear-gradient(to right, #4b33a8, #785ce9)", 
                    borderRadius: "1rem", 
                    color: "white", 
                    fontFamily: "Poppins, sans-serif", 
                    fontSize: "20px", 
                    textAlign: "center", 
                    width: "290px", 
                },
                offset: {
                    x: '1.5rem',
                    y: '1.5rem'
                },
                onClick: function() {
                    // Borrar datos del formulario y redirigir
                    paymentForm.reset();
                    paymentForm.classList.remove('was-validated');
                    window.location.href = "catalogo.html";
                }
            }).showToast();

            alert("Pago realizado correctamente.");

            paymentForm.classList.remove('was-validated');
            paymentForm.reset();
        }
    }, false);
});






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