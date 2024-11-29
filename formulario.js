var formulario = document.querySelector(".form");

formulario.onsubmit = function(e) {

  // e.prevent(); Es preventDefault
  e.preventDefault();
  

  //Cambiando nombres de elementos
  var n = formulario.elements["name"];
  var e = formulario.elements["age"];
  var na = formulario.elements["nationality"];

  var nombre = n.value.trim(); //añadiendo trim
  var edad = parseInt(e.value); //convirtiendo a int

  var i = na.selectedIndex;
  var nacionalidad = na.value;

  console.log(nombre, edad)
  console.log(nacionalidad)

  //Validaciones
  if (nombre.length === 0) {
    n.classList.add("error")
    return;
  }else{
    n.classList.remove("error");
  }

  if (isNaN(edad) || edad < 18 || edad > 120) {
    e.classList.add("error");
    return;
  }else{
    e.classList.remove("error");    
  }

  //Agregamos invitados después de validar.
  agregarInvitado(nombre, edad, nacionalidad);

};




//Función para agrega invitado
function agregarInvitado(nombre, edad, nacionalidad) {
  //Convertimos la nacionalidad
  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }


  //Seleccionamos el div de la lista
  var lista = document.getElementById("lista-de-invitados")

  //Contenedor para invitado
  var elementoLista = document.createElement("div")
  elementoLista.classList.add("elemento-lista") //Es .add
  lista.appendChild(elementoLista);

  //Se elimina
  // var spanNombre = document.createElement("span")
  // var inputNombre = document.createElement("input")
  // var espacio = document.createElement("br")

  // spanNombre.textContent = "Nombre: "
  // inputNombre.value = nombre 
  // elementoLista.appendChild(spanNombre)
  // elementoLista.appendChild(inputNombre)
  // elementoLista.appendChild(espacio)

  

  crearElemento("Nombre", nombre, elementoLista)
  crearElemento("Edad", edad,elementoLista)
  crearElemento("Nacionalidad", nacionalidad,elementoLista)


  var botonBorrar = document.createElement("button")
  botonBorrar.textContent = "Eliminar invitado"

  botonBorrar.onclick = function() {
    lista.removeChild(elementoLista);
  };

  //se mueve el append hasta el final
  elementoLista.appendChild(botonBorrar);
    
}

//Funcion crear elemento fuera
function crearElemento(descripcion, valor,elementoLista) {
  var spanNombre = document.createElement("span")
  var inputNombre = document.createElement("input")
  var espacio = document.createElement("br")

  spanNombre.textContent = descripcion + ": "
  inputNombre.value = valor 

  elementoLista.appendChild(spanNombre)
  elementoLista.appendChild(inputNombre)
  elementoLista.appendChild(espacio)
}