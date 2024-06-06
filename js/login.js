// Añade un event listener al formulario de login para el evento 'submit'
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Limpia las alertas anteriores
    document.getElementById('alert-container').innerHTML = '';

    // Obtiene los valores de los campos del formulario
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Array para almacenar los mensajes de error
    let errors = [];

    // Validación del campo de correo electrónico
    if (!email) {
        // Añade un mensaje de error si el campo de correo está vacío
        errors.push('El campo de correo es obligatorio.');
    } else if (!validateEmail(email)) {
        // Añade un mensaje de error si el correo no es válido
        errors.push('El correo no es válido.');
    }

    // Validación del campo de contraseña
    if (!password) {
        // Añade un mensaje de error si el campo de contraseña está vacío
        errors.push('El campo de contraseña es obligatorio.');
    }

    // Mostrar los errores, si los hay
    if (errors.length > 0) {
        // Crea el HTML para la alerta de errores
        let alertHtml = '<div class="alert alert-danger" role="alert"><ul>';
        errors.forEach(function(error) {
            // Añade cada mensaje de error a la lista de la alerta
            alertHtml += `<li>${error}</li>`;
        });
        alertHtml += '</ul></div>';

        // Inserta la alerta en el contenedor de alertas
        document.getElementById('alert-container').innerHTML = alertHtml;
    } else {
        // Se enviaría el formulario para inicar sesión. 
        let usuario = {
            'useremail': email,
            'userpassword': password
        }
        console.log(usuario);
        localStorage.setItem("Usuario", JSON.stringify(usuario));
    }
});

// Función para validar el formato del correo electrónico
function validateEmail(email) {
    // Expresión regular para validar correos electrónicos
    const re = /^(([^<>()\[\]\.,;:\s@"]+(.[^<>()\[\]\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+.)+[^<>()[\]\.,;:\s@"]{2,})$/i;
    // Prueba si el correo cumple con la expresión regular
    return re.test(String(email).toLowerCase());
}
