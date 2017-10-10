(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./dom":2}],2:[function(require,module,exports){
"use strict";

const outputDiv = $('#dinos');

const domString = (dinosaur) => {
	let domString = '';
      domString += `<div>`;
      domString +=   `<h1>${dinosaur.type}</h1>`;
      domString += `</div>`;
	printToDom(domString);
};


const printToDom = (strang) => {
	outputDiv.append(strang);
};

module.exports = domString;
},{}],3:[function(require,module,exports){
"use strict";

const data = require('./data');

$(document).ready(function() {
	data.initializer();

});
},{"./data":1}]},{},[3]);
