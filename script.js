const promoText = document.getElementById('promo');
const slideshowItems = document.querySelectorAll('.slideshow-item');
const gallery = document.getElementById('gallery');
const galleryContent = document.getElementById('gallery-content');

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
        slideshowItems[index].classList.remove('hidden');

        // Pasar al siguiente elemento, si llega al final vuelve al principio
        index = (index + 1) % slideshowItems.length;

        // Repetir el proceso cada 4 segundos
        setTimeout(showSlideshow, 4000);
    }

    showSlideshow();

    // Mostrar la galería después de 30 segundos (5 imágenes + video)
    setTimeout(() => {
        // Mostrar la galería estática
        gallery.classList.remove('hidden');
        gallery.style.opacity = 1;

        // Quitar las animaciones del slideshow
        slideshowItems.forEach(item => {
            item.classList.add('hidden');
        });

        // Añadir animación suave para el subtítulo de la galería
        const caption = document.querySelector('.caption');
        caption.style.opacity = 0;
        setTimeout(() => {
            caption.style.opacity = 1;
        }, 500);
    }, 30000);  // 30 segundos para que aparezca la galería
}, 2000);  // Después de 2 segundos cuando termina la animación del texto
