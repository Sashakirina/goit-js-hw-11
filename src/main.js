import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImges } from './js/pixabay-api';

const form = document.querySelector('.search-form');
export const gallery = document.querySelector('.gallery-list');
export const loadingEl = document.querySelector('.loader');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  gallery.innerHTML = '';
  const userSearch = event.currentTarget.search.value.trim();
  event.preventDefault();

  loadingEl.classList.add('isactive');

  if (!userSearch.length) {
    iziToast.error({
      message: 'Please fill the form!',
    });
    loadingEl.classList.remove('isactive');
  } else {
    getImges(userSearch).then(() => form.reset());
  }
}
