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
refs.p.style.transform = "translate(-700px, -100px)"
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