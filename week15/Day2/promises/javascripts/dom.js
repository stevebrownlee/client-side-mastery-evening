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