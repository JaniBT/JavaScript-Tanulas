const prompt = require('prompt-sync')()

let indexSzam = prompt('Add meg hanyadik indexű elemet akarod kiszedni a szövegből: ')

let szoveg = ["Lehet-e a Pythonos indexelest JavaScriptben szimulalni?", indexSzam]

function python(list) {
    let indexedikElem = list[1]

    if (indexedikElem < 0) {
        let pozitivIndex = Math.abs(indexedikElem)
        return list[0][list[0].length - pozitivIndex]
    } else {
        return list[0][indexedikElem]
    }
}

console.log(python(szoveg))