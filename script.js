const promoText = document.getElementById('promo');
const slideshowItems = document.querySelectorAll('.slideshow-item');
const slideshowContainer = document.getElementById('slideshow');  // Referencia al contenedor del slideshow
const gallery = document.getElementById('gallery');
let index = 0;

// Añadir estilos para que las imágenes aparezcan grandes y centradas
function setSlideshowStyles(item) {
    item.style.position = 'absolute';
    item.style.top = '50%';
    item.style.left = '50%';
    item.style.transform = 'translate(-50%, -50%)';  // Centrar en la página
    item.style.width = '70%';  // Tamaño grande para las imágenes
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

    // Si hemos llegado al final, mostrar la galería y ocultar el slideshow
    if (index < slideshowItems.length) {
        setTimeout(showSlideshow, 2000); // Mostrar la siguiente imagen o video cada 4 segundos
    } else {
        setTimeout(() => {
            // Después de que todas las imágenes hayan aparecido, ocultar el contenedor del slideshow
            slideshowContainer.style.display = 'none';  // Desaparecer el slideshow de la página
            gallery.style.display = 'block';  // Mostrar la galería
            gallery.style.opacity = 1;  // Transición suave para la galería
        }, 4000); // Esperar antes de mostrar la galería estática
    }
}

// Iniciar el slideshow después de 2 segundos
setTimeout(showSlideshow, 2000);
