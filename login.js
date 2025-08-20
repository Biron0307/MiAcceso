document.getElementoById("LoginForm").addEventListener("Submit",function(event){event.preventDefault();
    var email = document.getElementoById("email").value;
    var password = document.getElementoById("password").value;

    if (email==="eber@gmail.com" && password==="123"){
        window.location.href="index.html"
    }
    else {
        document.getElementoById("message").innerHTML = "Acceso Denegado.";
    }
    });