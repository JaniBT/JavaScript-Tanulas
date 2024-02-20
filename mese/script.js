const focim = document.querySelector("h1")
const image = document.querySelector("img")
const foszereplo = document.querySelectorAll(".foszereplo")
const foszereplo_input = document.querySelector("#foszereploNev")
const kuldes_gomb = document.querySelector("button[type='submit']")
const main_content = document.querySelector("main")
const betuszin = document.querySelector("#betuszin")
const hatterszin = document.querySelector("#hatterszin")

focim.addEventListener('mouseover', e => {
    focim.style.cursor = "pointer"
    focim.addEventListener('click', e => {
        focim.style.textTransform = "uppercase"
    })
})

image.addEventListener('click', e => {
    image.style.opacity = "0.5"
    setTimeout((e) => {
        image.style.opacity = ""
        image.style.boxShadow = "5px 5px 5px gray"
    }, 2000)
})

kuldes_gomb.addEventListener('click', e => {
    e.preventDefault()
    uj_foszereplo = foszereplo_input.value
    for (const foszer of foszereplo) {
        foszer.innerHTML = uj_foszereplo
    }
})

betuszin.addEventListener('change', e => {
    main_content.style.color = betuszin.value
})

hatterszin.addEventListener('change', e => {
    main_content.style.backgroundColor = hatterszin.value
})