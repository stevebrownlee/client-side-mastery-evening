'use strict';

// const domEvents = require('./events');

const outputDiv = document.getElementById('items');

const domString = (items) => {
  let domString = '';
  items.forEach(item => {
    domString += `<div class="col-sm-3 text-center item">`;
    domString +=   `<div class="panel">`;
    domString +=     `<div class="panel-body">`;
    domString +=       `<h2>${item.name}</h2>`;
    domString +=       `<img class="item-image" src="${item.img}">`;
    domString +=     `</div>`;
    domString +=   `</div>`;
    domString += `</div>`;
  });
  return domString;
};

const printToDom = (items) => {
  outputDiv.innerHTML = domString(items);
  // domEvents();
};

module.exports = printToDom;
