//regex
const productos = [
    { nombre: 'Producto A', precio: 10 },
    { nombre: 'Producto B', precio: 20 },
    { nombre: 'Producto C', precio: 30 },
    { nombre: 'Producto D', precio: 40 },
    { nombre: 'Producto E', precio: 50 },    
];

// Buscar la informacion dentro de un rango de precios
// caso busqueda secuencial

function busquedaSecuencial (arreglo, precioMinimo, precioMaximo) {
    let iteracion = 0
    let match = []
    for (let i = 0; arreglo.length; i++) {        
        iteracion++
        let current = arreglo[i] // objeto =>         
        console.log(iteracion)
        if (!current) return match
        if (current.precio >= precioMinimo && current.precio <= precioMaximo) {
            // index o objeto => indexOf // retorna el indice, -1 no encuentra nada             
            // slice
            match.push(current)
        }
    }
        
}
// Luis mendoza
// const busquedaSecuencial = (arreglo, precioMinimo, precioMaximo) => {
//     const match = []
//       arreglo.forEach(search => {
//         // no reterona un objeto
//           if(search.precio >= precioMinimo && search.precio <= precioMaximo){
//               match.push(search)
//           }
//       })
    
//     return match
//   }

const match = busquedaSecuencial(productos, 10, 30)
console.log(match)

/// metodos de interacion filter, find // de forma secuencial
function busquedaConJS(productos, precioMinimo, precioMaximo){
    // calback
    // filter que retorna un arreglo
    // find => primer objeto que encuentra    
    return productos
    .filter((producto) => producto.precio >= precioMinimo && producto.precio <= precioMaximo)
}

const match2 = busquedaConJS(productos, 10, 30)
console.log(match2)
