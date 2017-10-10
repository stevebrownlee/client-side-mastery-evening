"use strict";

const printToDom = require('./dom');

const dinosaurs = [];

const firstDinosaurJSON = () => {
  return new Promise((resolve, reject) => {
    $.ajax("./db/dinosaurs1.json").done((data) => {
      resolve(data.dinosaurs1);
    }).fail((xhr, status, error) => {
      reject(error);
    });
  });
};

const secondDinosaurJSON = () => {
  return new Promise((resolve, reject) => {
    $.ajax("./db/dinosaurs2.json").done((data2) => {
      resolve(data2.dinosaurs2);
    }).fail((xhr, status, error) => {
      reject(error);
    });
  });
};

const thirdDinosaurJSON = () => {
  return new Promise((resolve, reject) => {
    $.ajax("./db/dinosaurs3.json").done((data3) => {
      resolve(data3.dinosaurs3);
    }).fail((xhr, status, error) => {
      reject(error);
    });
  });
};

const dinoGetter = () => {
	Promise.all([firstDinosaurJSON(), secondDinosaurJSON(), thirdDinosaurJSON()]).then((resultz) => { 
    resultz.forEach((dinos) => {
      dinos.forEach((dino) => {
        dinosaurs.push(dino);
      });
    });
    makeDinos();
  }).catch((error) => { 
    console.log(error);
  });
};

const makeDinos = () => {
	dinosaurs.forEach((dino) => {
		printToDom(dino);
	});
};

const initializer = () => {
	dinoGetter();
};

const getDinosaurs = () => {
	return dinosaurs;
};

module.exports = {initializer, getDinosaurs};
