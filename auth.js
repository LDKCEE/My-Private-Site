 // Definimos un objeto con usuarios y sus contraseñas
const user = {
    'ayyoub.elimrani@estudioenpenascal.com':'mi clave',
};



// Verificar si el usuario ya está autenticado (verificado)
if (localStorage.getItem('estaAutenticado') === 'true') {
    // Si el usuario está autenticado, lo llevamos directamente a la página de fotos
    window.location.href = 'fotos.html';
}

// Manejar los parámetros de la URL para autenticación
const queryParametros = new URLSearchParams(window.location.search);
const email = queryParametros.get('email');
const password = queryParametros.get('password');


// Si hay valores de correo y contraseña en el URL
if (email && password) {
    /* Verificaremos si las identificaciones (credenciales de acceso)
    son válidas según el objeto usuarios */
    if (user[email] && user[email] === password) {
        /* Si las identificaciones son válidas, marca al usuario como
        autenticado en el almacenamiento local del navegador */
        localStorage.setItem('estaAutenticado', 'true');
        // Llevamos al usuario a la página de fotos
        window.location.href = 'fotos.html';
    } else {
        // Si las credenciales no son válidas, mostramos un mensaje de error
        localStorage.removeItem('estaAutenticado');
        alert('Correo electrónico o contraseña incorrectos');
        window.location.href = 'iniciar.html';
    }
}
