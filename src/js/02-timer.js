import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const refs = {
    input: document.querySelector("#datetime-picker"),
    btnStart: document.querySelector("[data-start]"),
    daysEl: document.querySelector("[data-days]"),
    hoursEl: document.querySelector("[data-hours]"),
    minutesEl: document.querySelector("[data-minutes]"),
    secondsEl: document.querySelector("[data-seconds]")
};

refs.btnStart.addEventListener("click", startTimer);
refs.btnStart.disabled = true;

let deadline = null;
console.log(deadline);

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      deadline = selectedDates[0].getTime();
        if (deadline <= currentTime) {
            alert("Please choose a date in the future");
      }
      refs.btnStart.disabled = false;
            return deadline;
        },
        
    };

const currentTime = options.defaultDate.getTime();
const fp = flatpickr(refs.input, options);

function initialTimer({days, hours, minutes, seconds}) {
  refs.daysEl.textContent = `${days} :`;
  refs.hoursEl.textContent = `${hours} :`;
  refs.minutesEl.textContent = `${minutes} :`;
  refs.secondsEl.textContent = `${seconds}`;
};

function startTimer(e) {
  let intervalId = null;
    intervalId = setInterval(() => {
      const currentTime = new Date().getTime();
    const deltaTime = deadline - currentTime;
    const time = convertMs(deltaTime);
      initialTimer(time);
  if (deltaTime < 1000) {
    clearInterval(intervalId);
         };
    }, 1000)
     refs.btnStart.removeEventListener("click", startTimer)
   };

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
};

function addLeadingZero(value) {
    return String(value).padStart(2, "0")
};

