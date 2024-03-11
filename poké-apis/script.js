async function getPokemonAPI() {
    try{

        const pokemonName = document.querySelector('#pokemonName').value.toLowerCase()

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

        if (!response.ok) {
            throw new Error("Nincs ilyen nevű pokémon!")
        }

        const data = await response.json()
        document.querySelector('.pokemonPicture').innerHTML = `<img src="${data.sprites.front_default}" alt="">`

    } catch(error) {
        console.error("Hiba: ", error)
    }
}