const productos = [
    {id:1, nombre: "Cunero", imagen:"imagenes/cunero.png", precio:1000},
    {id:2, nombre: "Cruz chica", imagen:"imagenes/cruzchica.png", precio:1500},
    {id:3, nombre: "Cuadrito", imagen:"imagenes/cuadrito.png", precio:2000},
    {id:4, nombre: "Angelito", imagen:"imagenes/angelito.png", precio:2500},
];

function guardarProductosLS() {
    localStorage.setItem("productos", JSON.stringify(productos));
}

function cargarProductosLS() {
return JSON.parse(localStorage.getItem("productos"));
}




guardarProductosLS();


function fotoProductos() {
let productos = cargarProductosLS();
let contenido = "";

productos.forEach(producto => {
  contenido += `<div class="col-md-3">
    <div class="card text-center border border-0" style="width: 18rem;">
      <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
      <div class="card-body">
        <p class="card-text text-$gray-600"><b>$${producto.precio}</b></p>
        <h1>${producto.nombre}</h1>
        <p><button class="btn btn-secondary" onClick="verProducto(${producto.id});">Ver Producto</button></p>
      </div>
    </div>
  </div>`;
});

document.getElementById("contenido").innerHTML = contenido;
};

function verProducto(id) {
let productos = cargarProductosLS();
let producto = producto.find(item => item.id == id)
localStorage.setItem("producto", JSON.stringify(producto));
location.href = "ver-producto.html";

};



fotoProductos();

