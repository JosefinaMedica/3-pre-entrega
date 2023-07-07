
let productos = [];

fetch("./js/productos.json")
.then(response => response.json())
.then (data => {
    productos = data;
    cargarProductosLS(productos);
    console.log(productos)
})



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