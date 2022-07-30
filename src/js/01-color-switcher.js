const refs = {
    body: document.querySelector("body"),
    btnStart: document.querySelector("[data-start]"),
    btnStop: document.querySelector("[data-stop]"),
    p: document.querySelector("p")
};

refs.btnStart.addEventListener("click", startChangeColor);
refs.btnStop.addEventListener("click", stopChangeColor);

refs.body.style.display = "flex"
refs.body.style.justifyContent = "center"
refs.body.style.marginTop = "150px"
refs.p.style.transform = "translate(-100%, -100%)"
refs.btnStart.style.marginRight = "10px"
refs.btnStart.style.width = "80px"
refs.btnStop.style.width = "80px"

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

let intervalId = null;

function changeColorBody() {
    const changeColor = refs.body.style.backgroundColor = getRandomHexColor();
};

function startChangeColor() {
    intervalId = setInterval(changeColorBody, 1000);
    refs.btnStart.disabled = true;
    refs.btnStart.style.backgroundColor = "green"
    refs.btnStart.style.color = "red"
    refs.btnStop.style.backgroundColor = "#fafafa"
};

function stopChangeColor() {
    clearInterval(intervalId);
    refs.btnStart.style.backgroundColor = "#fafafa"
    refs.btnStop.style.backgroundColor = "red"
    refs.btnStop.style.color = "green"
    refs.btnStart.disabled = false;
};

//////////////second
// const startBtn = document.querySelector('button[data-start]');
// const stopBtn = document.querySelector('button[data-stop]');
// const btnContainer = document.querySelector('.container');
// const body = document.querySelector('body');
// let timerId = null;

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// btnContainer.addEventListener('click', onClickStartColorChange);

// function onClickStartColorChange(event) {
//   clearInterval(timerId);
//   const currentEl = event.target;

//   chaeckDisableStatus(currentEl, stopBtn);

//   timerId = setInterval(() => {
//     body.style.backgroundColor = getRandomHexColor();
//   }, 1000);
// }

function chaeckDisableStatus(disabledEl, activeEl) {
  if (disabledEl.disabled === true) {
    return;
  } else if (activeEl.disabled === false) {
    activeEl.disabled === true;
  }
}