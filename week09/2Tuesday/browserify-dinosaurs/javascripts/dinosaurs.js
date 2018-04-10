'use strict';

const loadDinos = (loadFunction, errorFunction) => {
  const dinoLoader = new XMLHttpRequest();
  dinoLoader.addEventListener('load', loadFunction);
  dinoLoader.addEventListener('error', errorFunction);
  dinoLoader.open('GET', '../db/dinosaurs.json');
  dinoLoader.send();
};

module.exports = loadDinos;
