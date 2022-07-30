// import flatpickr from "flatpickr";
// import "flatpickr/dist/flatpickr.min.css";

// const refs = {
//     input: document.querySelector("#datetime-picker"),
//     btnStart: document.querySelector("[data-start]"),
//     timerValue: document.querySelector(".value")
// };

// refs.btnStart.addEventListener("click", startTimer)

// refs.btnStart.disabled = true
// let deadline = null;
// console.log(deadline)
// const currentTime = new Date().getTime();
// // console.log(currentTime)
// const deltaTime = deadline - currentTime;
//    console.log(deltaTime)
// const options = {
//     enableTime: true,
//     time_24hr: true,
//     defaultDate: new Date(),
//     minuteIncrement: 1,
//     onClose(selectedDates) {
//         if (deadline <= currentTime) {
//             alert("Please choose a date in the future");
//         }
        
//         deadline = selectedDates[0];
//             refs.btnStart.disabled = false
//             return deadline
//         },
        
//     };


// const fp = flatpickr(refs.input, options);







// function initialTimer({days, hours, minutes, seconds}) {
//     refs.timerValue.textContent = `${days}:${hours}:${minutes}:${seconds}`
// }

// function startTimer(e) {
//     setInterval(() => {
//         const timeValue = convertMs(deltaTime)
//         console.log(timeValue)
//     }, 1000)
// }



// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = addLeadingZero(Math.floor(ms / day));
//   // Remaining hours
//   const hours = addLeadingZero(Math.floor((ms % day) / hour));
//   // Remaining minutes
//   const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
//   // Remaining seconds
//   const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

//   return { days, hours, minutes, seconds };
// };

// function addLeadingZero(value) {
//     return String(value).padStart(2, "0")

// };

///////////////////////////////////////////////////
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  input: document.querySelector('#datetime-picker'),
  btnStart: document.querySelector('[data-start]'),
  timerValue: document.querySelector('.value'),
};

refs.btnStart.addEventListener('click', startTimer);

refs.btnStart.disabled = true;

let deadline = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    deadline = selectedDates[0].getTime();
    const d = deadline - Date.now();
    console.log(deadline);
    if (d <= 0) {
      alert('Please choose a date in the future');
    }

    refs.btnStart.disabled = false;
    // return deadline
  },
};

const fp = flatpickr(refs.input, options);
console.log();

function initialTimer({ days, hours, minutes, seconds }) {
  refs.timerValue.textContent = `${days}:${hours}:${minutes}:${seconds}`;
}

function startTimer(e) {
  setInterval(() => {
    const timeValue = convertMs(deltaTime);
    console.log(timeValue);
  }, 1000);
}

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
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
