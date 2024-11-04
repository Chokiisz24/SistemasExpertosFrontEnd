document.getElementById("registerForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita el envío del formulario para pruebas

    const nombre = document.getElementById("nombre").value.trim();
    const apellidoPaterno = document.getElementById("apellidoPaterno").value.trim();
    const apellidoMaterno = document.getElementById("apellidoMaterno").value.trim();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
    const edad = parseInt(document.getElementById("edad").value, 10);

    let mensajeError = "";

    // Validación de contraseña
    if (password.length < 6) {
        mensajeError += "La contraseña debe tener al menos 6 caracteres.\n";
    }

    // Validación de edad
    if (isNaN(edad) || edad < 18 || edad > 120) {
        mensajeError += "La edad debe ser un número entre 18 y 120.\n";
    }

});
