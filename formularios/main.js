console.log("Fomrularios")
///

const nombreForm = document.querySelector("#nombre")
const emailFomr = document.querySelector("#email")
const buttonEnviar = document.querySelector("#enviar")

function updateEvent(e) {
    console.log(e.target.value)
}

function handledSubmit () {
    // implentar la logica de TODO
    // guardar en local. pintar en el hmtl, recuperar
    // validar que todos los valores sean correctos
}

nombreForm.addEventListener('input', updateEvent)
emailFomr.addEventListener('input', updateEvent)
