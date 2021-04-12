let controlador = require('./controladorProducto')
// PROGRAMA PRINCIPAL
console.log('-----LEO TODOS LOS PRODUCTOS DEL ARRAY ---')
controlador.leerTodos()

console.log('-----AGREGO UN PRODUCTO ---')
controlador.agregarProducto()

console.log('-----CON EL AGREGADO ---')
controlador.leerTodos()


console.log('-----BUSCO POR ID ---')
let idBuscar = '1'
let encontrado = controlador.buscarXId(idBuscar)
console.log(encontrado)


console.log('-----BUSCO POR NOMBRE ---')
let nombreBuscar = 'MacBook Pro 2019'
let encontradoNombre = controlador.buscarXNombre(nombreBuscar)
console.log(encontradoNombre)

