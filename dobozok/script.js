/*
1. doboz:
Kattintásra adjunk hozzá egy "blur" nevű class attribútumot, majd újabb kattintásra vegyük
le róla azt.
*/
const doboz = document.querySelector('#element-one')
doboz.addEventListener('click', e => {
    if (!doboz.classList.contains('blur')) {
        doboz.classList.add("blur")
    } else {
        doboz.classList.remove('blur')
    }
})

/*
2. doboz:
Ha az egérrel fölé megyünk változzon meg a háttérszíne pirosra, ha levesszük róla az egeret
változzon vissza az eredeti színére.
*/

const doboz2 = document.querySelector('#element-two')
doboz2.addEventListener('mouseover', e => {
    doboz2.style.backgroundColor = 'red'
    doboz2.addEventListener("mouseleave", e => {
        doboz2.style.backgroundColor = ''
    })
})

/*
3. doboz:
Dupla kattintással sorsoljon egy számot 1 és 20 között és módosítsa a kapott számmal a doboz tartalmát. 
*/

const doboz3 = document.querySelector('#element-three')
doboz3.addEventListener('dblclick', e => {
    let random_szam = Math.floor(Math.random() * 20)
    const doboz3_span = doboz3.querySelector('span')
    doboz3_span.innerText = random_szam
})

/*
4. doboz:
Kattintásra tűnjön el, majd egy 1 másodperces várakozás után ismét jelenjen meg.
*/

const doboz4 = document.querySelector('#element-four')
doboz4.addEventListener('click', e => {
    doboz4.style.visibility = "hidden"
    function show() {
        doboz4.style.visibility = "visible"
    }
    setTimeout(show, 1000)
})

/*
5. doboz:
Kattintásra alakítsa kör alakúra az összes dobozt.
*/

const all_box = document.querySelectorAll('.shape')
const doboz5 = document.querySelector('#element-five')
doboz5.addEventListener('click', e => {
    for (const shape1 of all_box) {
        shape1.classList.toggle("box5style")
    }
})

/*
6. doboz:
Form submit eseményre módosítsuk a doboz tartalmát az input mezőbe írt értékkel
*/

const doboz6 = document.querySelector('#element-six')
const doboz6_span = doboz6.querySelector('span')
const doboz6_form_input = doboz6.querySelector('input[type="number"]')
const doboz6_button = doboz6.querySelector('button')

doboz6_button.onclick = e => {
    e.preventDefault()
    doboz6_span.innerText = doboz6_form_input.value
}

/*
7. doboz:
Keypress eseményre írjuk be a dobozba az adott karaktert, amit leütöttek
*/

const doboz7 = document.querySelector('#element-seven')
const doboz7_span = doboz7.querySelector('span')
const doboz7_form_input = doboz7.querySelector('#box7-input')

doboz7_form_input.addEventListener('keypress', e => {
    doboz7_span.innerText = e.key.toUpperCase()
})


/*
8. doboz:
Egérmozdítás eseményre írjuk be az egér pozíciójának x és y koordinátáját, 
a következő séma szerint: "X: {x-koordináta}, Y: {y-koordináta}"
*/

const doboz8 = document.querySelector('#element-eight')
const doboz8_span = doboz8.querySelector('span')
doboz8.addEventListener('mousemove', e => {
    doboz8_span.innerText = `X: ${e.clientX}, Y: ${e.clientY}`
})

/*
9. doboz:
Submit eseményre módosítsuk a doboz tartalmát azzal az értékkel ami úgy áll elő, 
hogy végrehajtjuk a select inputban kiválasztott operációt,
a state-en és number inputba beírt értéken.

Az előállt végeredményt tároljuk el új state-ként!

Pl:
  Number input mezőbe írt érték: 5
  Select inputban kiválasztott érték: "mult"
  Aktuális state: 9

  Operáció: 9 * 5
  
  Dobozba és state-be beírandó érték: 45
*/

const doboz9 = document.querySelector('#element-nine')
const doboz9_span = doboz9.querySelector('span')
const form = doboz9.querySelector('form')
const operator_selector = form.querySelector('select')
const input_number = form.querySelector('input[type="number"]')
const doboz9_button = form.querySelector("button")
const state = 9

doboz9_button.addEventListener('click', e => {
    e.preventDefault()
    if (operator_selector.value === "mult") {
        doboz9_span.innerText = state * input_number.value
    } else if (operator_selector.value === "div") {
        doboz9_span.innerText = (state / input_number.value).toFixed(1)
    } else if (operator_selector.value === "add") {
        doboz9_span.innerText = state + parseInt(input_number.value)
    } else {
        doboz9_span.innerText = state - input_number.value
    }
})