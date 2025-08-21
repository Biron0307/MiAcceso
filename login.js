document.getElementById("loginform").addEventListener("submit", function(event) {
    event.preventDefault();

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email === "eber@gmail.com" && password === "123") {
        window.location.href = "https://es.wikipedia.org/wiki/Wiki";
    } else {
        document.getElementById("message").innerHTML = "Acceso Denegado.";
    }
});
