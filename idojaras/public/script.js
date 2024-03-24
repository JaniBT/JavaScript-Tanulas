async function getData() {
    const response = await fetch('/api')
    const data = await response.json()
    console.log(data)
    let adatok = {
        orszag: data.location.country,
        varos: data.location.name,
        forecast3nap: data.forecast.forecastday,
    }
    render(adatok)
}

function render(datas) {
    document.querySelector('#table').style.display = "block"

    const hour = document.querySelector('#hour')
    hour.innerHTML = "Óra"

    const full_hour = document.querySelectorAll('.full-hour')
    let hour_counter = 0
    for (const hour of full_hour) {
        hour.innerHTML = hour_counter + ':00'
        hour_counter++
    }

    const allData = document.querySelectorAll('.adatok')
    const datasArray = [datas.orszag, datas.varos]
    let i = 0
    for (const data of allData) {
        data.innerHTML = datasArray[i]
        i++
    }
    const allDate = document.querySelectorAll('.table-head')
    let j = 0
    for (const date of allDate) {
        date.innerHTML = datas.forecast3nap[j].date
        j++
    }

    const elso_nap = document.querySelectorAll('.elso-nap')
    const masodik_nap = document.querySelectorAll('.masodik-nap')
    const harmadik_nap = document.querySelectorAll('.harmadik-nap')
    let ora_count = 0
    for (const elso of elso_nap) {
        elso.innerHTML = datas.forecast3nap[0].hour[ora_count].temp_c + "°C"
        ora_count++
    }
    ora_count = 0
    for (const masodik of masodik_nap) {
        masodik.innerHTML = datas.forecast3nap[1].hour[ora_count].temp_c + "°C"
        ora_count++
    }
    ora_count = 0
    for (const harmadik of harmadik_nap) {
        harmadik.innerHTML = datas.forecast3nap[2].hour[ora_count].temp_c + "°C"
        ora_count++
    }
    ora_count = 0
}