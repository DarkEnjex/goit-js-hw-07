function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector("button.change-color");
const body = document.querySelector("body");
const color = document.querySelector("span.color");

button.addEventListener('click', handleClick);

function handleClick() {
  const newColor = getRandomHexColor();
  body.style.background = newColor;
  color.textContent = newColor;
} 
