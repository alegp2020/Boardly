const enteroTablon = document.getElementsByClassName("entero");
const botonAñadirCarta= document.getElementsByClassName("añadir-carta");

const cartaAñadidaBtn = document.getElementsByClassName("tarjetasAñadidas");
const btnCreaCarta = document.getElementsByClassName("añadir-definitiva");

const formualrioEntero = document.getElementsByClassName("formulario");
const tituloCrataNueva = document.getElementsByClassName("titulo-nueva");
const descripcionCartaNueva = document.getElementsByClassName("descripcion");
const objetivosOpcionales= document.getElementsByClassName("objetivos");
const tipoPrioridad = document.getElementById("prioridades");

console.log(cartaAñadidaBtn.length);

btnCreaCarta[0].addEventListener("click",function() {
    console.log("boton cliqueado");
    guardarCartaNueva();
});


function guardarCartaNueva(){
    const inputTituloCarta = tituloCrataNueva[0].value;
    const inputDescripcion = descripcionCartaNueva[0].value;
    const objetivosInput = objetivosOpcionales[0].value;
    console.log(inputTituloCarta);
    console.log(inputDescripcion);
    console.log(objetivosInput);
    
}