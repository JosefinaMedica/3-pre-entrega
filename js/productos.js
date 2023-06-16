const productos = [
    {id:1, nombre: "Cunero Virgen", imagen:"imagenes/cunero.png", precio:1000, categoria:"Peques"},
    {id:2, nombre: "Cruz chica Paloma", imagen:"imagenes/cruzchica.png", precio:1500, categoria:"Rústica"},
    {id:3, nombre: "Cuadrito San Benito", imagen:"imagenes/cuadrito.png", precio:2000, categoria:"Tradicional"},
    {id:4, nombre: "Angelito", imagen:"imagenes/angelito.png", precio:2500, categoria:"Peques"},
    {id:5, nombre: "Vela", imagen:"imagenes/vela2.png", precio:1000, categoria:"Tradicional"},
    {id:6, nombre: "Vela", imagen:"imagenes/vela1.png", precio:1500, categoria:"Tradicional"},
    {id:7, nombre: "Cunero Angel", imagen:"imagenes/cuneroceleste.png", precio:2000, categoria:"Peques"},
    {id:8, nombre: "Cuadrito S. Flia", imagen:"imagenes/cuadro.png", precio:2500, categoria:"Rústica"},
];

function guardarProductosLS() {
    localStorage.setItem("productos", JSON.stringify(productos));
}

function cargarProductosLS() {
return JSON.parse(localStorage.getItem("productos"));
}

function agregarProducto(id) {
    const carrito = cargarCarritoLS();
    const producto = buscarProducto(id);
    carrito.push(producto);
    guardarCarritoLS(carrito);
    botonCarrito();
}


guardarProductosLS();