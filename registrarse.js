const btonEntrar = document.querySelector(".boton-entrar-login");
const formulario = document.querySelector(".formualario-registrarse");
const input = document.getElementsByClassName("form-control");
const alert = document.querySelector(".alert");
formulario.addEventListener("submit",function(evento){
    evento.preventDefault();
    if(input[0].value === ""){
        alert.classList.remove("d-none")
        alert.textContent = "el nombre está vacio";
        return;
    }
    if(input[1].value === ""){
        alert.classList.remove("d-none");
        alert.textContent = "la contraseña está vacia";
        return;
    }
    else{
        localStorage.setItem("nombre",input[0].value);
        localStorage.setItem("contraseña",input[1].value);
        window.location.href = "login.html" ;
    }
});

