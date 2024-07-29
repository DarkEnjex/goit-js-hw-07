function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxes = document.querySelector('#boxes');
const buttonCreate = document.querySelector('[data-create]');
const buttonDestroy = document.querySelector('[data-destroy]');
const input = document.querySelector('input');

buttonCreate.addEventListener('click', handleCreate);
buttonDestroy.addEventListener('click', boxesDestroy);

function handleCreate() {
  const inputValue = Number(input.value);
  if (inputValue >= 1 && inputValue <= 100) {
    createBoxes(inputValue);
    input.value = '';
  }
}

function createBoxes(amount) {
  boxes.innerHTML = '';

  const boxElem = [];
  let sizeBox = 30;

  {
    for (let i = 0; i < amount; i += 1) {
      const box = document.createElement('div');
      box.style.width = `${sizeBox}px`;
      box.style.height = `${sizeBox}px`;
      box.style.background = getRandomHexColor();
      boxElem.push(box);
      sizeBox += 10;
    }

    boxes.append(...boxElem);
  }
}

function boxesDestroy() {
  boxes.innerHTML = '';
}
