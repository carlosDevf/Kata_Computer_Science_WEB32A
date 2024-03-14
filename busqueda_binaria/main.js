// Una funcion que te regrese el arrelog de elementos que concidan con la busqueda
const productos = [
    { nombre: 'Producto A', precio: 10 },
    { nombre: 'Producto B', precio: 20 },
    { nombre: 'Producto C', precio: 30 }, //medio 2
    { nombre: 'Producto D', precio: 40 },
    { nombre: 'Producto E', precio: 50 },
    // Más productos...
];

// funcion retorna un arreglo
function busquedaBinaria(productos, precioMinimo, precioMaximo) {    
    let inicio = 0 // el index 
    let fin = productos.length - 1 //index
    let counter = 0
    const search = []    
    
    console.log({fin, inicio })

    // CUIDADO!!! 
    while (inicio <= fin) {              
        counter++
        console.log({ counter })
        let medio = Math.floor((inicio + fin) / 2) // index        
        let current = productos[medio] // { nombre: 'Producto C', precio: 30 }        

        if (current.precio >= precioMinimo && current.precio <= precioMaximo){            
            //evitar que añada uno que que ya existe
            search.push(current)            
        } else if (current.precio <= precioMinimo) {          
          inicio = medio + 1
        } else {
          fin = medio - 1          
        }
      // mejorar el codigo
      // la condicion evaluada se cumpla
      inicio++
    }
  
  return search
}

const rangoProductos = busquedaBinaria(productos, 10, 40)
console.log(rangoProductos)