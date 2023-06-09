function fotoProducto() {
const producto = JSON.parse(localStorage.getItem("producto"));
let contenido = `<div class="col-md-4">
<img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}"></img>
</div>
<div class="col-md-4">
<h2>${producto.nombre}</h2>
 <p class="card-text text-$gray-600"><b>$${producto.precio}</b></p>
</div>`;

document.getElementById("contenido").innerHTML = contenido;

}

fotoProducto();