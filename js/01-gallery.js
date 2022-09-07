import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
const galleryImages = createGallery(galleryItems);
gallery.insertAdjacentHTML('afterbegin', galleryImages);
gallery.addEventListener('click', selectImage);

function createGallery(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `<div class="gallery__item">
                <a class="gallery__link" href=${original}>
                    <img
                        class="gallery__image"
                        src=${preview}
                        data-source=${original}
                        alt=${description}
                    />
                </a>
            </div>`;
        })
        .join('');
}

function selectImage(event) {
    event.preventDefault();
    const imgItem = event.target.classList.value.includes('gallery__image');
	if (!imgItem) return;
    
    const imgLink = event.target.dataset.source;

    const instance = basicLightbox.create(`
        <img class="modal__image" src="${imgLink}" width="800" height="600">
    `)

    instance.show()

    window.addEventListener('keydown', onEscape);
    function onEscape(evt) {
        if (evt.code === 'Escape') {
            instance.close();
            window.removeEventListener('keydown', onEscape);
        }
    }
}
