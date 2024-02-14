/*
 * Template literal
 */

const photos = [
  {
    id: 1,
    title: "accusamus beatae ad facilis cum similique qui sunt",
    thumbnailUrl: "https://via.placeholder.com/150/92c952"
  },
  {
    id: 2,
    title: "reprehenderit est deserunt velit ipsam",
    thumbnailUrl: "https://via.placeholder.com/150/771796"
  },
  {
    id: 3,
    title: "officia porro iure quia iusto qui ipsa ut modi",
    thumbnailUrl: "https://via.placeholder.com/150/24f355"
  },
  {
    id: 4,
    title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
    thumbnailUrl: "https://via.placeholder.com/150/d32776"
  }
];

let photoListTemplate = '';

for (const photo of photos) {
    photoListTemplate = photoListTemplate + `<div class="card p-5">
    #${photo.id} <br>
    ${photo.title}
    <img src="${photo.thumbnailUrl}">
    </div>`
}

document.getElementById('photos-list-container').innerHTML = photoListTemplate;


// 1. feladat
// Ha a kártya felett van az egér, akkor nőjön másfélszeresére a betűméret!

const cards = document.querySelectorAll(".card")
for (const card of cards) {
  card.addEventListener("mouseover", e => {
    card.style.fontSize = `${1.5}rem`
  })
}

// 2. feladat
// Ha a kép felett van az egér, akkor legyen fölötte 20px-nyi margó!

const card_imgs = document.querySelectorAll("img")
for (const img of card_imgs) {
  img.addEventListener("mouseover", e => {
    img.style.paddingTop = "20px";
  })
}

// 3. feladat
// A kártyára kattintva kapjon egy kigenerált háttérszínt a kártya!

const color_list = ["red", "yellow", "green", "blue", "lightblue", "brown", "pink", "purple"]

for (const card of cards) {
  card.addEventListener("click", e => {
    const random_szin = Math.floor(Math.random() * color_list.length)
    const random_szin_index = color_list[random_szin]
    card.style.backgroundColor = `${random_szin_index}`
  })
}

// 4. feladat
// A képre jobb egérgombbal kattintva tűnjön el a kép 2 másodpercre!

for (const img of card_imgs) {
  img.addEventListener("contextmenu", e => {
    console.log(e)
    img.style.visibility = "hidden"
    setTimeout(() => {
       img.style.visibility = "visible"
    }, 2000)
  })
}