const promoText = document.getElementById('promo');
const slideshowItems = document.querySelectorAll('.slideshow-item');
const gallery = document.getElementById('gallery');
let index = 0;

// Añadir estilos para que las imágenes aparezcan grandes y centradas
function setSlideshowStyles(item) {
    item.style.position = 'absolute';
    item.style.top = '50%';
    item.style.left = '50%';
    item.style.transform = 'translate(-50%, -50%)';  // Centrar en la página
    item.style.width = '80%';  // Tamaño grande para las imágenes
    item.style.height = 'auto';  // Mantener proporción
    item.style.opacity = 1;
}

// Mostrar el slideshow una vez
function showSlideshow() {
    // Ocultar todos los elementos del slideshow
    slideshowItems.forEach(item => {
        item.style.opacity = 0;
        item.classList.add('hidden');
    });

    // Mostrar el siguiente elemento en el centro y grande
    slideshowItems[index].classList.remove('hidden');
    setSlideshowStyles(slideshowItems[index]);

    // Pasar al siguiente elemento
    index++;

    // Si hemos llegado al final, mostrar la galería y detener el slideshow
    if (index < slideshowItems.length) {
        setTimeout(showSlideshow, 4000); // Mostrar la siguiente imagen o video cada 4 segundos
    } else {
        setTimeout(() => {
            // Después de que todas las imágenes hayan aparecido, mostrar la galería estática
            gallery.classList.remove('hidden');
            gallery.style.opacity = 1;
        }, 4000); // Esperar antes de mostrar la galería estática
    }
}

// Iniciar el slideshow después de 2 segundos
setTimeout(showSlideshow, 2000);
