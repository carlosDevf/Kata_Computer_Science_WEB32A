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

// 
// class Personaje {
//     nombre;
//     vida;
//     fuerza;
//     energia;
  
//     constructor(name, life, strength, energy) {
//       this.nombre = name
//       this.vida = life
//       this.fuerza = strength
//       this.energia = energy
//     }
// }

// Jonathan code Ejercicio 1
class Personaje {
    // Atributos existentes...
    constructor(nombre,edad,peso,estatura,energia){
        this.nombre = nombre;
        this.edad = edad;
        this.peso = peso;
        this.estatura = estatura;
        this.energia = energia;
    }
  
    correr(distancia) {
      return this.energia = this.energia - distancia;
    }
  
    descansar(tiempo) {
      // Incrementa la energía en función del tiempo de descanso.
      // Por ejemplo, cada unidad de tiempo incrementa 2 puntos de energía.
      return this.energia = this.energia + (tiempo * 2);
    }
  }
  
  const flash = new Personaje("Barry Allen",20,50,1.73,100);
  console.log("Flash corriò y redujo su energia en " + flash.correr(50) + " puntos");
  console.log(flash.energia)
  console.log("Flash descansó y recuperó su energia en " + flash.descansar(5) + " puntos");
  console.log(flash.energia)


// const bart = new Personaje("BART", 10, 5, 5)
// console.log(bart)

