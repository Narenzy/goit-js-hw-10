import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const labels = document.querySelectorAll('.label');

labels.forEach(label => {
  label.textContent = label.textContent.toUpperCase();
});

const picker = document.querySelector('#datetime-picker');
const btn = document.querySelector('.btn');

let userSelectedDate = null;
btn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];

    if (selectedDate <= new Date()) {
      window.alert('Please choose a date in the future');
      btn.disabled = true;
      return;
    }
    {
      btn.disabled = false;
      userSelectedDate = selectedDate;
      console.log(userSelectedDate);
    }
  },
};

flatpickr(picker, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

btn.addEventListener('click', () => {
  if ('click') {
    setInterval(1000);
    btn.disabled = true;
    console.log('clicked');
  }
});
