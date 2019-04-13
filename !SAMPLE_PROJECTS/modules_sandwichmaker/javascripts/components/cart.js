import breadChecker from '../helpers/ingredients/bread.js';

import util from '../helpers/util.js';

let cart = [];

const selectBread = () => {
  const bread = document.querySelector('input[name = bread]:checked').id;
  cart.push(breadChecker.addBread(bread));
};


const makeReceipt = () => {
  const totalCost = cart.reduce((a, b) => {return a + b.price}, 0);
  let domString = '<div>';
  domString += '<h2>Receipt:</h2>';
  domString += '<table class="table table-striped col-6 offset-3">';
  domString +=   '<thead class="thead-dark">';
  domString +=     '<tr>';
  domString +=       '<th scope="col">Type</th>';
  domString +=       '<th scope="col">Ingredient</th>';
  domString +=       '<th scope="col">Price</th>';
  domString +=     '</tr>';
  domString +=   '</thead>';
  domString +=   '<tbody>';
  cart.forEach((item) => {
    domString += '<tr>';
    domString +=   `<td scope="row">${item.type}</td>`;
    domString +=   `<td>${item.name}</td>`;
    domString +=   `<td>$${item.price}</td>`;
    domString += '</tr>';
    });
  domString +=     '<tr class="table-info">';
  domString +=       `<th scope="row" colspan="2" class="text-right">Total: </th><th>$${totalCost}</th>`;
  domString +=     '</tr>';
  domString +=   '</tbody>';
  domString += '</table>';
  domString += '</div>';

  util.printToDom('receipt', domString);
}

const collectIngredients = (e) => {
  e.preventDefault();
  cart = [];
  selectBread();
  makeReceipt();
};

export default { collectIngredients };