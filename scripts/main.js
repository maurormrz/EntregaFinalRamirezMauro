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