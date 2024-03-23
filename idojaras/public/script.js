async function getData() {
    const response = await fetch('/api')
    const data = await response.json()
    console.log(data)
    let adatok = {
        orszag: data.location.country,
        varos: data.location.name
    }
    render(adatok)
}

function render(datas) {
    const allData = document.querySelectorAll('.adatok')
    const datasArray = [datas.orszag, datas.varos]
    let i = 0
    for (const data of allData) {
        data.innerHTML = datasArray[i]
        i++
    }
}