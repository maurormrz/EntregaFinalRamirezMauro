document.addEventListener('DOMContentLoaded', function () {
    // Obtener el total del carrito de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const totalCarrito = urlParams.get('total');
  
    if (totalCarrito) {
      // Mostrar el total del carrito en la consola
      console.log('Total del carrito:', totalCarrito);
    }
  });  