'use strict';

const printToDom = require('./dom');
const loadItems = require('./items');

let items = [];

const errorFunction = function () {
  console.error('Shit broke :(');
};

const whenItemsLoad = function () {
  items = JSON.parse(this.responseText).items;
  printToDom(items);
};

const initializer = () => {
  loadItems(whenItemsLoad, errorFunction);
};

const getItems = () => {
  return loadItems;
};

module.exports = {
  initializer,
  getItems,
};
