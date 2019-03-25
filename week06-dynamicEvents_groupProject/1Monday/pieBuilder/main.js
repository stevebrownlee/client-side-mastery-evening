const ingredientInput = document.getElementById('ingredientInput');
const addButton = document.getElementById('addButton');

const ingredients = [];

const domStringBuilder = () => {

}

const submitNewItem = (e) => {
  e.preventDefault();
  const ingredientValue = ingredientInput.value;
  const newIngredient = {
    item: ingredientValue,
  };
  ingredients.push(newIngredient);
  domStringBuilder();
};

const addEventListeners = () => {
  addButton.addEventListener('click', submitNewItem)
};

const init = () => {
  addEventListeners();
};

init();