import cart from './cart.js';
import bookData from '../helpers/data/bookData.js';
import util from '../helpers/utilities.js';

const addToCartEvent = (e) => {
  e.preventDefault();
  const bookInfo = bookData.getBook();
  cart.addToCart(bookInfo);
  // cart.cartToDom();
}

const makeStore = () => {
  const bookInfo = bookData.getBook();
  let domString = `<h2>Our only book:</h2>`;
  domString += `Buy now for only`;
  domString += `<h3 id="book-price">$${bookInfo.price}</h3>`;
  domString += `<img src=${bookInfo.image} alt="book cover"><br/>`;
  domString += `<button class="btn btn-danger" id="cartButton">add to cart</button>`;

  util.printToDom('store-container', domString);
  document.getElementById('cartButton').addEventListener('click', addToCartEvent);
}

export default { makeStore };