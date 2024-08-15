import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  const promise = new Promise((resolve, reject) => {
    if (form.elements.state.value === 'fulfilled') {
      resolve(form.elements.delay.value);
    } else {
      reject(form.elements.delay.value);
    }
  });

  promise
    .then(delay => {
      setTimeout(() => {
        iziToast.show({
          message: `Fulfilled promise in ${delay}ms`,
          position: 'topRight',
          backgroundColor: '#59A10D',
          titleColor: '#fff',
          titleSize: '16px',
          titleLineHeight: '24px',
          messageColor: '#fff',
          messageSize: '16px',
          messageLineHeight: '24px',
          iconUrl: '../src/img/fulfilled-massage.svg',
          timeout: 5000,
        });
      }, delay);
    })
    .catch(delay => {
      setTimeout(() => {
        iziToast.show({
          message: `Rejected promise in ${delay}ms`,
          position: 'topRight',
          backgroundColor: '#ef4040',
          titleColor: '#fff',
          titleSize: '16px',
          titleLineHeight: '24px',
          messageColor: '#fff',
          messageSize: '16px',
          messageLineHeight: '24px',
          iconUrl: '../src/img/error-massage.svg',
          timeout: 5000,
        });
      }, delay);
    });
}
