const url = "https://rickandmortyapi.com/api/character"
fetch(url)
.then((respuesta) => respuesta.json())
.then((data) => mostrarData(data))

const mostrarData = (data) => {
    console.log("Data", data);
    let card = ``
    data.results.map((personaje) => {
        card += `<div class="card_personaje">
            <img class="image_personaje" src="${personaje.image}">
            <div class="detail">
            <h2 class="name_personaje">${personaje.name}</h2>
            <div class="caracteristicas_personaje">
            <ul>
            <li class="caracteristica">Estado: ${personaje.status}</li>
            <li class="caracteristica">Especie: ${personaje.species}</li>
            <li class="caracteristica">Ubicación: ${personaje.location.name}</li>
            </ul>
            </div>
            </div>
            </div>
            `
        document.getElementById("containerCardsRyM").innerHTML = card
    })
    
}
