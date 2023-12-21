document.addEventListener('DOMContentLoaded', function () {
    // Obtener el total del carrito de la otra página
    const urlParams = new URLSearchParams(window.location.search);
    const totalCarrito = parseFloat(urlParams.get('total'));

    const cuotasForm = document.getElementById('cuotasForm');
    const precioTotalSpan = document.getElementById('precioTotal');
    const radioCuotas = cuotasForm.elements['cuotas'];
    const correoInput = document.getElementById('correo');
    const completarPagoButton = document.getElementById('completarPago');

    // Función para validar el correo
    function validarCorreo() {
        const correoValue = correoInput.value;
        const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correoValue);

        if (!correoValido) {
            Swal.fire({icon: 'error', title: 'Error', text: 'Ingrese un correo electrónico válido'});
        }
    }

    // Función para calcular el precio en cuotas
    function calcularPrecioCuotas(cuotas) {
        return (totalCarrito / cuotas).toFixed(2);
    }

    // Función para manejar los radio buttons
    function handleCuotasChange() {
        const cuotasSeleccionadas = parseInt(radioCuotas.value);
        let precioTotal;

        if (cuotasSeleccionadas === 1) {
            precioTotal = totalCarrito.toFixed(2);
        } else {
            precioTotal = calcularPrecioCuotas(cuotasSeleccionadas);
        }

        // Mostrar el precio total en el span
        precioTotalSpan.textContent = precioTotal;
    }

    // Función para manejar el botón de completar pago
    function handleCompletarPagoClick() {
        const cuotasSeleccionadas = parseInt(radioCuotas.value);
        if (isNaN(cuotasSeleccionadas)) {
            Swal.fire({icon: 'error', title: 'Error', text: 'Seleccione una opción de cuotas'});
            return;
        }

        // Verificar si el correo es válido
        const correoValue = correoInput.value;
        const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correoValue);

        if (!correoValido) {
            Swal.fire({icon: 'error', title: 'Error', text: 'Ingrese un correo electrónico válido'});
            return;
        }

        Swal.fire({icon: 'success', title: '¡Éxito!', text: `Se envió el código de seguimiento al correo: ${correoValue}`});
    }

    cuotasForm.addEventListener('change', handleCuotasChange);

    completarPagoButton.addEventListener('click', handleCompletarPagoClick);

    // Inicializar el precio total con el valor original
    precioTotalSpan.textContent = totalCarrito.toFixed(2);
});