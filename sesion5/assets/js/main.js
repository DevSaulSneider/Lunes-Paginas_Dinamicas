// alert ("holaaa")

//Primero accedemos a los elementos q se utilizara
let texto = document.querySelector("#texto");

let colorTexto = document.querySelector("#color-texto");
let bgTexto = document.querySelector("#color-fondo");

//Ahora definimos un evento para cada select ambos se ajecutaran cada vez que se cambie el valor del elemeto (option)
colorTexto.addEventListener("change",cambiaDeColor);
bgTexto.addEventListener("change", cambiaDeFondo);

//Creamos funciones para los eventos creados
function cambiaDeColor() {
  texto.style.color = colorTexto.value;
}

function cambiaDeFondo() {
  texto.style.background = bgTexto.value;
}

