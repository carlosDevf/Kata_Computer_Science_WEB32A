
const form = document.querySelector("form")
const todoList = document.querySelector("#todoList")
const tareasporhacer = []

form.addEventListener("submit", (e) => {
    e.preventDefault()
    // REACT, VANILLA JS
    const data = new FormData(form) // COLECCION DE DE ELEMENTOS DEL FORM
    // Object => values, keys, entries    
    const { newItem } = Object.fromEntries(data) // ESTE ITERA ESA COLECCION 
    // TODO opcional: 
    // BORRAR EL INPUT AL MOMENTO DE AÑADIRLO A LA LISTA
    // validar que el newItem tenga sea valido
    // ¿ahora como lo recuperamos?

    const li = document.createElement("li") //<li>Con la tarea</li>
    li.innerText = newItem
    todoList.appendChild(li)

    tareasporhacer.push(newItem)
    // guardando el localStorage
    localStorage.setItem("tareas", JSON.stringify(tareasporhacer))    
})

//crear un funcion que al cargar el DOM vaya a localsorage y revise que hay un 
// elemento llamado tareas

document.addEventListener("DOMContentLoaded", () => {
    console.log("hola ya inicie el dom")
    const tareasString = localStorage.getItem("tareas")
    const tareas = JSON.parse(tareasString)
    console.log(tareas, typeof tareas)
    // ya tenemos lo que esta en el localStorage
    // Iterar el arreglo
        // Crear cada li 
        // añadirlo
    // meterlo en tareasporhacer
    // chequen la linea 17-21

})
