(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const alertLocation = document.getElementById('alerts');

const successAlert = (message) => {
  let domString = '';
  domString +=  `<div class="alert alert-success alert-dismissible" role="alert">`;
  domString +=    `<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>`;
  domString +=    `<strong>SUCCESS!</strong> ${message}`;
  domString +=  `</div>`;
  printAlert(domString);
};

const failAlert = (message) => {
  let domString = '';
  domString +=  `<div class="alert alert-danger alert-dismissible" role="alert">`;
  domString +=    `<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>`;
  domString +=    `<strong>ERROR!</strong> ${message}`;
  domString +=  `</div>`;
  printAlert(domString);
};

const printAlert = (domString) => {
  alertLocation.innerHTML = domString;
};

module.exports = {
  successAlert,
  failAlert,
};

},{}],2:[function(require,module,exports){
const dataGatekeeper = require('./dataGatekeeper');
const cartDom = require('./cartDom');
const bindCartEvents = require('./cartEvents');

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
    cartDom.printCartToDom();
    bindCartEvents();
  });
};

module.exports = {
  cartButton,
  departmentsButton,
};

},{"./cartDom":3,"./cartEvents":4,"./dataGatekeeper":6}],3:[function(require,module,exports){
const data = require('./data');
const cartOutputDiv = document.getElementById('cart');

const cartDomString = (items) => {
  let domString = `<div class="row text-center"><h3>Your Cart:</h3></div>`;
  domString += '<div class="col-xs-8 col-xs-offset-2">';
  domString += `<table class="table table-striped">`;
  domString +=   `<tr>`;
  domString +=     `<th>Name</th>`;
  domString +=     `<th>Price</th>`;
  domString +=     `<th>Quantity</th>`;
  domString +=     `<th></th>`;
  domString +=   `</tr>`;
  items.forEach((item) => {
    domString +=   `<tr>`;
    domString +=     `<td>${item.name}</td>`;
    domString +=     `<td>$${item.price.toFixed(2)}</td>`;
    domString +=     `<td>${item.purchaseNum}</td>`;
    domString +=     `<td><button class="btn btn-danger trash-it" data-item-id="${item.id}"><span class="glyphicon glyphicon-trash"></span></button></td>`;
    domString +=   `</tr>`;
  });
  domString += `</table>`;
  domString += `</div>`;
  domString += getTotals(items);
  return domString;
};

const getTotals = (itemList) => {
  let itemTotal = 0;
  let priceTotal = 0;
  for (let i = 0; i < itemList.length; i++) {
    itemTotal += (itemList[i].purchaseNum * 1);
    priceTotal += itemList[i].purchaseNum * itemList[i].price;
  };
  return totalsString(itemTotal, priceTotal);
};

const totalsString = (totalItems, totalPrice) => {
  let domstring = `<div class="col-xs-12">`;
  domstring += `<div class="col-xs-6">`;
  domstring +=   `<div class="col-xs-8 col-xs-offset-2 well well-lg">`;
  domstring +=     `TOTAL NUMBER OF ITEMS:  ${totalItems}`;
  domstring +=   `</div>`;
  domstring += `</div>`;
  domstring += `<div class="col-xs-6">`;
  domstring +=   `<div class="col-xs-8 col-xs-offset-2 well well-lg">`;
  domstring +=     `TOTAL COST:  $${totalPrice.toFixed(2)}`;
  domstring +=   `</div>`;
  domstring += `</div>`;
  domstring += `</div>`;
  return domstring;
};

const printCartToDom = () => {
  const cartItems = data.getCart();
  cartOutputDiv.innerHTML = cartDomString(cartItems);
};

module.exports = {
  printCartToDom,
};

},{"./data":5}],4:[function(require,module,exports){
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

},{"./cartDom":3,"./data":5}],5:[function(require,module,exports){
let items = [];
let departments = [];
const cart = [];

const getItems = () => {
  return items;
};

const getDepartments = () => {
  return departments;
};

const setItems = newItems => {
  items = newItems;
};

const setDepartments = newDepartments => {
  departments = newDepartments;
};

const getItemsByDepartment = departmentId => {
  const selectedItems = [];
  items.forEach(item => {
    if (item.departmentId === departmentId) {
      selectedItems.push(item);
    }
  });
  return selectedItems;
};

const getCart = () => {
  return cart;
};

const setCart = (itemId, numberToAdd) => {
  const cartPosition = cart
    .map(function (c) {
      return c.id;
    })
    .indexOf(itemId);

  if (cartPosition === -1) {
    const itemPosition = items
      .map(function (item) {
        return item.id;
      })
      .indexOf(itemId);
    const newItem = items[itemPosition];
    newItem.purchaseNum = numberToAdd;
    cart.push(newItem);
  } else {
    cart[cartPosition].purchaseNum = numberToAdd;
  }
};

const removeCartItem = itemId => {
  const cartPosition = cart
    .map(function (c) {
      return c.id;
    })
    .indexOf(itemId);
  cart.splice(cartPosition,1);
};

module.exports = {
  getItemsByDepartment,
  getDepartments,
  getItems,
  setItems,
  setDepartments,
  setCart,
  getCart,
  removeCartItem,
};

},{}],6:[function(require,module,exports){
const departmentsDom = require('./departmentDom');
const data = require('./data');
const loadItems = require('./items');
const loadDepartments = require('./departments');

const errorFunction = function () {
  console.error('Shit broke :(');
};

const whenItemsLoad = function () {
  const items = JSON.parse(this.responseText).items;
  data.setItems(items);
};

const whenDepartmentsLoad = function () {
  const departments = JSON.parse(this.responseText).departments;
  data.setDepartments(departments);
  departmentsDom(departments);
};

const initializer = () => {
  loadItems(whenItemsLoad, errorFunction);
  loadDepartments(whenDepartmentsLoad, errorFunction);
};

module.exports = {
  initializer,
};

},{"./data":5,"./departmentDom":7,"./departments":9,"./items":11}],7:[function(require,module,exports){
const departmentEvents = require('./departmentEvents');

const departmentsOutputDiv = document.getElementById('departments');

const departmentsDomString = (departments) => {
  let domString = '';
  departments.forEach(department => {
    domString += `<div class="col-sm-3 text-center department">`;
    domString +=     `<div class="panel-body">`;
    domString +=       `<h3 class="department-title hide" data-department-id="${department.id}">${department.name}</h3>`;
    domString +=       `<img class="department-image" src="${department.img}">`;
    domString +=     `</div>`;
    domString +=   `</div>`;
    domString += `</div>`;
  });
  return domString;
};

const printDepartmentsToDom = (departments) => {
  departmentsOutputDiv.innerHTML = departmentsDomString(departments);
  departmentEvents();
};

module.exports = printDepartmentsToDom;

},{"./departmentEvents":8}],8:[function(require,module,exports){
const itemsDom = require('./itemsDom');
const data = require('./data');

const departmentCards = document.getElementsByClassName('department');
const departmentDiv = document.getElementById('departments');
const returnToDepartments = document.getElementById('go-to-departments');

const showDepartmentName = (e) => {
  const departmentName = e.target.children[0].children[0];
  const departmentImg = e.target.children[0].children[1];

  departmentName.classList.remove('hide');
  departmentImg.classList.add('grey-out');
};

const hideDepartmentName = (e) => {
  const departmentName = e.target.children[0].children[0];
  const departmentImg = e.target.children[0].children[1];

  departmentName.classList.add('hide');
  departmentImg.classList.remove('grey-out');
};

const showItems = (e) => {
  let departmentId = '';
  if (e.target.classList.contains('department-image')) {
    departmentId = e.target.parentNode.children[0].dataset.departmentId;
  } else {
    departmentId = e.target.children[0].children[0].dataset.departmentId;
  };

  const selectedItems = data.getItemsByDepartment(departmentId);
  departmentDiv.innerHTML = '';
  returnToDepartments.classList.remove('hide');
  itemsDom(selectedItems);
};

const addDepartmentEvents = () => {
  for (let i = 0; i < departmentCards.length; i++) {
    departmentCards[i].addEventListener('mouseenter', showDepartmentName);
    departmentCards[i].addEventListener('mouseleave', hideDepartmentName);
    departmentCards[i].addEventListener('click', showItems);
  }
};

module.exports = addDepartmentEvents;

},{"./data":5,"./itemsDom":12}],9:[function(require,module,exports){
const loadDepartments = (loadFunction, errorFunction) => {
  const dinoLoader = new XMLHttpRequest();
  dinoLoader.addEventListener('load', loadFunction);
  dinoLoader.addEventListener('error', errorFunction);
  dinoLoader.open('GET', '../db/departments.json');
  dinoLoader.send();
};

module.exports = loadDepartments;

},{}],10:[function(require,module,exports){
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

},{"./alerts":1,"./data":5}],11:[function(require,module,exports){
const loadItems = (loadFunction, errorFunction) => {
  const dinoLoader = new XMLHttpRequest();
  dinoLoader.addEventListener('load', loadFunction);
  dinoLoader.addEventListener('error', errorFunction);
  dinoLoader.open('GET', '../db/items.json');
  dinoLoader.send();
};

module.exports = loadItems;

},{}],12:[function(require,module,exports){
const itemEvents = require('./itemEvents');

const itemsOutputDiv = document.getElementById('items');

const itemsDomString = (items) => {
  let domString = '';
  items.forEach(item => {

    domString += `<div class="col-sm-3 text-center item">`;
    domString +=   `<div class="panel panel-info">`;
    domString +=     `<div class="panel-heading">`;
    domString +=       `<h3 class="panel-title" data-item-id="${item.id}">${item.name}</h3>`;
    domString +=     `</div>`;
    domString +=     `<div class="panel-body">`;
    domString +=       `<div class="row">`;
    domString +=         `<img class="item-image" src="${item.img}">`;
    domString +=       `</div>`;
    domString +=       `<div class="row">`;
    domString +=         `<div class="col-xs-6 col-xs-offset-3">`;
    domString +=           `<div class="input-group">`;
    domString +=             `<span class="input-group-btn">`;
    domString +=               `<button type="button" class="btn btn-default btn-number minus" disabled="disabled" data-type="minus" data-field="quant[${item.id}]">`;
    domString +=                 `<span class="glyphicon glyphicon-minus"></span>`;
    domString +=               `</button>`;
    domString +=             `</span>`;
    domString +=             `<input type="text" name="quant[${item.id}]" class="form-control input-number" value="0" min="0" max="100">`;
    domString +=             `<span class="input-group-btn">`;
    domString +=               `<button type="button" class="btn btn-default btn-number plus" data-type="plus" data-field="quant[${item.id}]">`;
    domString +=                 `<span class="glyphicon glyphicon-plus"></span>`;
    domString +=               `</button>`;
    domString +=             `</span>`;
    domString +=           `</div>`;
    domString +=         `</div>`;
    domString +=       `</div>`;
    domString +=       `<div class="row">`;
    domString +=         `<button type="button" class="btn btn-info item-add">Add to Cart</button>`;
    domString +=       `</div>`;
    domString +=     `</div>`;
    domString +=   `</div>`;
    domString += `</div>`;
  });
  return domString;
};

const printItemsToDom = (items) => {
  itemsOutputDiv.innerHTML = itemsDomString(items);
  itemEvents();
};

module.exports = printItemsToDom;

},{"./itemEvents":10}],13:[function(require,module,exports){
const dataGatekeeper = require('./dataGatekeeper');
const buttonEvents = require('./buttonEvents');

buttonEvents.cartButton();
buttonEvents.departmentsButton();
dataGatekeeper.initializer();

// FROM: https://www.codeply.com/go/2VmBU7TanF/bootstrap-plus-minus-counter-input
$('body').on('click', '.btn-number', function (e) {
  e.preventDefault();

  const fieldName = $(this).attr('data-field');
  const type = $(this).attr('data-type');
  const input = $(`input[name="${fieldName}"]`);
  const currentVal = parseInt(input.val());
  if (!isNaN(currentVal)) {
    if (type === 'minus') {
      if (currentVal > input.attr('min')) {
        input.val(currentVal - 1).change();
      } else {
        $(this).attr('disabled', true);
      }
    } else if (type === 'plus') {
      if (currentVal < input.attr('max')) {
        input.val(currentVal + 1).change();
        $(this).parent().parent().find('.minus').attr('disabled', false);
      } else {
        $(this).attr('disabled', true);
      }
    }
  } else {
    input.val(0);
  }
});
$('.input-number').focusin(function () {
  $(this).data('oldValue', $(this).val());
});
$('.input-number').change(function () {
  const minValue = parseInt($(this).attr('min'));
  const maxValue = parseInt($(this).attr('max'));
  const valueCurrent = parseInt($(this).val());

  name = $(this).attr('name');
  if (valueCurrent >= minValue) {
    $(`.btn-number[data-type='minus'][data-field='${name}']`).removeAttr(
      'disabled'
    );
  } else {
    console.error('Sorry, the minimum value was reached');
    $(this).val($(this).data('oldValue'));
  }
  if (valueCurrent <= maxValue) {
    $(`.btn-number[data-type='plus'][data-field="${name}"]`).removeAttr(
      'disabled'
    );
  } else {
    console.error('Sorry, the maximum value was reached');
    $(this).val($(this).data('oldValue'));
  }
});
$('.input-number').keydown(function (e) {
  // Allow: backspace, delete, tab, escape, enter and .
  if (
    $.inArray(e.keyCode, [46, 8, 9, 27, 13, 190,]) !== -1 ||
    // Allow: Ctrl+A
    (e.keyCode === 65 && e.ctrlKey === true) ||
    // Allow: home, end, left, right
    (e.keyCode >= 35 && e.keyCode <= 39)
  ) {
    // let it happen, don't do anything
    return;
  }
  // Ensure that it is a number and stop the keypress
  if (
    (e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) &&
    (e.keyCode < 96 || e.keyCode > 105)
  ) {
    e.preventDefault();
  }
});

},{"./buttonEvents":2,"./dataGatekeeper":6}]},{},[13]);
