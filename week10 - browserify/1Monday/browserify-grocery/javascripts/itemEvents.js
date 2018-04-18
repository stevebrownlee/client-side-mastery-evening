// const itemsDom = require('./itemsDom');
const data = require('./data');
const alerts = require('./alerts');

const itemCards = document.getElementsByClassName('item-add');

const addItems = e => {
  const numberToAdd =
    e.target.parentNode.parentNode.children[1].children[0].children[0]
      .children[1].value;
  const itemId =
    e.target.parentNode.parentNode.parentNode.children[0].children[0].dataset
      .itemId;
  if (numberToAdd === '0') {
    alerts.failAlert('Can not add 0 items to cart');
  } else {
    let message = '';
    if (numberToAdd === '1') {
      message = 'Item added to cart.';
    } else {
      message = 'Items added to cart.';
    }
    alerts.successAlert(message);
  }
  data.setCart(itemId, numberToAdd);
};

const addItemEvents = () => {
  for (let i = 0; i < itemCards.length; i++) {
    itemCards[i].addEventListener('click', addItems);
  }
};

module.exports = addItemEvents;
