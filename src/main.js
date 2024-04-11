import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getData } from './js/pixabay-api.js';
import { createMarkup } from './js/render-functions.js';
import { form, input, gallery, loadMoreBtn } from './js/refs.js';
import { loaderShow } from './js/loader.js';

let searchInput = '';

const photosGallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

let page = 1;
let total_pages;

form.addEventListener('submit', onFormSubmit);
loadMoreBtn.addEventListener('click', loadMoreHandle);

async function onFormSubmit(event) {
  event.preventDefault();
  gallery.innerHTML = '';
  page = 1;

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
    const data = await getData(searchInput, page);
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

      total_pages = data.totalHits / data.hits.length;

      if (page < total_pages) {
        loadMoreBtn.classList.toggle('hidden');
      }
    }
  } catch (error) {
    alert(error.message);
  } finally {
    form.reset();
  }
  loaderShow();
}

async function loadMoreHandle() {
  page += 1;
  loadMoreBtn.classList.toggle('hidden');
  loaderShow();
  try {
    const data = await getData(searchInput, page);
    gallery.insertAdjacentHTML('beforeend', createMarkup(data.hits));

    photosGallery.refresh();

    const galleryItem = document.querySelector('.gallery-item');
    scrollScreen(galleryItem);

    if (page >= total_pages && data.totalHits) {
      loadMoreBtn.classList.toggle('hidden');

      iziToast.info({
        title: '',
        message: "We're sorry, but you've reached the end of search results!",
        position: 'bottomRight',
        timeout: 3000,
        pauseOnHover: false,
      });
    }
  } catch (error) {
    alert(error.message);
    loadMoreBtn.classList.toggle('hidden');
  }
  loaderShow();
  loadMoreBtn.classList.toggle('hidden');
}

function scrollScreen(item) {
  const galleryItemHeight = item.getBoundingClientRect().height;
  window.scrollBy({
    top: galleryItemHeight * 2,
    behavior: 'smooth',
  });
}
