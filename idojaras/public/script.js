async function getData() {
    const response = await fetch('/api')
    const data = await response.json()
    console.log(data)
    let adatok = {
        orszag: data.location.country,
        varos: data.location.name,
        forecast3nap: data.forecast.forecastday,
        temp: data.forecast.forecastday
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
    const allDate = document.querySelectorAll('th')
    const allTemp = document.querySelectorAll('td')
    let j = 0
    for (const date of allDate) {
        date.innerHTML = datas.forecast3nap[j].date
        j++
    }
    j = 0
    let k = 0
    // for (const temp of allTemp) {
    //     temp.innerHTML = datas.temp[j].hour[j].temp_c + "°C"
    //     j++
    // }
    const elso_nap = document.querySelectorAll('.elso-nap')
    const masodik_nap = document.querySelectorAll('.masodik-nap')
    const harmadik_nap = document.querySelectorAll('.harmadik-nap')
    for (const temp of datas.temp[j].hour[k]) {
        if (j === 0) {
            for (const elso of elso_nap) {
                elso.innerHTML = temp.temp_c + "°C"
                k++
            }
            if (k === 23) {
                k = 0
                j++
            }
        } else if (j === 1) {
            for (const masodik of masodik_nap) {
                masodik.innerHTML = temp.temp_c + "°C"
            }
            if (k === 23) {
                k = 0
                j++
            }
        } else {
            for (const harmadik of harmadik_nap) {
                harmadik.innerHTML = temp.temp_c + "°C"
            }
            if (k === 23) {
                k = 0
                j++
            }
        }
    }
}