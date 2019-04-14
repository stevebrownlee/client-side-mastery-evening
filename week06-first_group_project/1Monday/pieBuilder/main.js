const ingredientInput = document.getElementById('ingredientInput');
const addButton = document.getElementById('addButton');

const ingredients = [];

let ingredientCounter = 0;

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
    domString += `    <a href="#" id=${ing.id} class="btn btn-primary deleteBtn">DELETE</a>`;
    domString += `  </div>`;
    domString += `</div>`;
  })
  printToDom('ingredient-container', domString)
}

const deleteFunction = (e) => {
  const itemId = e.target.id;
  ingredients.forEach((ing, index) => {
    if(ing.id === itemId){
      ingredients.splice(index, 1);
    }
  })
  domStringBuilder(ingredients);
  addDeleteEvents();
};

const addDeleteEvents = () => {
  const deleteButtons = document.getElementsByClassName('deleteBtn');
  for(let i=0; i < deleteButtons.length; i++){
    deleteButtons[i].addEventListener('click', deleteFunction)
  }
};

const submitNewItem = (e) => {
  e.preventDefault();
  const ingredientValue = ingredientInput.value;
  const newIngredient = {
    item: ingredientValue,
    id: `ingredient${ingredientCounter}`
  };
  ingredients.push(newIngredient);
  ingredientInput.value = '';
  ingredientCounter++;
  domStringBuilder(ingredients);
  addDeleteEvents();
};

const addEventListeners = () => {
  addButton.addEventListener('click', submitNewItem)
};

const init = () => {
  addEventListeners();
};

init();