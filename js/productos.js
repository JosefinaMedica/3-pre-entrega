
async function mostrarProductos() {
    const productos = await cargarProductos()
    let contenido = "";
    productos.forEach(producto => {
      contenido += `<div class="col-md-3 mb-5">
        <div class="card text-center border border-0" style="width: 18rem;">
          <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
          <div class="card-body">
            <p class="card-text text-gray-600 h4 pb-2 mb-4 tbg-secondary border-bottom border-secondary" style="font-size: smaller;"><b>$${producto.precio}</b></p>
            <h5 class="text-uppercase fw-light">${producto.nombre}</h5>
            <p><button class="btn btn-light btn-sm" onClick="verProducto(${producto.id});">Ver Producto</button></p>
          </div>
        </div>
      </div>`;
    });
    document.getElementById("contenido").innerHTML = contenido;
  }
  
  function verProducto(id) {
    guardarIdProductoSeleccionado(id);
    location.href = "ver-producto.html";
  }
  
  async function cargarProductos() {
    return (await fetch("./js/productos.json")).json();
  }
  
  mostrarProductos();