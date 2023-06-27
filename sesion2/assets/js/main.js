//alert("hola mundo");

//La pagina creara un numero aleatorio entre el 0 al 100, el jugador tendrá 5 intentos

let numeroGenerado = parseInt(Math.random() * 100);

console.log(numeroGenerado);

//Creamos variable para almacenar los intentos

let intentosMaximos = 5;
let intentosGastados = 0;

//Creamos la alerta donde se explica el juego

alert("Tu mision es adivinar el numero en el que esta pensando la compuradora. Este numero estara entre el 0 y 100. \nTienes 5 intentos")

//Crear variable para el numero ingresado
let numeroIngresado = -1;

//Crear variabel si es igual al generado
let correcto = false;

//Solicitar al jugador que ingrese un numero mientras le quede intentos

while (intentosGastados < intentosMaximos && !correcto) {
  
  numeroIngresado = prompt("ingrese un numero entre el 0 y el 100");

  intentosGastados++;

  if (numeroIngresado == numeroGenerado) {
    correcto = true;
  } else if (numeroIngresado < numeroGenerado) {
    alert(`El numero ingresado es menor al correcto. \nTe queda ${intentosMaximos - intentosGastados} intentos`);
  } else{
    alert(`El numero ingresado es mayor al correcto. \nTe queda ${intentosMaximos - intentosGastados} intentos`);
  }
}

//Se termina el ciclo si: a) se adivino el numero, b) se acabaron los intentos

if (correcto == true) {
  alert(`Has ganadoooo, felicitaciones .....!!!!!`);
} else {
  alert(`Se te acabaron los intentos, perdiste`);
}