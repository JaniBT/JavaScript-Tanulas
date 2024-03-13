const prompt = require('prompt-sync')()

const teljes_nev = prompt("Add meg a neved: ")
const yearBorn = prompt("Add meg a születési dátumod: ")
let first3chars = []
const cim = `@duck.com`

let lowercase3char = ''

function emailCimetGeneral() {
    let fullNameSplit = teljes_nev.split(' ')
    for (const nev of fullNameSplit) {
        let subbedStr = nev.substring(0, 3)
        first3chars.push(subbedStr)
    }
    for (const chars of first3chars) {
        let charLowerCase = chars.toLowerCase()
        lowercase3char += charLowerCase
    }
    return emailAddress = lowercase3char + yearBorn.charAt(yearBorn.length-1) + cim
}

console.log(emailCimetGeneral())
