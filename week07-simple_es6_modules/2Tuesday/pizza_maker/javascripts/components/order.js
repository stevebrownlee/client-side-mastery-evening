import util from '../helpers/utilities.js';
import cheese from './cheese.js';
import meat from './meat.js';
import veggie from './veggie.js';
import utilities from '../helpers/utilities.js';

const createFinalOrder = (items) => {
  console.log('final order', items);
  const totalCost = items.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0);
  let domString = '';
  for(let i = 0; i< items.length; i++) {
    domString += `
    <div class="row">
      <div class="col-6">
        <p>${items[i].name}</p>
      </div>
      <div class="col-6">
        <p>${utilities.formatPrice(items[i].price)}</p>
      </div>
    </div>
    `;
  }
  domString += '<hr />'
  domString += `
  <div class="row">
    <div class="col-6">FINAL PRICE:</div>
    <div class="col-6">
      <p>${utilities.formatPrice(totalCost)}</p>
    </div>
  </div>
  `
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