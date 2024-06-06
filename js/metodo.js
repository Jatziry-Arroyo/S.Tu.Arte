
document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("paymentForm");

    form.addEventListener("submit", function(event) {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }

        form.classList.add("was-validated");
    }, false);

    var cardNumberInput = document.getElementById("cardNumber");
    cardNumberInput.addEventListener("input", function(event) {
        var inputValue = event.target.value;

        inputValue = inputValue.replace(/\s/g, "");
        // Formatear el número de tarjeta con espacios cada 4 dígitos
        inputValue = inputValue.replace(/(\d{4})(?=\d)/g, "$1 ");
        event.target.value = inputValue;
    });

    var expirationDateInput = document.getElementById("expirationDate");
    expirationDateInput.addEventListener("input", function(event) {
        var inputValue = event.target.value;
        // Eliminar cualquier carácter que no sea un número o una barra
        inputValue = inputValue.replace(/[^\d\/]/g, "");
        event.target.value = inputValue;
    });

    var cvvInput = document.getElementById("cvv");
    cvvInput.addEventListener("input", function(event) {
        var inputValue = event.target.value;
        // Permitir solo números eliminando cualquier carácter no numérico
        inputValue = inputValue.replace(/[^\d]/g, "");
        event.target.value = inputValue;
    });
}, false);
