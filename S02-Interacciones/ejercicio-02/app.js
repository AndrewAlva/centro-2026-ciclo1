console.log('Ejercicio 02. Render Imagen 2D.');


// 1. Configurar canvas.
const canvas = document.getElementById("lienzo");
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


// 2. Cargar imagen.
var img = new Image();

// 2.1 Especificar cual es la imagen
var path = "./imagenes/example.png";
img.src = path;

// 3. Encontrar el evento de carga "load"
img.onload = function () {
    console.log('cargó mi imagen');

    // 4. Renderizar imagen.
    // ctx.drawImage(img, x, y, width, height);
    ctx.drawImage(img, 50, 30, 1000, 100);

    // image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight
    // ctx.drawImage(img, 50, 30, 1000, 100, 200, 100, 800, 600);
};
