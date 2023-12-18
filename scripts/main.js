console.log("Hola Mundo")

// Evento de clic para cada tipo de televisor
document.querySelectorAll('.tv-type').forEach(function (element) {
    element.addEventListener('click', function () {
        var tvTitle = this.innerText;
        var tvImage = this.dataset.image;
        var tvText = this.getAttribute('data-text');

        Swal.fire({
            title: tvTitle,
            text: tvText,
            imageUrl: tvImage,
            imageWidth: 300,
            imageHeight: 300,
            imageAlt: tvTitle
        });
    });
});

function agregarAlCarrito(producto) {
    // Aquí debes implementar la lógica para agregar el producto al carrito
    // Puedes utilizar el identificador único (estos son 'plasma', 'lcd', 'led', 'oled') para identificar el producto específico
    // Puedes llamar a funciones o realizar operaciones adicionales según sea necesario
    console.log('Añadir al carrito:', producto);
    // Llama a tu función existente para agregar al carrito o implementa la lógica aquí
};
