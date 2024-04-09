import { createMarkup } from './render-functions.js';
import { gallery } from '../main.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function getImges(userSearch = '') {
  const API_KEY = '43223956-11c63a864af473bf01df350b7';
  const params = new URLSearchParams({
    key: API_KEY,
    q: userSearch,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  const url = `https://pixabay.com/api/?${params}`;

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      console.log(response);
      return response.json();
    })
    .then(data => {
      gallery.insertAdjacentHTML('beforeend', createMarkup(data.hits));
      const lightbox = new SimpleLightbox('.gallery-link');
      lightbox.refresh();
    })
    .catch(error => {
      console.log(error);
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
    });
}
