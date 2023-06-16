function fotoProductos() {
  let productos = cargarCarritoLS();
  let contenido = "";

  if (cantidadTotalProductos() > 0) {
    contenido += `<table class="table">`;
    contenido += `<tr>
        <td colspan="3">&nbsp;</td>  
        <td class="text-end"><button class="btn btn-light btn-sm ms-2" onclick="vaciarCarrito();" title="Vaciar Carrito">Vaciar Carrito</button>
        </td>
        </tr>`;

    productos.forEach((producto) => {
      contenido += `<tr>
            <td><img src="${producto.imagen}" alt="${producto.nombre}" width="48"></td>
            <td class="align-middle">${producto.nombre}</td>
            <td class="align-middle"><b>$${producto.precio}</b></td>
            <td class="align-middle text-end"><img src="imagenes/trash3.svg" alt="Eliminar Producto" width="16" onclick="eliminarProducto(${producto.id});"></td>
            </tr>`;
    });

    contenido += `<tr>
        <td>&nbsp;</td>
        <td>Saldo Total</td>
        <td><b>$${sumaTotalProductos()}</b></td>    
        <td>&nbsp;</td>
        </tr>
        </table>`;
  } else {
    contenido += `<div class="alert alert-secondary text-center fw-light" role="alert">El carrito está vacío!</div>`;
  }

  document.getElementById("contenido").innerHTML = contenido;
}

function mostrarProductos() {
  // Implementa la lógica para mostrar los productos en la página
}

function agregarProducto(id) {
  // Implementa la lógica para agregar un producto al carrito
}

function eliminarProducto(id) {
  let productos = cargarCarritoLS();
  let index = -1;

  // Buscar el índice del producto en el arreglo
  for (let i = 0; i < productos.length; i++) {
    if (productos[i].id === id) {
      index = i;
      break;
    }
  }

  // Si se encontró el producto, eliminarlo del arreglo
  if (index !== -1) {
    productos.splice(index, 1);
    guardarCarritoLS(productos);
    fotoProductos();
  }
}

function calcularTotal() {
  // Implementa la lógica para calcular el total de los productos en el carrito
}

function vaciarCarrito() {
  localStorage.removeItem('carrito');
  fotoProductos();
}

fotoProductos();
botonCarrito();