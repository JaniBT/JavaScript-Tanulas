console.log("1. feladat");

// 1. feladat

for (let i = 1; i <= 20; i++) {
    console.log(i);
}

//

console.log("2. feladat");

// 2. feladat

for (let j = 2; j <= 30; j++) {
    if (j % 2 == 0) {
        console.log(j);
    }
}

//

console.log("3. feladat");

// 3. feladat
for (let k = 30; k <= 100; k+=7) {
    console.log(k);
}

//

console.log("4. feladat:");

// 4. feladat
for (let q = 112; q <= 2; q-=11) {
    console.log(q);
}

//

console.log("5. feladat:");

// 5. feladat
for (let m = -90; m <= 90; m+=15) {
    console.log(m);
}

//

console.log("6. feladat:");

// 6. feladat

for (let l = 19; l <= 99; l+=9) {
    console.log(l);
}

//

console.log("7. feladat:");

// 7. feladat

for (let h = 1; h <= 9; h=h+1) {
    console.log(h, h-18);
}

//

console.log("8. feladat:");

// 8. feladat

for (let i = 1; i <= 10; i++) {
    for (let j = 8; i <= 10; i++) {
        console.log(i, ' * ', j, ' = ', i*j);
    }
}

//

console.log("9. feladat:");

// 9. feladat

for (let i = 1; i <= 15; i++) {
    console.log(i**2)
}

//

console.log("10. feladat:");

// 10. feladat

for (let i = 2022; i <= 2041; i++) {
    if (i % 4 != 0) {
        console.log(i);
    }
}

//

console.log("11. feladat:");

// 11. feladat

for (let i = 1; i <= 144; i++) {
    if (144 % i == 0) {
        console.log(i);
    }
}

//

console.log("12. feladat:");

// 12. feladat

for (let i = 0; i <= 20; i++) {
    let result = Math.pow(2, i);
    console.log(result);
}

//

console.log("13. feladat:");

// 13. feladat

let jelenlegiSzam = 1;

for (let i = 1; jelenlegiSzam <= 301; i++) {
    console.log(jelenlegiSzam);
    
    jelenlegiSzam = jelenlegiSzam + i;
}

//

console.log("14. feladat:")

// 14. feladat

let elozoSzam = 1
let jelenlegSzam = 2

for (; jelenlegSzam <= 6765;) {
    console.log(elozoSzam);
    
    let kovetkezoSzam = elozoSzam + jelenlegSzam;

    elozoSzam = jelenlegSzam;
    jelenlegSzam = kovetkezoSzam;
}

//

console.log("15. feladat:")

// 15. feladat

for (let i = 8; i <= 16; i++) {
    if (i < 10) {
        console.log(`0${i}:15`)
    } else {
        console.log(`${i}:15`)
    }
}

//

console.log("16. feladat:")

// 16. feladat

let j = 0;

for (let i = 8; i <= 12; j+=2) {
    if (i < 12) {
        if (j < 6) {
            if (i < 10) {
                console.log(`0${i}:${j}0`);
                
            } else {
                console.log(`${i}:${j}0`);
            }
        } else {
            j = 0;
            i++;
        }
    } else {
        console.log(`${i}:00`)
        i++;
    }
}

//

console.log("17. feladat:")

// 17. feladat

function atvalt(percek) {
    const ora = Math.floor(percek / 60);
    const perc = percek % 60;
    let eredmeny = ora < 10 ? '0' + ora : ora.toString();
    eredmeny += ':' + (perc < 10 ? '0' + perc : perc.toString());
    return eredmeny;
}

for (let i = 8 * 60; i <= 18 * 60; i+=50) {
    console.log(atvalt(i));
}

//

console.log("18. feladat:");

// 18. feladat

let percek = 8 * 60 + 30;
for (let i = 1; i <= 8; i++) {
    console.log(i + '. ' + atvalt(percek), '-', atvalt(percek + 45));
    percek += 55;
}
