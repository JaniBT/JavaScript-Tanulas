let mousePos = { x: undefined, y: undefined };
const circle = document.querySelector('#circle');

window.addEventListener('mousemove', (event) => {
    mousePos = { x: event.clientX, y: event.clientY };
    circle.style.top = `${mousePos.y}px`;
    circle.style.left = `${mousePos.x}px`;
});

let size = 50;
let delta = 0;

window.addEventListener('wheel', (event) => {
    delta = e.deltaY < 0 ? 5 : -5;
    size = Math.max(10 ,size + delta);

    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
})
