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
