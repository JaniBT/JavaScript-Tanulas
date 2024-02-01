let mousePos = { x: undefined, y: undefined };
const circle = document.querySelector('#circle');

window.addEventListener('mousemove', (event) => {
    mousePos = { x: event.clientX, y: event.clientY };
    circle.style.top = `${mousePos.y}px`;
    circle.style.left = `${mousePos.x}px`;
});

let size = 50;

window.addEventListener('wheel', (event) => {
    if (event.deltaY < 0) {
        size += 20;
    } else {
        size -= 20;
    }
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    console.log(circle.style.width);
    console.log(circle.style.height);
})
