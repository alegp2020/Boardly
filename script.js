const enteroTablon = document.getElementsByClassName("entero");
const botonAñadirCarta = document.getElementsByClassName("añadir-carta");

const cartaAñadidaBtn = document.getElementsByClassName("tarjetasAñadidas");
const btnCreaCarta = document.getElementsByClassName("añadir-definitiva");

const formualrioEntero = document.getElementsByClassName("formulario");
const tituloCrataNueva = document.getElementsByClassName("titulo-nueva");
const descripcionCartaNueva = document.getElementsByClassName("descripcion");
const objetivosOpcionales = document.getElementsByClassName("objetivos");
const tipoPrioridad = document.getElementById("prioridades");

console.log(cartaAñadidaBtn.length);

btnCreaCarta[0].addEventListener("click", function () {
  console.log("boton cliqueado");
  guardarCartaNueva();
});

function guardarCartaNueva() {
  const inputTituloCarta = tituloCrataNueva[0].value;
  const inputDescripcion = descripcionCartaNueva[0].value;
  const objetivosInput = objetivosOpcionales[0].value;
  const prioridadSelect = tipoPrioridad.value;
  console.log(prioridadSelect);
  console.log(inputTituloCarta);
  console.log(inputDescripcion);
  console.log(objetivosInput);

  const nuevTarjetaConInput = document.createElement("div");
  if (inputTituloCarta === "") {
    alert("el titulo esta vacio");
    return;
  }
  if (inputDescripcion === "") {
    alert("la descripocion esta vacia");
    return;
  }

  nuevTarjetaConInput.classList.add("dibujoTarjeta");
  //se puede arrastrar
  nuevTarjetaConInput.draggable = true;
  //dragstar se empieza a arastra
  //dragover tarjeta encima de la column
  //drop soltar tarjeta creada en column
  nuevTarjetaConInput.innerHTML = `
    <h5>Titulo: ${inputTituloCarta}</h5>
    <p>Descripción: ${inputDescripcion}</p>
    <p>Objetivos: ${objetivosInput}</p>
    `;
  cartaAñadidaBtn[0].append(nuevTarjetaConInput);
  nuevTarjetaConInput.addEventListener("dragstart",function(){
    cartasArrastradas(nuevTarjetaConInput);
  })
  const eliminarCartaNUeva = document.createElement("button");
  eliminarCartaNUeva.classList.add("eliminarCartaNueva");
  eliminarCartaNUeva.textContent="Eliminar";
  nuevTarjetaConInput.append(eliminarCartaNUeva);

  eliminarCartaNUeva.addEventListener("click",function(){
    eliminarCartaCreada(nuevTarjetaConInput);
  })
  tituloCrataNueva[0].value = "";
  descripcionCartaNueva[0].value = "";
  objetivosOpcionales[0].value = "";
  tipoPrioridad.value = "";

  if (prioridadSelect === "alta") {
    nuevTarjetaConInput.style.backgroundColor = "var(--prioridad-alta)";
  } else if (prioridadSelect === "media") {
    nuevTarjetaConInput.style.backgroundColor = "var(--prioridad-media)";
  } else {
    nuevTarjetaConInput.style.backgroundColor = "var(--prioridad-baja)";
  }
};

function eliminarCartaCreada(cartaELiminada){
    cartaELiminada.remove();
}

let tarejetaEnMovimiento;
for (let i = 0; i < enteroTablon.length; i++) {
  const columnaActualGuardada = enteroTablon[i];

  columnaActualGuardada.addEventListener("dragover",function(evento){
    evento.preventDefault();
  });
  columnaActualGuardada.addEventListener("drop",function(evento){
    evento.preventDefault();
    console.log("Se ha soltado en ",columnaActualGuardada);
    columnaActualGuardada.append(tarejetaEnMovimiento);
  });
}
function cartasArrastradas(cartaArrstrable){
  tarejetaEnMovimiento=cartaArrstrable;
}

