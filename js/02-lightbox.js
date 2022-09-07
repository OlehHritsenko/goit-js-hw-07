import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
const galleryImages = createGallery(galleryItems);

gallery.insertAdjacentHTML('beforeend', galleryImages);

function createGallery(galleryItems) {
    return galleryItems
        .map(({ original, preview, description }) => {
            return `<a class="gallery__item" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}" /></a>`;
        }).join('');
}

new SimpleLightbox('.gallery a', {
    animationSpeed: 300,
    captionsData: "alt",
    captionDelay: 250,
});