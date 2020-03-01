const bookInfo = {
  price: 24.99,
  title: 'Fifty Shades of Chicken',
  image: '/book.jpg'
};

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
}

const fiftyShadesBoxes = () => {
  let domString = '';
  for (let i = 250; i > 0; i = i - 5) {
    let color = `background-color: rgb(${i}, ${i}, ${i}')`;
    domString += `<div class='grey-box' style='${color}'></div>`;
  }
  printToDom('gray-container', domString);
};

const cartClick = () => {
  let domString = '<i class="fas fa-shopping-cart cart"></i>';
  domString += '<div id="cart-stuff">';
  domString += `<h3>My Cart</h3>`;
  domString += '<div id="cart-thumb">';
  domString += `<img src=${bookInfo.image} alt="">`;
  domString += '</div>';
  domString += `<div id="cart-price"><div>$${bookInfo.price}</div></div>`;
  domString += '<button class="btn btn-danger" id="checkout">Checkout</button>';
  domString += '</div>';
  printToDom('cart', domString);
  addToCartEvent();
}

const addToCartEvent = () => {
  const cartButton = document.getElementById('cart-add');
  cartButton.addEventListener('click', cartClick);
};

const makeStore = () => {
  let domString = '';
  domString += '<div class="col-6 offset-3">';
  domString += '<div class="card">';
  domString += `<img class="card-img-top" src=${bookInfo.image} alt="Card image cap">`;
  domString += '<div class="card-body">';
  domString += '<h5 class="card-title">Our only book</h5>';
  domString += `<p class="card-text">Price: $${bookInfo.price}</p>`;
  domString += '<button class="btn btn-danger" id="cart-add">add to cart</button>';
  domString += '</div>';
  domString += '</div>';
  domString += '</div>';
  printToDom('store', domString);
  addToCartEvent();
}

const init = () => {
  fiftyShadesBoxes();
  makeStore();
};

init();