import Swal from 'sweetalert2'

var miBoton = document.getElementById('');

  miBoton.addEventListener('click', function() {
    
    Swal.fire({
        title: "Sweet!",
        text: "Modal with a custom image.",
        imageUrl: "https://unsplash.it/400/200",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image"
      });
    });