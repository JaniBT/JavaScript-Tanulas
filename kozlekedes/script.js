const div_bod = document.querySelector("#kozleked")
const img = div_bod.querySelector("img")

const imgs = ["./red.png", "./yellow.png", "./green.png"]
let valtozo = 1
let forward = true
function change_pic() {
    img.src = imgs[valtozo];
    if (forward) {
        valtozo++;
        if (valtozo === imgs.length) {
            forward = false;
            valtozo = imgs.length - 2;
        }
    } else {
        valtozo--;
        if (valtozo === -1) {
            forward = true;
            valtozo = 1;
        }
    }
}

setInterval(change_pic,3000)