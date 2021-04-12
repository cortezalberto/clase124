let visitados =
    [
        {
            id: "1",
            name: "Cafetera Moulinex",
            descuento: 40,
            price: 6770,
            image: "images/img-cafetera-moulinex.jpg"


        },

        {
            id: "2",
            name: "MacBook Pro 2019",
            descuento: 20,
            price: 230000,
            image: "images/img-macbook-pro-2019.jpg"
        },


        {
            id: "3",
            name: "Samsung Galaxy S10",
            descuento: 10,
            price: 70500,
            image: "images/img-samsung-galaxy-s10.jpg"
        },

        {
            id: "4",
            name: "SmartTv Samsung 43",
            descuento: 10,
            price: 23000,
            image: "images/img-tv-samsung-smart.jpg"
        }
    ]








visitados.forEach(function (producto) {
    console.log(producto.id)
    console.log(producto.name)

})

// agrego al final del Array

let fila =  {
    id: "5",
    name: "SmartTv Samsung 60 Nacional",
    descuento: 15,
    price: 50000,
    image: "images/img-tv-samsung-smart.jpg"
}


visitados.push(fila)

// leer un array completo
console.log('Leo el Array por segunda vez y muestro todos los productos con el alta ')
visitados.forEach(function (producto) {
    console.log(producto.id)
    console.log(producto.name)

})

// busco el registro 2

console.log('busco el producto con ID 2')
const resultado = visitados.find(producto => producto.id === '2');

console.log(resultado.name);

// busco por un criterio
console.log('busco el producto por name')
const resultadoNombre = visitados.find(producto => producto.name === 'MacBook Pro 2019');

console.log(resultadoNombre.image);

// elimino


visitados = visitados.filter((i) => i.id !== '2'); // filtramos
console.log(visitados);

