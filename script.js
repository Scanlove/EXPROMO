const promoText = document.getElementById('promo');
const slideshowItems = document.querySelectorAll('.slideshow-item');
const gallery = document.getElementById('gallery');

// Esperar hasta que el texto "PROMO 2014" termine su animación
setTimeout(() => {
    let index = 0;

    function showSlideshow() {
        // Ocultar todos los elementos del slideshow
        slideshowItems.forEach(item => {
            item.style.opacity = 0;
        });

        // Mostrar el siguiente elemento
        slideshowItems[index].style.opacity = 1;

        // Pasar al siguiente elemento, si llega al final vuelve al principio
        index = (index + 1) % slideshowItems.length;

        // Repetir el proceso cada 4 segundos
        setTimeout(showSlideshow, 4000);
    }

    showSlideshow();

    // Mostrar la galería después de 30 segundos (5 imágenes + video)
    setTimeout(() => {
        gallery.classList.remove('hidden');
        gallery.style.opacity = 1;
    }, 30000);  // 30 segundos para que aparezca la galería
}, 2000);  // Después de 2 segundos cuando termina la animación del texto
