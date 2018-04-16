const dataGatekeeper = require('./dataGatekeeper');
const cartDom = require('./cartDom');

const returnToDepartments = document.getElementById('go-to-departments');
const itemsDiv = document.getElementById('items');
const departmentsDiv = document.getElementById('departments');
const goToCart = document.getElementById('go-to-cart');

const departmentsButton = () => {
  returnToDepartments.addEventListener('click', () => {
    itemsDiv.innerHTML = '';
    returnToDepartments.classList.add('hide');
    goToCart.classList.remove('hide');
    dataGatekeeper.initializer();
  });
};

const cartButton = () => {
  goToCart.addEventListener('click', () => {
    itemsDiv.innerHTML = '';
    departmentsDiv.innerHTML = '';
    returnToDepartments.classList.remove('hide');
    departmentsButton();
    goToCart.classList.add('hide');
    cartDom.initializer();
  });
};

module.exports = {
  cartButton,
  departmentsButton,
};
