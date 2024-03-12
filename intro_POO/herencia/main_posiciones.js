
// const fido = new Animal("Fido", "Pastro Aleman")
// console.log(fido.nombre)
// console.log(fido.tipo)
//Todo depende de las posiciones
class Animal {
    constructor(nombre, edad, raza){
        this.raza = raza
        this.nombre = nombre
        this.tipo = "perro"
    }
}

///  nueva clase       // clase padre
class Tortuga extends Animal{
    constructor(_, __, raza){
        // si quiero ocupar metodos o propiedades de la clase padre ocupo el super
        super("", "", raza)
        // Polimorfimos
        this.tipo = "tortuga"
    }
}

const tortuga = new Tortuga("Bob", "Tortuga", "marina")
console.log("🚀 ~ tortuga:", tortuga)
console.log(tortuga.raza)
console.log(tortuga.nombre)
console.log(tortuga.tipo)


