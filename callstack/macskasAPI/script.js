const URL = 'https://catfact.ninja/fact'

document.querySelector('#teny').onclick = function(e) {
    fetch(URL)
    .then(response => response.json())
    .then(data => {
        const fact = data.fact;

        document.querySelector('.tenyek').innerHTML = `<p>${fact}</p>`;
    })
    .catch(error => {
        console.log('Hiba: ', error);
    });
}