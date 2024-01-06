function tipp() {
    let teve = document.getElementById("teve");
    let strucc = document.getElementById("strucc");

    if (teve.value == 5 && strucc.value == 19) {
        document.getElementById("szoveg").innerHTML = `Helyes! ${teve.value} teve és ${strucc.value} strucc`;
    }
    else if (teve.value == "" || strucc.value == "") {
        alert("Hibás adat!");
    }
    else if (teve.value < 5 && strucc.value < 19) {
        alert("Ettől több teve és strucc van!");
    }
    else if (teve.value > 5 && strucc.value > 19) {
        alert("Ettől kevesebb teve és strucc van!");
    }
    else if (teve.value < 5 && strucc.value > 19) {
        alert("Ettől több teve és kevesebb strucc van!");
    }
    else {
        alert("Ettől kevesebb teve és több strucc van!");
    }
}