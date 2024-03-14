//Crear una función que encuentre las letras en un arreglo de números y regrese un nuevo arreglo de letras.

const letrasynumeros = [8,"e",7,2,"a","d","f",2,3,1,4,3]

function soloLetras(arreglo) {
  // iterar
  // consultar para saber si se trata de una letra o un numero  
  // crear un arreglo que vaya almacenando las letras
  // retornar en un arreglo solo las letras
  //
  // let almacen = []
  // arreglo.forEach(v => {
  //   if (typeof v === 'string') almacen.push(v)
  // })
  
  // return almacen
  return arreglo.filter(v => typeof v === 'string')
}

const resultado = soloLetras(letrasynumeros)
console.log(resultado)