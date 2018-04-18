'use strict';

const domEvents = require('./events');

const outputDiv = document.getElementById('dinos');

const domString = (dinos) => {
  let domString = '';
  dinos.forEach(dino => {
    domString += `<div class="col-sm-3 text-center dino">`;
    domString +=   `<div class="panel">`;
    domString +=     `<div class="panel-body">`;
    domString +=       `<h2>${dino.type}</h2>`;
    domString +=       `<img class="dino-image hide" src="${dino.img}">`;
    domString +=     `</div>`;
    domString +=   `</div>`;
    domString += `</div>`;
  });
  return domString;
};

const printToDom = (dinoArray) => {
  outputDiv.innerHTML = domString(dinoArray);
  domEvents();
};

module.exports = printToDom;
