import util from '../helpers/utilities.js';
import cheese from './cheese.js';
import meat from './meat.js';
import veggie from './veggie.js';

const createFinalOrder = (items) => {
  console.log('final order', items);
  let domString = '';
  for(let i = 0; i< items.length; i++) {
    domString += `
    <div class="row">
      <div class="col-6">
        <p>${items[i].name}</p>
      </div>
      <div class="col-6">
        <p>${items[i].price}</p>
      </div>
    </div>
    `;
  }
  util.printToDom('final-order', domString);
};

const createOrderEvent = (e) => {
  e.preventDefault();
  const selectedCheeses = cheese.getSelectedCheeses();
  const selectedMeats = meat.getSelectedMeats();
  const selectedVeggies = veggie.getSelectedVeggies();
  const order = [...selectedCheeses, ...selectedMeats, ...selectedVeggies];
  createFinalOrder(order);
};

const makeOrder = () => {
  let domString = '';
  domString += `<button class="btn btn-danger col-12" id="orderButton">Order Pizza</button>`;

  util.printToDom('order', domString);
  document.getElementById('orderButton').addEventListener('click', createOrderEvent);
}

export default { makeOrder };