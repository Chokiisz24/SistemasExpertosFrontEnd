document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username && password) {
        console.log("Bienvenido, " + username + "!");
        alert("Inicio de sesión exitoso. ¡Bienvenido, " + username + "!");
    } else {
        alert("Por favor, completa todos los campos.");
    }
});

// Mostrar/Ocultar contraseña
document.getElementById("togglePassword").addEventListener("change", function() {
    const passwordField = document.getElementById("password");
    const toggleIcon = document.getElementById("toggleIcon");
    
    if (this.checked) {
        passwordField.type = "text";
        toggleIcon.classList.replace("fa-eye", "fa-eye-slash");
    } else {
        passwordField.type = "password";
        toggleIcon.classList.replace("fa-eye-slash", "fa-eye");
    }
});
