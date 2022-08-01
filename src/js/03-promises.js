// Напиши скрипт, который при сабмите формы вызывает функцию createPromise(position, delay) столько раз,
//   сколько ввели в поле amount.При каждом вызове передай ей номер создаваемого промиса(position) 
//   и задержку учитывая введенную пользователем первую задержку(delay) и шаг(step).
import { Notify } from 'notiflix/build/notiflix-notify-aio';


const form = document.querySelector('form');

form.addEventListener('submit', createPromisesOnSubmit);

function createPromisesOnSubmit(event) {
  event.preventDefault();
  const { delay, step, amount } = event.target; //выбрали инпуты
  const delayTime = parseInt(delay.value);      // взяли значение с инпутов
  const stepTime = parseInt(step.value);           //
  const amountNumber = parseInt(amount.value);        //
  countPromises(amountNumber, delayTime, stepTime);  //вызвали ф-ию которая обрабатывает промис
}

function countPromises(count, delay, step) {
  for (let i = 1; i <= count; i += 1) {
    let time = delay + step * (i-1);
    createPromise(i, time)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`, {
          timeout: 2000,
        });
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`, {
          timeout: 2000,
        });
      });
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setInterval(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}