import util from '../helpers/utilities.js';
import cheese from './cheese.js';
import meat from './meat.js';

const createFinalOrder = (items) => {
  console.log('final order', items);
  let domString = '';
  for(let i = 0; i< items.length; i++) {
    domString += `<p>${items[i].name}</p>`;
  }
  util.printToDom('final-order', domString);
};

const createOrderEvent = (e) => {
  e.preventDefault();
  const selectedCheeses = cheese.getSelectedCheeses();
  const selectedMeats = meat.getSelectedMeats();
  const order = [...selectedCheeses, ...selectedMeats];
  createFinalOrder(order);
};

const makeOrder = () => {
  let domString = '';
  domString += `<button class="btn btn-danger col-12" id="orderButton">Order Pizza</button>`;

  util.printToDom('order', domString);
  document.getElementById('orderButton').addEventListener('click', createOrderEvent);
}

export default { makeOrder };