const data = require('./data');
const cartDom = require ('./cartDom');
const cartItems = document.getElementsByClassName('trash-it');

const removeItems = (e) => {
  let itemId = '';
  if (e.target.classList.contains('glyphicon')) {
    itemId = e.target.parentNode.dataset.itemId;
  } else {
    itemId = e.target.dataset.itemId;
  }
  data.removeCartItem(itemId);
  cartDom.printCartToDom();
};

const addCartEvents = () => {
  for (let i = 0; i < cartItems.length; i++) {
    cartItems[i].addEventListener('click', removeItems);
  }
};

module.exports = addCartEvents;
