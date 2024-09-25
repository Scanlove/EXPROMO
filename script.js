const promoText = document.getElementById('promo');
const slideshowItems = document.querySelectorAll('.slideshow-item');
const gallery = document.getElementById('gallery');
const galleryContent = document.getElementById('gallery-content');

let index = 0;
let repeatCount = 0;
const maxRepeats = 2;  // Número de veces que el ciclo se repetirá

// Mostrar el slideshow y repetir 2 veces
function showSlideshow() {
    // Ocultar todos los elementos del slideshow
    slideshowItems.forEach(item => {
        item.style.opacity = 0;
        item.classList.add('hidden');
    });

    // Mostrar el siguiente elemento
    slideshowItems[index].classList.remove('hidden');
    slideshowItems[index].style.opacity = 1;

    // Pasar al siguiente elemento, si llega al final vuelve al principio
    index = (index + 1) % slideshowItems.length;

    // Si hemos completado una vuelta al slideshow
    if (index === 0) {
        repeatCount++;
    }

    // Repetir el proceso o detener cuando se haya repetido el máximo
    if (repeatCount < maxRepeats) {
        setTimeout(showSlideshow, 4000);  // Repetir cada 4 segundos
    } else {
        // Después de dos repeticiones, mostrar la galería estática
        setTimeout(() => {
            gallery.classList.remove('hidden');
            gallery.style.opacity = 1;
        }, 4000);  // Esperar al último elemento antes de mostrar la galería
    }
}

// Iniciar el slideshow después de 2 segundos
setTimeout(showSlideshow, 2000);
