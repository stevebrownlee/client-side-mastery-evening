import util from '../helpers/utilities.js';

const cheeses = [
  {id: 'cheese1', name: 'Blue Cheese', price: 50},
  {id: 'cheese2', name: 'Swiss Cheese', price: 75},
  {id: 'cheese3', name: 'Yellow Cheese', price: 25},
  {id: 'cheese4', name: 'Stinky Cheese', price: 500},
  {id: 'cheese5', name: 'Ricotta Cheese', price: 95}
];

const getSelectedCheeses = () => {
  const selectedCheeses = [];
  const cheeseCheckboxes = document.getElementsByClassName('cheese');
  for(let j = 0; j < cheeseCheckboxes.length; j++){
    for(let k = 0; k < cheeses.length; k++){
      if (cheeseCheckboxes[j].checked &&cheeseCheckboxes[j].id === cheeses[k].id) {
        selectedCheeses.push(cheeses[k])
      }
    }
  }
  return selectedCheeses;
}

const makeCheese = () => {

  let domString = '';
  domString += `<h2>Cheeses</h2>`;
  for(let i = 0; i< cheeses.length; i++) {
    domString += `<div class="form-check">
    <input type="checkbox" class="form-check-input cheese" id="${cheeses[i].id}">
    <label class="form-check-label" for="${cheeses[i].id}">${cheeses[i].name}</label>
  </div>`;
  }
  util.printToDom('cheese-counter', domString);
}

export default { makeCheese, getSelectedCheeses };