'use strict';

const printToDom = require('./dom');
const loadDinos = require('./dinosaurs');

let dinoArray = [];

const errorFunction = function () {
  console.error('Shit broke :(');
};

const whenDinosLoad = function () {
  dinoArray = JSON.parse(this.responseText).dinosaurs;
  printToDom(dinoArray);
};

const initializer = () => {
  loadDinos(whenDinosLoad, errorFunction);
};

const getDinos = () => {
  return loadDinos;
};

module.exports = {
  initializer,
  getDinos,
};
