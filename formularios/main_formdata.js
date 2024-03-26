console.log("Fomrularios")
const form = document.querySelector("form")
const h2saludo = document.querySelector("#saludo")

function handledSubmit (e) {
    // implentar la logica de TODO
    // guardar en local. pintar en el hmtl, recuperar
    // validar que todos los valores sean correctos
    // evitar que se mande la informacion
    e.preventDefault()
    console.log("Submited")
    // p2 crear un objeto (clave / valor) de los
    // elementos dentro del form 
    const dataForm = new FormData(form)
    console.log(dataForm)
    // p3 iterar el objeto para sacarle la info
    const data = Object.fromEntries(dataForm)
    console.log({ data })
    // PARES CLAVE / VALOR 
    // va a guardar el dato hasta que alguien borre chache
    //localStorage.setItem("email", data.email)

    h2saludo.innerText = "Hola " + data.email
    // va a guardar el dato durante la sesion => cierro el navegador o la pestaña
    // para guardar un objeto debemos primero convertirlo en un string
    sessionStorage.setItem("email", JSON.stringify(data))    
}


// submit enviar data
form.addEventListener("submit", handledSubmit)


document.addEventListener("DOMContentLoaded", function(){
    // buscar en el sessionStorage si hay un valor registrado
    const email = sessionStorage.getItem("email")
    // es cuando el objeto en la sesion o en local storage sea un objeto 
    // que anteriormente era un objeto que fue convertido con JSON.stringify
    const emailObject = JSON.parse(email)

    /* if (email) {
        h2saludo.innerText = "Hola " + emailObject.email
    } else {
        h2saludo.innerText = "¿Eres nuevo?"
    } */
    // pintarlo en el h2 correspondiente
    //ternaria
    h2saludo.innerText = email 
        ? "Hola " + emailObject.email 
        : "¿Eres Nuevo?"
})

