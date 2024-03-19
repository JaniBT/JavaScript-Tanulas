const prompt = require('prompt-sync')()

let userInput = prompt('Adja meg a gépelő neveket pontos vesszővel elválasztva: ')

function gepeles(input) {
    if (typeof(input) !== 'string' || input == '') {
        return "Hiba!"
    }

    let without_whitespace = input.split(' ')

    let filteredList = without_whitespace.filter(x => x != '' && x != ';')
    
    let fullyFilteredList = []
    for (const list of filteredList) {
        let trimmed = list.replace(/;/g, '')
        fullyFilteredList.push(trimmed)
    }

    let counting = 0
    for (let i = 0; i < fullyFilteredList.length; i++) {
        counting += 1
    }
    if (counting === 1) {
        return `${fullyFilteredList[0]} éppen gépel...`
    } else if (counting === 2) {
        return `${fullyFilteredList[0]} és ${fullyFilteredList[1]} éppen gépel...`
    } else {
        const counts = counting - 2
        return `${fullyFilteredList[0]}, ${fullyFilteredList[1]} és további ${counts} ember gépel...`
    }
}

console.log(gepeles(userInput))