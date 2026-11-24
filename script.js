const botonAnadir = document.querySelectorAll(".añadir-carta");
console.log(botonAnadir);

const InputBoton = document.getElementsByClassName("nueva-carta-Contenedor");
const botonCerrar = document.getElementsByClassName("cerrar-carta");

const creacionTarjeta = document.getElementsByClassName("añadir-definitiva");
const inputTituloCartas = document.getElementsByClassName("titulo-Input");
const tarjetasAñadi = document.getElementsByClassName("tarjetasAñadidas");

function mostrar(CadabotonPulsado) {
    for (let i = 0; i < botonAnadir.length; i++) {
        if (CadabotonPulsado === botonAnadir[i]) {
            const global = InputBoton[i];
            global.style.display = "block";
        }
    }
}

for (let cadaBoton of botonAnadir) {
    cadaBoton.addEventListener("click", function () {
        mostrar(cadaBoton);
    });
}

function cerrar(CadabotonPulsado) {
    for (let i = 0; i < InputBoton.length; i++) {
        if (CadabotonPulsado === botonCerrar[i]) {
            const global = InputBoton[i];
            global.style.display = "none";
        }
    }
}

for (let cadaBoton of botonCerrar) {
    cadaBoton.addEventListener("click", function () {
        cerrar(cadaBoton);
    });
}

function tarjetaNueva(cadaBotonPulsadoNuevaTarjeta) {
    for (let i = 0; i < creacionTarjeta.length; i++) {
        if (cadaBotonPulsadoNuevaTarjeta === creacionTarjeta[i]) {
            const inputDeLasCartas = inputTituloCartas[i];
            const contenedorTarjetaAñadidad = tarjetasAñadi[i];
            const guardacionTituloInput = inputDeLasCartas.value;
            const htmlInputTarjeta = document.createElement("div");
            const eliminarNuevaTarjeta = document.createElement("button");
            eliminarNuevaTarjeta.textContent = "eliminar";
            contenedorTarjetaAñadidad.append(htmlInputTarjeta);
            htmlInputTarjeta.textContent = guardacionTituloInput;
            htmlInputTarjeta.append(eliminarNuevaTarjeta);
            eliminarNuevaTarjeta.addEventListener("click",function(){
                htmlInputTarjeta.remove();
            })
        }
    }
}

for (let cadaBoton of creacionTarjeta) {
    cadaBoton.addEventListener("click", function () {
        tarjetaNueva(cadaBoton);
    })

}

