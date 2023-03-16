function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const input = document.querySelector('[type="number"]');
const buttonCreate = document.querySelector('[data-create]');
const buttonDestroy = document.querySelector('[data-destroy]');
const divBoxes = document.querySelector('#boxes');

buttonCreate.addEventListener('click', createBoxes);

function createBoxes() {
    const boxesArray = [];

  for (let i = 1; i <= input.value; i++) {
    const  divEl = document.createElement('div');
    divEl.style.width = i * 10 + 20 + 'px';
    divEl.style.height = i * 10 + 20 + 'px';
    divEl.style.marginTop = '10px';
    divEl.style.backgroundColor = getRandomHexColor();
    
    boxesArray.push(divEl);
  }
  divBoxes.append(...boxesArray)
}

buttonDestroy.addEventListener('click', destroyBoxes);
function destroyBoxes() {
  divBoxes.textContent = '';
}