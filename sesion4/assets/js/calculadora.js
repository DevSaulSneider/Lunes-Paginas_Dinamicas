function calcularSuma() {
  //Capturamos el valor ingresado por el usuario
  let valor1 = document.getElementById('valor1').value;
  let valor2 = document.getElementById('valor2').value;

  //Convertimos a numero
  let valor1_transformado = parseFloat(valor1);
  let valor2_transformado = parseFloat(valor2);

  //Realizamos la operacion en un variable
  let resultado = valor1_transformado + valor2_transformado;

  //Agregamos el resultado al pagina web
  let etiquetaResultado = document.createElement("p");
  etiquetaResultado.id = "resultado";
  etiquetaResultado.innerHTML = resultado;

  document.getElementById('operandos').appendChild(etiquetaResultado);

}


function calcularResta() {
  //Capturamos el valor ingresado por el usuario
  let valor1 = document.getElementById('valor1').value;
  let valor2 = document.getElementById('valor2').value;

  //Convertimos a numero
  let valor1_transformado = parseFloat(valor1);
  let valor2_transformado = parseFloat(valor2);

  //Realizamos la operacion en un variable
  let resultado = valor1_transformado - valor2_transformado;

  //Agregamos el resultado al pagina web
  let etiquetaResultado = document.createElement("p");
  etiquetaResultado.id = "resultado";
  etiquetaResultado.innerHTML = resultado;

  document.getElementById('operandos').appendChild(etiquetaResultado);
}


function calcularProducto() {
  //Capturamos el valor ingresado por el usuario
  let valor1 = document.getElementById('valor1').value;
  let valor2 = document.getElementById('valor2').value;

  //Convertimos a numero
  let valor1_transformado = parseFloat(valor1);
  let valor2_transformado = parseFloat(valor2);

  //Realizamos la operacion en un variable
  let resultado = valor1_transformado * valor2_transformado;

  //Agregamos el resultado al pagina web
  let etiquetaResultado = document.createElement("p");
  etiquetaResultado.id = "resultado";
  etiquetaResultado.innerHTML = resultado;

  document.getElementById('operandos').appendChild(etiquetaResultado);
}


function calcularDivision() {
  //Capturamos el valor ingresado por el usuario
  let valor1 = document.getElementById('valor1').value;
  let valor2 = document.getElementById('valor2').value;

  //Convertimos a numero
  let valor1_transformado = parseFloat(valor1);
  let valor2_transformado = parseFloat(valor2);

  //Realizamos la operacion en un variable
  let resultado = valor1_transformado / valor2_transformado;

  //Agregamos el resultado al pagina web
  let etiquetaResultado = document.createElement("p");
  etiquetaResultado.id = "resultado";
  etiquetaResultado.innerHTML = resultado;
  
  document.getElementById('operandos').appendChild(etiquetaResultado);
}