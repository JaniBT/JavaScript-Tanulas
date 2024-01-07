function menetidoszamitas() {
    let indulas = document.getElementById("indulas");
    let erkezes = document.getElementById("erkezes");
    if (indulas.value > erkezes.value) {
        let menet = indulas.value - erkezes.value;
        alert(`Menetidő: ${menet} perc!`);
    } else if (indulas.value < erkezes.value) {
        let menet = erkezes.value - indulas.value;
        alert(`Menetidő: ${menet} perc!`);
    } else {
        alert("Hiba: Azonos megállókat választott ki!");
    }
}


