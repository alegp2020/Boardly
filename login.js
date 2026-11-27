const formulario = document.querySelector("form");
const input = document.getElementsByClassName("form-control");
const alert = document.querySelector(".alert");
formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();
  if (input[0].value === "") {
    alert.classList.remove("d-none");
    alert.textContent = "el nombre está vacio";
    return;
  }
  if (input[1].value === "") {
    alert.classList.remove("d-none");
    alert.textContent = "la contraseña está vacia";
    return;
  }
  const nombreINput = localStorage.getItem("nombre");
  const contraseñInput = localStorage.getItem("contraseña");
  if (nombreINput === input[0].value && contraseñInput === input[1].value) {
    window.location.href = "index.html";
  } else {
    alert.classList.remove("d-none");
    alert.textContent = "los datos no coinciden";
    return;
  }
});
