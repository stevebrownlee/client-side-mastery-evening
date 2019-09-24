import util from '../helpers/utilities.js';

const meats = [
  {id: 'meat1', name: 'Bacon', price: 0},
  {id: 'meat2', name: 'Ham', price: 75},
  {id: 'meat3', name: 'Meatball', price: 2500},
  {id: 'meat4', name: 'Peperoni', price: 500},
  {id: 'meat5', name: 'Sausage', price: 950}
];

const getSelectedMeats = () => {
  const selectedMeats = [];
  const meatCheckboxes = document.getElementsByClassName('meat');
  for(let j = 0; j < meatCheckboxes.length; j++){
    for(let k = 0; k < meats.length; k++){
      if (meatCheckboxes[j].checked &&meatCheckboxes[j].id === meats[k].id) {
        selectedMeats.push(meats[k])
      }
    }
  }
  return selectedMeats;
}

const makeMeat = () => {
  let domString = '';
  domString += `<h2>meats</h2>`;
  for(let i = 0; i< meats.length; i++) {
    domString += `<div class="form-check">
    <input type="checkbox" class="form-check-input meat" id="${meats[i].id}">
    <label class="form-check-label" for="${meats[i].id}">${meats[i].name}</label>
  </div>`;
  }
  util.printToDom('meat-counter', domString);
}

export default { makeMeat, getSelectedMeats };