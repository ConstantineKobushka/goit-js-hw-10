import iziToast from 'izitoast';

import iziToastSuccessIcon from '../img/izitoast-success-icon.svg';
import iziToastErrorIcon from '../img/izitoast-error-icon.svg';

const form = document.querySelector('.form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const delay = Number(event.target.elements.delay.value);
  const state = event.target.elements.state.value;

  if (isNaN(delay) || delay < 0) {
    iziToast.error({
      title: 'Error',
      titleColor: '#ffffff',
      message: 'Delay must be a positive number',
      messageColor: '#ffffff',
      iconUrl: iziToastErrorIcon,
      position: 'topRight',
      closeOnEscape: true,
      backgroundColor: '#ef4040',
      progressBarColor: '#b51b1b',
      timeout: 3000,
    });
    return;
  }
  createPromise(delay, state);
}

function createPromise(delay, state) {
  const promise = new Promise((resolve, reject) => {
    if (state === 'fulfilled') {
      resolve(delay);
    } else if (state === 'rejected') {
      reject(delay);
    }
  });

  promise
    .then(delay => {
      setTimeout(() => {
        iziToast.success({
          title: 'Success',
          titleColor: '#ffffff',
          message: `Fulfilled promise in ${delay}ms`,
          messageColor: '#ffffff',
          iconUrl: iziToastSuccessIcon,
          position: 'topRight',
          closeOnEscape: true,
          backgroundColor: '#59A10D',
          progressBarColor: '#326101',
          timeout: 3000,
        });
      }, delay);
    })
    .catch(error => {
      setTimeout(() => {
        iziToast.error({
          title: 'Error',
          titleColor: '#ffffff',
          message: `Rejected promise in ${error}ms`,
          messageColor: '#ffffff',
          iconUrl: iziToastErrorIcon,
          position: 'topRight',
          closeOnEscape: true,
          backgroundColor: '#ef4040',
          progressBarColor: '#b51b1b',
          timeout: 3000,
        });
      }, delay);
    });
}
