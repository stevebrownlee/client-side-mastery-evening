import util from '../helpers/utilities.js';

const veggies = [
  {id: 'veggie1', name: 'Pineapple', price: 100},
  {id: 'veggie2', name: 'Onion', price: 75},
  {id: 'veggie3', name: 'Bell Pepper', price: 250},
  {id: 'veggie4', name: 'Olive', price: 50},
  {id: 'veggie5', name: 'Mushroom', price: 9050}
];

const getSelectedVeggies = () => {
  const selectedVeggies = [];
  const veggieCheckboxes = document.getElementsByClassName('veggie');
  for(let j = 0; j < veggieCheckboxes.length; j++){
    for(let k = 0; k < veggies.length; k++){
      if (veggieCheckboxes[j].checked &&veggieCheckboxes[j].id === veggies[k].id) {
        selectedVeggies.push(veggies[k])
      }
    }
  }
  return selectedVeggies;
}

const makeVeggie = () => {
  let domString = '';
  domString += `<h2>veggies</h2>`;
  for(let i = 0; i< veggies.length; i++) {
    domString += `<div class="form-check">
    <input type="checkbox" class="form-check-input veggie" id="${veggies[i].id}">
    <label class="form-check-label" for="${veggies[i].id}">${veggies[i].name}</label>
  </div>`;
  }
  util.printToDom('veggie-counter', domString);
}

export default { makeVeggie, getSelectedVeggies };