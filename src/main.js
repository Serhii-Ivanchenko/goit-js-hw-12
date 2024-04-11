import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getData } from './js/pixabay-api.js';
import { createMarkup } from './js/render-functions.js';
import { form, input, gallery } from './js/refs.js';
import { loaderShow } from './js/loader.js';

let searchInput = '';

const photosGallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

form.addEventListener('submit', onFormSubmit);

async function onFormSubmit(event) {
  event.preventDefault();
  gallery.innerHTML = '';

  if (input.value.trim() === '') {
    return iziToast.error({
      title: '',
      message: 'The field can not be empty!!!',
      position: 'topCenter',
      timeout: 3000,
      pauseOnHover: false,
    });
  }

  searchInput = input.value;
  loaderShow();

  try {
    const data = await getData(searchInput);
    if (data.hits.length === 0) {
      iziToast.error({
        title: '',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
        timeout: 3000,
        pauseOnHover: false,
      });
      loaderShow();
    } else {
      gallery.insertAdjacentHTML('beforeend', createMarkup(data.hits));

      photosGallery.refresh();
      loaderShow();
    }
  } catch (error) {
    alert(error.message);
  } finally {
    form.reset();
  }
}
