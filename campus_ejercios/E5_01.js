// Crear una función que encuentre el número más repetido en un array.
const a = [3,6,1,8,2,3,6,3,2,5,6, 6, 1,1,1,1,1,1,]
//Salida -> 6

function maxNumero (arreglo) {
  //   
  let coleccion = {}
  arreglo.forEach(v => {    
    coleccion[v] = (coleccion[v] || 0) + 1
  })  
  
  let maxValue = arreglo[0]
  let maxFrecuencia = 0
  
  //for in consulta el index // interar Objetos
  for (num in coleccion) {
     if (coleccion[num] > maxFrecuencia) {
       maxFrecuencia = coleccion[num]
       maxValue = num
     }
  } 
  
  return maxValue  
}

console.log(maxNumero(a), "el de la moda es")