//Crear una función que busque el número más grande en un arreglo.
const b = [1,4,80,7,2,4,1,9,4,0,2,4,5,12]
//Salida -> 12

function minNumber(arreglo) {
  console.log(arreglo)
  // evaluar por pares // TimSort
  // se crear numeros random 
  const r = arreglo.sort((current, next) => current - next)
  // return r[arreglo.length - 1]
  // at es un metodo que regresa el ultimo elemento
  // return r.at(-1)  
  return r[0]
}

minNumber(b)