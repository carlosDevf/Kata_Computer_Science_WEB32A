// Metodos Publicos y P
class Animal {
    constructor(nombre, edad, raza){
        this.raza = raza
        this.nombre = nombre
        this.tipo = "perro"
    }

    //con el numera puede crear metodos privados
    //dentro de la misma clase
    #hacerSonido(){
        return "¡Guau!"  // string
    }

    getSonido(){
        return this.#hacerSonido()
    }
}

// const fido = new Animal("Fido", "Pastro Aleman")
// console.log(fido.#hacerSonido())
// console.log(fido.tipo)

///  nueva clase       // clase padre
class Tortuga extends Animal{
    constructor(_, __, raza){
        // si quiero ocupar metodos o propiedades de la clase padre ocupo el super
        super("", "", raza)
        // Polimorfimos
        this.tipo = "tortuga"
    }

    hacerSonido() {
        // Polimorfimos
        //nuestros propios metodos apartir de un metodo padre
        return super.hacerSonido() + " Meh!" // no deberia de cambiar el tipo
    }
}

const tortuga = new Tortuga("Bob", "Tortuga", "marina")
console.log("🚀 ~ tortuga:", tortuga)
// console.log(tortuga.hacerSonido())
console.log(tortuga.getSonido())



