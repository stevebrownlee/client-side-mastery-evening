import breadChecker from '../helpers/ingredients/bread.js';
import cheeseChecker from '../helpers/ingredients/cheese.js';
import condimentChecker from '../helpers/ingredients/condiments.js';
import meatChecker from '../helpers/ingredients/meat.js';
import veggieChecker from '../helpers/ingredients/veggies.js';

import util from '../helpers/util.js';

let cart = [];

const selectBread = () => {
  const bread = document.querySelector('input[name = bread]:checked').id;
  cart.push(breadChecker.addBread(bread));
};

const selectMeat = () => {
  const meats = document.querySelectorAll('input[name = meat]:checked');
  meats.forEach((meat) => {
    cart.push(meatChecker.addMeat(meat.id));
  })
};

const selectCheese = () => {
  const cheeses = document.querySelectorAll('input[name = cheese]:checked');
  cheeses.forEach((cheese) => {
    cart.push(cheeseChecker.addCheese(cheese.id));
  })
};

const selectCondiments = () => {
  const condiments = document.querySelectorAll('input[name = condiment]:checked');
  condiments.forEach((condiment) => {
    cart.push(condimentChecker.addCondiments(condiment.id));
  })
};

const selectVeggies = () => {
  const veggies = document.querySelectorAll('input[name = veggie]:checked');
  veggies.forEach((veggie) => {
    cart.push(veggieChecker.addVeggies(veggie.id));
  })
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
    domString +=   `<td>$${item.price.toFixed(2)}</td>`;
    domString += '</tr>';
    });
  domString +=     '<tr class="table-info">';
  domString +=       `<th scope="row" colspan="2" class="text-right">Total: </th><th>$${totalCost.toFixed(2)}</th>`;
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
  selectMeat();
  selectCheese();
  selectCondiments();
  selectVeggies();
  makeReceipt();
};

export default { collectIngredients };