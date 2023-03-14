const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ulEl = document.querySelector('#ingredients');

const liEl = ingredients.map(item => {
  const li = document.createElement('li');
  li.textContent = item;
  li.classList.add("item");
  return li;
})
ulEl.append(...liEl);
