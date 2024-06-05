const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('userEmail');
const passwordInput = document.getElementById('password');
const alertContainer = document.getElementById('alert-container');

loginForm.addEventListener('submit', function (event) {
    event.preventDefault();
    event.stopPropagation();

    // Limpia las alertas anteriores
    alertContainer.innerHTML = '';

    // Agregar la clase de validación de Bootstrap
    loginForm.classList.add('was-validated');

    // Validación del campo de correo electrónico
    if (!emailInput.value) {
        emailInput.setCustomValidity('El campo de correo es obligatorio.');
    } else if (!validateEmail(emailInput.value)) {
        emailInput.setCustomValidity('El correo no es válido.');
    } else {
        emailInput.setCustomValidity('');
    }

    // Validación del campo de contraseña
    if (!passwordInput.value) {
        passwordInput.setCustomValidity('El campo de contraseña es obligatorio.');
    } else {
        passwordInput.setCustomValidity('');
    }

    // Mostrar los errores, si los hay
    if (!loginForm.checkValidity()) {
        loginForm.reportValidity();
    } else {
        // Crear objeto usuario
        let usuario = {
            'useremail': emailInput.value,
            'userpassword': passwordInput.value
        };

        // Guardar objeto usuario en localStorage como JSON
        localStorage.setItem("Usuario", JSON.stringify(usuario));

        // Aquí se enviaría el formulario para iniciar sesión.
        console.log('Formulario válido. Se enviaría el formulario.');
        console.log(usuario);

        // Reinicia el formulario
        loginForm.reset();
        loginForm.classList.remove('was-validated');
    }
});

function validateEmail(email) {
    // Expresión regular para validar correos electrónicos
    const re = /^(([^<>()\[\]\.,;:\s@"]+(.[^<>()\[\]\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+.)+[^<>()[\]\.,;:\s@"]{2,})$/i;
    // Prueba si el correo cumple con la expresión regular
    return re.test(String(email).toLowerCase());
}

emailInput.addEventListener('input', () => {
    emailInput.setCustomValidity('');
    emailInput.checkValidity();
});

passwordInput.addEventListener('input', () => {
    passwordInput.setCustomValidity('');
    passwordInput.checkValidity();
});
