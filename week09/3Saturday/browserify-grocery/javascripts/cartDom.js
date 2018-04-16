const data = require('./data');
// const departmentEvents = require('./departmentEvents');

const cartOutputDiv = document.getElementById('cart');

const cartDomString = (items) => {
  let domString = '<div class="col-xs-8 col-xs-offset-2">';
  domString += `<table class="table table-striped">`;
  domString +=   `<tr>`;
  domString +=     `<th>Name</th>`;
  domString +=     `<th>Price</th>`;
  domString +=     `<th>Quantity</th>`;
  domString +=   `</tr>`;
  items.forEach((item) => {
    domString +=   `<tr>`;
    domString +=     `<td>${item.name}</td>`;
    domString +=     `<td>$${item.price.toFixed(2)}</td>`;
    domString +=     `<td>${item.purchaseNum}</td>`;
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
  // departmentEvents();
};

module.exports = {
  printCartToDom,
};
