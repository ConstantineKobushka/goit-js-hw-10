import flatpickr from 'flatpickr';
import iziToast from 'izitoast';

import iziToastErrorIcon from '../img/izitoast-error-icon.svg';

const dateInput = document.querySelector('.date-input');
const startBtn = document.querySelector('.start-btn');
const dataDays = document.querySelector('.value[data-days]');
const dataHours = document.querySelector('.value[data-hours]');
const dataMinutes = document.querySelector('.value[data-minutes]');
const dataSeconds = document.querySelector('.value[data-seconds]');

let userSelectedDate = null;
let intervalId = null;

startBtn.addEventListener('click', onStartBtnClick);

init();

function init() {
  startBtn.disabled = true;
}

function onStartBtnClick() {
  if (!userSelectedDate) {
    iziToast.error({
      title: 'Error',
      titleColor: '#ffffff',
      message: 'Please choose a date first',
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

  if (intervalId) return;
  startBtn.disabled = true;
  dateInput.disabled = true;
  intervalId = setInterval(() => {
    const curentDate = new Date();
    const timeStamp = userSelectedDate - curentDate;
    const timerData = convertMs(timeStamp);
    updateTimer(timerData);

    if (Math.floor(timeStamp / 1000) === 0) {
      clearInterval(intervalId);
      dateInput.disabled = false;
    }
  }, 1000);
}

function updateTimer({ days, hours, minutes, seconds }) {
  dataDays.textContent = addLeadingZero(days);
  dataHours.textContent = addLeadingZero(hours);
  dataMinutes.textContent = addLeadingZero(minutes);
  dataSeconds.textContent = addLeadingZero(seconds);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// function convertMs(ms) {
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   return {
//     days: Math.floor(ms / day),
//     hours: Math.floor((ms % day) / hour),
//     minutes: Math.floor((ms % hour) / minute),
//     seconds: Math.floor((ms % minute) / second),
//   };
// }

function addLeadingZero(value) {
  return value.toString().padStart(2, 0);
}

// const addLeadingZero = new Intl.NumberFormat('ru-RU', {
//   minimumIntegerDigits: 2,
// }).format;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= Date.now()) {
      startBtn.disabled = true;
      iziToast.error({
        title: 'Error',
        titleColor: '#ffffff',
        message: 'Please choose a date in the future',
        messageColor: '#ffffff',
        iconUrl: iziToastErrorIcon,
        position: 'topRight',
        closeOnEscape: true,
        backgroundColor: '#ef4040',
        progressBarColor: '#b51b1b',
        timeout: 3000,
      });
    } else {
      userSelectedDate = selectedDates[0];
      startBtn.disabled = false;
    }
  },
};

flatpickr(dateInput, options);
