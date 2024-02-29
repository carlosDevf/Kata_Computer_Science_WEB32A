// Palabras reservadas
// class para reservar clases
// new para ocupar clases 
// this. hace refrencia al objeto creado apartir de la instancia
// constructor
// CLASE
class Mascota {
    //inicializar una variable
    name
    type
    years
    owner
    patas = 4
    
    constructor(nombre, tipo, edad, dueno){
        this.name = nombre
        this.type = tipo
        this.years = edad
        this.owner = dueno
    }

    //getters  y //setters
    get vocalizacion(){
        return "Hola BART!"
    }

    //metodo
    truco(truco){
        // template string
        // alt + 096
        // DOM => insertar codigo html atravez de js
        // `${truco} asjdaljsldjalsjdlajsdljalsjd `
        // return this.name + " " + "te ve y " + " " + truco
        return `${this.name} te ve y ${truco}`
    }

    changeName(nombre){
        this.name = nombre
    }

    changeNameNumberPatas(patasnumber) {
        this.patas = patasnumber
    }
}

// como hacemos una instancia? new
const mascota1 = new Mascota("Huesos", "perro", "2", "Bart")
console.log(mascota1.vocalizacion)
console.log(mascota1.patas)

const mascota2 = new Mascota("Garfield", "gato", "3", "Jonh Bonachon")
console.log(mascota2.truco("Se para en dos patitas"))

console.log(mascota2.name)
mascota2.changeName("Felix")
console.log(mascota2.name)
console.log(mascota2.patas)
mascota2.changeNameNumberPatas(3)
console.log(mascota2.patas)

/// Como en la actualidad son las paginas web DATOS VIVOS
const saludar = (person) => {
    return `Hola mi nombre es ${person.name}`
}

const changeName = (nombre) => {
    /// funcion que se conecte a la base de datos y cambien el dato
}

// base de datos // no lo constri apartir de un objeto
// map o con un for
// cambio en contrato 
const carlos = {
    nombre: "Carlos"
}

console.log(saludar(carlos))