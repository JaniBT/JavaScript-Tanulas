const legnepszerubb = document.querySelector('#legnepszerubb')

let legnepszerubbEtel = ''

function getData() {
    fetch('/api/legnepszerubb', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(response => response.json())
    .then(data => {
        legnepszerubbEtel = data.etelNev
        legnepszerubb.innerHTML = legnepszerubbEtel
    })
    .catch(error => console.error('Hiba: ', error))
}

async function vendegkonyv() {
    try {
        const bejegyzes = document.querySelector('#bejegyzes')
        let test = {
            bejegyzes: bejegyzes.value
        }
        const response = await fetch('/api/vendegkonyv', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(test)
        })
        if (!response.ok) {
            throw new Error('Sikertelen adatbeküldés!')
        } else {
            bejegyzes.value = ''
            alert('Köszönjük a bejegyzést!')
        }
        console.log(test)
    } catch(error) {
        console.warn('Hiba: ', error)
    }
    
}

window.onload = getData()