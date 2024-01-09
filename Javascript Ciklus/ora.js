// 16. feladat

function atvalt(percek) {
    const ora = Math.floor(percek / 60);
    const perc = percek % 60;
    let eredmeny = ora < 10 ? '0' + ora : ora.toString();
    eredmeny += ":"; + perc < 10 ? '0' + perc : perc.toString();
    return eredmeny;
}

for (let i = 8 * 60; i <= 12 * 60; i+=20) {
    console.log(atvalt(i));
}