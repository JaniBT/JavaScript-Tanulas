// https://randomuser.me/api/

const fileInput = document.getElementById("kep")
const filePreview = document.getElementById("file-preview")

fileInput.addEventListener("change", handleFileSelect)

function handleFileSelect(event) {
  const file = event.target.files[0]
  const reader = new FileReader()

  reader.onload = function (event) {
    const fileContent = event.target.result;
    filePreview.innerHTML = `<img src="${fileContent}" alt="Preview">`
  };

  reader.readAsDataURL(file)
}

const API_URL = 'https://randomuser.me/api/'
const user_sent = document.querySelector('#user')

user_sent.onsubmit = (e) => {
    e.preventDefault()
    let fullName = e.target.elements.nev.value
    let szamNem = e.target.elements.nem.value
    let dataGender
    if (szamNem == "0") {
        dataGender = "Férfi"
    } else {
        dataGender = "Nő"
    }
    let bornDate = e.target.elements.szulDat.value
    let dataCity = e.target.elements.lakhely.value
    let dataEmail = e.target.elements.email.value
    let dataMobileNumber = e.target.elements.telSzam.value
    let dataUserName = e.target.elements.felhaszNev.value
    let dataPassword = e.target.elements.jelszo.value
    let dataProfilePicture = e.target.elements.kep.value

    // const data = {
    //     name: fullName,
    //     gender: dataGender,
    //     date: bornDate,
    //     location: dataCity,
    //     email: dataEmail,
    //     login: dataUserName,
    //     password: dataPassword,
    //     phone: dataMobileNumber,
    //     picture: dataProfilePicture
    // }

    fetch(API_URL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify()
    })
    .then(response => response.json)
    .then(data => {
        console.log(data)
    })
    .catch(error => console.error("Error: ", error))
}

let user = {}

document.querySelector('#template-data-btn').onclick = (e) => {
    fetch(API_URL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(response => response.json())
    .then(data => {
        user = data.results[0]
        render()
    })
    .catch(error => console.error("Hiba: ", error))
}

function render() {
    document.querySelector('#nev').value = user.name.title + " " + user.name.first + " " + user.name.last
    document.querySelector('#neme').value = user.gender == "male" ? "0" : "1"
    document.querySelector('#szuletes').value = user.dob.date.split('T')[0]
    document.querySelector('#lakhely').value = user.location.street.name + " " + user.location.street.number
    document.querySelector('#email').value = user.email
    document.querySelector('#telSzam').value = user.phone
    document.querySelector('#felhaszNev').value = user.login.username
    document.querySelector('#jelszo').value = user.login.password
    document.querySelector('#kep').innerHTML = `<img src="${user.picture.thumbnail}" alt="">`
}