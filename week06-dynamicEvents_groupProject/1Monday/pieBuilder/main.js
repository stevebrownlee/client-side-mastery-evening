const ingredientInput = document.getElementById('ingredientInput');
const addButton = document.getElementById('addButton');

const ingredients = [];

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
}

const domStringBuilder = (arrayToPrint) => {
  let domString = '';
  arrayToPrint.forEach((ing) => {
    domString += `<div class="card col-3">`;
    domString += `  <div class="card-body">`;
    domString += `    <h5 class="card-title">${ing.item}</h5>`;
    domString += `    <a href="#" class="btn btn-primary">DELETE</a>`;
    domString += `  </div>`;
    domString += `</div>`;
  })
  printToDom('ingredient-container', domString)
}

const submitNewItem = (e) => {
  e.preventDefault();
  const ingredientValue = ingredientInput.value;
  const newIngredient = {
    item: ingredientValue,
  };
  ingredients.push(newIngredient);
  ingredientInput.value = '';
  domStringBuilder(ingredients);
};

const addEventListeners = () => {
  addButton.addEventListener('click', submitNewItem)
};

const init = () => {
  addEventListeners();
};

init();