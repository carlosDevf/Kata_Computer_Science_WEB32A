//Crea una función que ordene de forma descendente un arreglo de números.
// metodo SORT JS
const numeros = [9,3,1,6,5,88,-1,2,7]
// 
//Salida -> [88,9,7,6,5,3,1,-1]
const ejercicio1 = numeros.sort((current, next) => next - current)
// for (i) {
//     for (j; numeros - i + 1) {
//         numeros[j] - numeros[j +1]
//     }
// }

// Crear una función que ordene una lista de caracteres según su valor decimal de acuerdo a la tabla ascii ref: http://www.asciitable.com/.
const letras = ["b","h","w","e","a"]
//Salida -> [‘a’,‘b’,‘e’,‘h’,‘w’]
function sortLetras (arreglo){
    return arreglo.sort((current, next) => {
        return current.charCodeAt(0) - next.charCodeAt(0)
    })
}

//4.- Crear una funcion que ordene palabras de menor numero de letras a mayor.
const palabras = ["adios","hola","maximo","uno","despedida"]
//Salida -> ["uno”,“hola”,“adios”,“maximo”,“despedida”]

function contaPalabras(arreglo) {
    return arreglo.sort((current, next) => {
        return current.length - next.length
    })
}

// Crear una función que ordene un arreglo de coordenadas x, y desde a partir del punto mas cercano a 0,0.
const coordenadas = [[7,3],[2,2],[1,0],[4,3]]
// Distancia euclidiana 
//Salida -> [[1,0],[2,2],[4,3],[7,3]]

function calcularDistancia(coor) {
                        //[7,3]
                        // 0 1
                       //7x7     3x3
    return Math.sqrt(coor[0] * coor[0] + coor[1] * coor[1]) //3
}

function sortDetPuntosEnUnMapa(arreglo) {
    return arreglo.sort((current, next) => {
        const primerPunto = calcularDistancia(current)
        const segundoPunto = calcularDistancia(next)
        return primerPunto - segundoPunto
    })
}

console.log(sortDetPuntosEnUnMapa(coordenadas))