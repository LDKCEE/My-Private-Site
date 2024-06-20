

// Función para validar un correo electrónico
function validarCorreoElectronico(correo) {
    // Expresión regular para validar el formato de un correo electrónico
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;    
    
    return regex.test(correo);
}


// Función para manejar el estado del botón de registro
function manejarInicioSesion() {
    // Agregar un event listener para el evento del envío del formulario
    const formulario = document.getElementById('login');
     
    formulario.addEventListener('submit', iniciarSesion);
}

// Function para iniciar sesión
function iniciarSesion(event) {
debugger
    // Seleccionar el checkbox
    const checkbox = document.getElementById('checkboxSesion');
    // Seleccionar el campo de correo electrónico
    const correoInput = document.getElementById('email_iniciar');
    const correo = correoInput.value;


    // Verificar si el correo electrónico es válido
    if (!validarCorreoElectronico(correo)) {
        // Mostrar un mensaje si el correo electrónico no es válido
        alert("Por favor, introduce un correo electrónico válido.");
        // prevenir(avsr) el envio del formulario
        event.preventDefault();
        return;

    }
    // Verificar si el checkbox está marcado
    if (checkbox.checked) {
         
        // Mostrar mensaje si el checkbox está marcado
        alert("Estás de acuerdo");
    } else {
        // Mostrar un mensaje si el checkbox no está marcado
        alert("Por favor, acepta las condiciones para iniciar sesión.");
        // Prevenir el envío del formulario por defecto
        event.preventDefault();
        return; // Detener la ejecución de la función aquí
    }

}

 
// Llamar a la función para que se ejecute cuando se carga la página 
document.addEventListener('DOMContentLoaded',manejarInicioSesion);

