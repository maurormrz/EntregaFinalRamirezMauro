// Evento de clic para cada tipo de televisor
document.querySelectorAll('.tv-type').forEach(function (element) {
  element.addEventListener('click', function () {
      let tvTitle = this.innerText;
      let tvImage = this.dataset.image;
      let tvText = this.getAttribute('data-text');
      Swal.fire({title: tvTitle, text: tvText, imageUrl: tvImage, imageWidth: 300, imageHeight: 300, imageAlt: tvTitle});
  });
});

// Lista de productos disponibles
const productos = {
plasma: { nombre: "TV Plasma", precio: 30000 },
lcd: { nombre: "TV LCD", precio: 60000 },
led: { nombre: "TV LED", precio: 140000 },
oled: { nombre: "TV OLED", precio: 500000 },
};

// Carrito de compras
const carrito = [];

// Función para agregar un producto al carrito
function agregarAlCarrito(productoId) {
const producto = productos[productoId];

if (producto) {
  carrito.push(producto);
  Swal.fire({title: "Añadido al carrito", text: `${producto.nombre} ha sido añadido al carrito.`, icon: "success", timer: 1000, showConfirmButton: false});
  actualizarCarrito();
}
}

// Función para actualizar la vista del carrito
function actualizarCarrito() {
const carritoItems = document.getElementById("carritoItems");
const totalElement = document.getElementById("total");

// Limpiar el contenido del carrito
carritoItems.innerHTML = "";

// Calcular el total
let total = 0;

// Recorrer los productos en el carrito
carrito.forEach((producto) => {
  const listItem = document.createElement("li");
  listItem.className = "list-group-item d-flex justify-content-between align-items-center";
  listItem.textContent = `${producto.nombre} $${producto.precio.toFixed(2)}`;

  // Agregar botón para quitar elemento del carrito
  const removeButton = document.createElement("button");
  removeButton.className = "btn btn-danger btn-sm";
  removeButton.innerHTML = '<i class="bi bi-x"></i>';
  removeButton.addEventListener("click", () => quitarDelCarrito(producto));
  
  listItem.appendChild(removeButton);
  carritoItems.appendChild(listItem);

  // Sumar al total
  total += producto.precio;
});

// Actualizar el total
totalElement.textContent = `$${total.toFixed(2)}`;
}

// Función para quitar un producto del carrito
function quitarDelCarrito(producto) {
const index = carrito.indexOf(producto);
if (index !== -1) {
  carrito.splice(index, 1);
  Swal.fire({title: "Producto eliminado", text: `${producto.nombre} ha sido eliminado del carrito.`, icon: "success", timer: 1000, showConfirmButton: false});
  actualizarCarrito();
}
}

// Función para vaciar el carrito
function vaciarCarrito() {
carrito.length = 0;
Swal.fire({title: "Carrito vaciado", text: "El carrito ha sido vaciado.", icon: "success", timer: 1000,  showConfirmButton: false});
actualizarCarrito();
}

// Event listeners
document.getElementById("botonVaciar").addEventListener("click", vaciarCarrito);

// Opiniones de Usuarios

document.addEventListener('DOMContentLoaded', cargarOpiniones);

function cargarOpiniones() {
  const url = 'https://jsonplaceholder.typicode.com/comments?_limit=5'; // Obtener 5 comentarios
  fetch(url)
    .then(response => response.json())
    .then(opiniones => mostrarOpiniones(opiniones))
    .catch(error => console.error('Error al obtener opiniones:', error));
}

function mostrarOpiniones(opiniones) {
  const container = document.getElementById('opiniones-container');

  opiniones.forEach(opinion => {
    const comentarioDiv = document.createElement('div');
    comentarioDiv.className = 'comentario';
    comentarioDiv.innerHTML = `
      <strong>${opinion.name}</strong>
      <p>"${opinion.body}"</p>
      <hr>
    `;
    container.appendChild(comentarioDiv);
  });
}