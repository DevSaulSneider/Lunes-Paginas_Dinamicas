let canvasSprites = document.getElementById("canvas-sprites").getContext("2d");
let canvasMaze = document.getElementById("canvas-maze").getContext("2d");

// Primero vamos a encerrar el código de creación del personaje en una función, la cual permitirá además variar el tamaño y la posición del pacman

// La posición de pacman también será declarada globalmente, lo que nos permitirá que cualquier cambio que tenga la posición del personaje sea efectivo para todo el código.
// Se pueden probar otros valores para las coordenadas, siempre y cuando no correspondan a muros.
var xPacman = 2;  // cuadrados
var yPacman = 2;  // cuadrados

function drawPacman(x, y) {
    // Transformamos de cuadrados a pixeles
    let size = squareSize * sizePacman;
    x = squareSize * xPacman + size / 5;  // Agregamos size / 5 para corregir la posición del personaje.
    y = squareSize * yPacman + size / 5;

    let radius = size / 2;

    // Forma pacman
    canvasSprites.beginPath();
    canvasSprites.moveTo(x, y);  // Movemos el "puntero" al siguiente punto de inicio de trazado
    canvasSprites.arc(x, y, radius, 0.25 * Math.PI, 1.75 * Math.PI);
    canvasSprites.fillStyle = "yellow";
    canvasSprites.strokeStyle = "black";
    canvasSprites.stroke();
    canvasSprites.fill();

    // Ahora agregamos el ojo
    let eyeRadius = radius / 7.5;
    let eyeY = y - 4 * eyeRadius;
    canvasSprites.moveTo(175, 225);
    canvasSprites.beginPath();
    canvasSprites.arc(x, eyeY, eyeRadius, 0, 2 * Math.PI);
    canvasSprites.fillStyle = "black";
    canvasSprites.fill();
}

// Fantasma: https://www.kindpng.com/picc/m/15-156442_pacman-ghosts-hd-png-download.png
// Para esta figura además de arc utilizaremos Rect, que nos permite dibujar líneas entre puntos que definamos
// Partiremos por el extremo inferior izquierdo e iremos hacia arriba
function drawGhost(x, y, color) {
    // Transformamos cuadrados a pixeles
    let width = squareSize * widthGhost;
    x = squareSize * x  + squareSize / 2;
    y = squareSize * y + squareSize / 4;

    let radius = width / 2;

    canvasSprites.beginPath();

    // Comenzamos por la esquina inferior izquierda
    canvasSprites.moveTo(x - radius, y + 0.75 * width);
    canvasSprites.lineTo(x - radius, y);  // Recta hacia arriba
    canvasSprites.arc(x, y, radius, Math.PI, 0);  // Semi círculo (cabeza)
    canvasSprites.moveTo(x + radius, y);
    canvasSprites.lineTo(x + radius, y + 0.75 * width);  // Recta hacia abajo
    canvasSprites.lineTo(x + 0.5 * radius, y + 0.5 * width);  // Diagonal hacia arriba-izquierda
    canvasSprites.lineTo(x, y + 0.75 * width);  // Diagonal hacia abajo-izquierda
    canvasSprites.lineTo(x - 0.5 * radius, 0.5 * width);  // Diagonal hacia arriba-izquierda
    canvasSprites.lineTo(x - radius, y + 0.75 * width);  // Diagonal hacia abajo-izquierda
    canvasSprites.fillStyle = color;
    canvasSprites.fill();

    // Ojos
    canvasSprites.beginPath();
    canvasSprites.ellipse(x - 0.5 * radius, y, 0.25 * radius, 0.5 * radius, 0, 2 * Math.PI);
    canvasSprites.ellipse(x + 0.5 * radius, y, 0.25 * radius, 0.5 * radius, 0, 2 * Math.PI);
    canvasSprites.fillStyle = "white";
    canvasSprites.fill();

    canvasSprites.beginPath();
    canvasSprites.arc(x - 0.5 * radius, y, 0.12 * radius, 0, 2 * Math.PI);
    canvasSprites.arc(x + 0.5 * radius, y, 0.12 * radius, 0, 2 * Math.PI);
    canvasSprites.fillStyle = "black";
    canvasSprites.fill();
}

// Food
function drawFood(x, y, color) {
    let size = squareSize * sizeFood;
    x = squareSize * x;
    y = squareSize * y;

    canvasSprites.beginPath();
    canvasSprites.rect(x - size, y - size, size, size);
    canvasSprites.fillStyle = color;
    canvasSprites.fill();
}

drawPacman();
drawGhost(10, 10, "pink");