document.addEventListener('DOMContentLoaded', function () {
    // Obtener el total del carrito de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const totalCarrito = parseFloat(urlParams.get('total'));

    // Obtener elementos del DOM
    const cuotasForm = document.getElementById('cuotasForm');
    const precioTotalSpan = document.getElementById('precioTotal');
    const radioCuotas = cuotasForm.elements['cuotas'];

    // Función para manejar el cambio en los radio buttons
    function handleCuotasChange() {
        const cuotasSeleccionadas = parseInt(radioCuotas.value);
        let precioTotal;

        if (cuotasSeleccionadas === 1) {
            precioTotal = totalCarrito;
        } else {
            precioTotal = (totalCarrito / cuotasSeleccionadas).toFixed(2);
        }

        // Mostrar el precio total en el span
        precioTotalSpan.textContent = precioTotal;
    }

    // Agregar evento de cambio a los radio buttons
    cuotasForm.addEventListener('change', handleCuotasChange);

    // Inicializar el precio total con el valor original
    precioTotalSpan.textContent = totalCarrito.toFixed(2);
});