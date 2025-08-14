const canvas = document.getElementById("lienzo");
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.lineWidth = 2;
ctx.strokeStyle = "#ffffff";

const mouse = {
    x: 0,
    y: 0,
}
const circlesPositionY = [
    150, 170, 190, 
    210, 230, 250, 270, 290, 
    310, 330, 350, 370, 390, 
    410, 430, 450, 470, 490,
    510, 530, 550, 570, 590,
    610, 630, 650, 670, 690,
    710, 730, 750, 770, 790,
    810, 830, 850, 870, 890,
];
const circlesBaseRadius = 120;

function getRadius(positionY) {
    const distance = Math.abs(mouse.y - positionY);
    return circlesBaseRadius + (distance * 0.7);
}

function drawCircles() {
    ctx.clearRect(0,0, canvas.width, canvas.height);

    for (let i = 0; i < circlesPositionY.length; i++) {
        const y = circlesPositionY[i];
        const radius = Math.max(5, getRadius(y));

        ctx.beginPath();
        ctx.ellipse(canvas.width / 2, y, radius, radius, 0, 0, Math.PI * 2);
        ctx.stroke();
    }
}

function handleMouseMove(eventData) {
    mouse.x = eventData.clientX;
    mouse.y = eventData.clientY;

    drawCircles();
}

function handleMouseDown() {
    ctx.lineWidth = 8;
    ctx.strokeStyle = "#ff6600";
    drawCircles();
}

function handleMouseUp() {
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#ffffff";
    drawCircles();
}



drawCircles();
window.addEventListener('mousemove', handleMouseMove);
window.addEventListener('mousedown', handleMouseDown);
window.addEventListener('mouseup', handleMouseUp);