"use strict";

var outputDiv = $('#dinos');

var domString = function(dinosaur) {
	var domString = '';
      domString += `<div>`;
      domString +=   `<h1>${dinosaur.type}</h1>`;
      domString += `</div>`;
	printToDom(domString);
};


var printToDom = function(strang) {
	outputDiv.append(strang);
};

module.exports = domString;