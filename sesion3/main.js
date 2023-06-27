let miBoton = document.querySelector("#btn");

miBoton.addEventListener("click", colocarTitulo);

function colocarTitulo() {
  document.querySelector('h1').innerHTML = "Texto desde JS";
}

