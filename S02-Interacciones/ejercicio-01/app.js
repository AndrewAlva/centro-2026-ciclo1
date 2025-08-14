const canvas = document.getElementById('lienzo');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


ctx.lineWidth = 2;
ctx.strokeStyle = "#ffffff";

ctx.ellipse(200, 180, 120, 120, 0, 0, Math.PI * 2);
ctx.stroke();

ctx.ellipse(200, 210, 120, 120, 0, 0, Math.PI * 2);
ctx.stroke();

ctx.ellipse(200, 240, 120, 120, 0, 0, Math.PI * 2);
ctx.stroke();

ctx.ellipse(200, 270, 120, 120, 0, 0, Math.PI * 2);
ctx.stroke();

ctx.ellipse(200, 300, 120, 120, 0, 0, Math.PI * 2);
ctx.stroke();



// // 1. Escuchar que el mouse se mueve.
// window.addEventListener("mousemove", function (eventData) {
//     // console.log('hola X:', eventData.x);
//     // console.log('hola Y:', eventData.y);

//     // Limpiar canvas
//     // ctx.clearRect(x, y, width, height);
//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     // Fondo
//     // ctx.beginPath();
//     // ctx.fillStyle = "#ff0000";
//     // ctx.rect(0, 0, canvas.width, canvas.height);
//     // ctx.fill();

//     ctx.beginPath();
//     ctx.ellipse(200, 180, 120, 120, 0, 0, Math.PI * 2);
//     ctx.stroke();

//     ctx.beginPath();
//     ctx.ellipse(200, 210, 120, 120, 0, 0, Math.PI * 2);
//     ctx.stroke();

//     ctx.beginPath();
//     ctx.ellipse(200, 240, 120, 120, 0, 0, Math.PI * 2);
//     ctx.stroke();

//     ctx.beginPath();
//     ctx.ellipse(200, 270, 120, 120, 0, 0, Math.PI * 2);
//     ctx.stroke();

//     ctx.beginPath();
//     ctx.ellipse(200, 300, 120, 120, 0, 0, Math.PI * 2);
//     ctx.stroke();


//     // Circulo que se mueve.
//     ctx.beginPath();
//     // ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle);
//     ctx.ellipse(eventData.x, eventData.y, 120, 120, 0, 0, Math.PI * 2);
//     ctx.stroke();
// });


// // 2. Escuchar el mouse presionado
// window.addEventListener("mousedown", function (eventData) {
//     console.log("WINDOW mouse down");

//     // 1. Actualizar los estilos
//     ctx.strokeStyle = "#ff0000";


//     // 2. Renderizar otra vez nuestras figuras
    
//     // Limpiar canvas
//     // ctx.clearRect(0, 0, canvas.width, canvas.height);

//     // Fondo
//     // ctx.beginPath();
//     // ctx.fillStyle = "#ff0000";
//     // ctx.rect(0, 0, canvas.width, canvas.height);
//     // ctx.fill();

//     ctx.beginPath();
//     ctx.ellipse(200, 180, 120, 120, 0, 0, Math.PI * 2);
//     ctx.stroke();

//     ctx.beginPath();
//     ctx.ellipse(200, 210, 120, 120, 0, 0, Math.PI * 2);
//     ctx.stroke();

//     ctx.beginPath();
//     ctx.ellipse(200, 240, 120, 120, 0, 0, Math.PI * 2);
//     ctx.stroke();

//     ctx.beginPath();
//     ctx.ellipse(200, 270, 120, 120, 0, 0, Math.PI * 2);
//     ctx.stroke();

//     ctx.beginPath();
//     ctx.ellipse(200, 300, 120, 120, 0, 0, Math.PI * 2);
//     ctx.stroke();


//     // Circulo que se mueve.
//     ctx.beginPath();
//     // ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle);
//     ctx.ellipse(eventData.x, eventData.y, 120, 120, 0, 0, Math.PI * 2);
//     ctx.stroke();
// });


// // 3. Escuchar cuando soltamos el click
// window.addEventListener("mouseup", function (eventData) {
//     console.log("WINDOW mouse up");

//     // 1. Actualizar los estilos
//     ctx.strokeStyle = "#ffffff";


//     // 2. Renderizar otra vez nuestras figuras
    
//     // Limpiar canvas
//     // ctx.clearRect(0, 0, canvas.width, canvas.height);

//     // Fondo
//     // ctx.beginPath();
//     // ctx.fillStyle = "#ff0000";
//     // ctx.rect(0, 0, canvas.width, canvas.height);
//     // ctx.fill();

//     ctx.beginPath();
//     ctx.ellipse(200, 180, 120, 120, 0, 0, Math.PI * 2);
//     ctx.stroke();

//     ctx.beginPath();
//     ctx.ellipse(200, 210, 120, 120, 0, 0, Math.PI * 2);
//     ctx.stroke();

//     ctx.beginPath();
//     ctx.ellipse(200, 240, 120, 120, 0, 0, Math.PI * 2);
//     ctx.stroke();

//     ctx.beginPath();
//     ctx.ellipse(200, 270, 120, 120, 0, 0, Math.PI * 2);
//     ctx.stroke();

//     ctx.beginPath();
//     ctx.ellipse(200, 300, 120, 120, 0, 0, Math.PI * 2);
//     ctx.stroke();


//     // Circulo que se mueve.
//     ctx.beginPath();
//     // ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle);
//     ctx.ellipse(eventData.x, eventData.y, 120, 120, 0, 0, Math.PI * 2);
//     ctx.stroke();
// });



// 1. Crear la referencia a nuestro boton de HTML.
const boton = document.getElementById("boton");
console.log(boton);
// 2. Agregar un "event listener" a ese boton
boton.addEventListener("mousedown", function() {
    console.log("BOTON mousedown");
    // 2.1 En el event listener vamos a renderizar de nuevo con otro color.
    // Definimos estilos
    ctx.fillStyle = "#ff6600";
    // Iniciamos trazo
    ctx.beginPath();
    // Definimos que figura
    ctx.rect(50, 100, 300, 50);
    // Renderizamos
    ctx.fill();
});
    