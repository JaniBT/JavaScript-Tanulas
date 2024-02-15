const szam1Div = document.getElementById("szam1");
const duplaGomb = document.getElementById("duplaGomb");
const eredmenyDiv = document.getElementById("eredmeny");
const rejtGomb = document.getElementById("rejtGomb");

rejtGomb.onclick = function() {
    eredmenyDiv.style.display = "none";
};

duplaGomb.onclick = function() {

    eredmenyDiv.style.display = "block";

    const szam1Str = szam1Div.value;
    if(szam1Str.match("[^0-9]")) {
        alert("Nem várt karakter!");
    }else {
        const eredmeny = 2 * parseInt(szam1Div.value);
        eredmenyDiv.innerHTML = eredmeny;
    }
};