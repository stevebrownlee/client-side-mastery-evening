const itemsOutputDiv = document.getElementById('items');

const itemsDomString = (items) => {
  let domString = '';
  items.forEach(item => {

    domString += `<div class="col-sm-3 text-center item">`;
    domString +=   `<div class="panel panel-info">`;
    domString +=     `<div class="panel-heading">`;
    domString +=       `<h3 class="panel-title">${item.name}</h3>`;
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
    domString +=         `<button type="button" class="btn btn-info cart-button">Add to Cart</button>`;
    domString +=       `</div>`;
    domString +=     `</div>`;
    domString +=   `</div>`;
    domString += `</div>`;
  });
  return domString;
};

const printItemsToDom = (items) => {
  itemsOutputDiv.innerHTML = itemsDomString(items);
};

module.exports = printItemsToDom;
