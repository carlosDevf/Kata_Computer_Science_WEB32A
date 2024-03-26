// como consumir un json TEMAS DE MODULO JAVASCRIPT AVANZADO
//  funciones asyncronas => 
//  que son las promesas // POR QUE TARDAN EN EJECUTARSE
//  funciones async await
//  STACK 
//  type="module" 
//  instalar paquetes, librerias
//  regex
const personajesTAG = document.querySelector("#personajeTag")

async function getCharacters(){
    // fetch //// axios
    return fetch("./db.json")
    .then((res) => {
        return res.json()
    })
    .then(res => {
        return res.characters    
    })
    .catch()
    .finally()
}

/* document.addEventListener("DOMContentLoaded", async function(){
    const personajes = await getCharacters()
    console.log({ personajes })
    personajes.forEach(p =>  {        
        let li = document.createElement("li")
        li.innerHTML = p.bio
        personajesTAG.appendChild(li)

    })
}) */

const form = document.querySelector("form")
form.addEventListener('submit', async function(e){
    e.preventDefault()
    
    // lista de personajes de un archivo json
    const personajes = await getCharacters()
    console.log({ personajes })

    const formData = new FormData(form)
    const data = Object.fromEntries(formData)
    
    // lo que quiero buscar
    console.log({ data })
    const find = personajes.find(personaje => personaje.name.toLowerCase() === data.personajeBuscado.toLowerCase())
    console.log(find)

/*  <h5 id="name"></h5>
    <p id="bio"></p>   */
     const h5 = document.querySelector("#name")
     const bio = document.querySelector("#bio")
    if (find) {
        h5.innerText = find.name
        bio.innerText = find.bio
        return 
    } else {
        alert("no se encontro personaje")
    }
})