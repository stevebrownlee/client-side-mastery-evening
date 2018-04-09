// This is the file that RULES THEM ALL
'use strict';

const MyCalculator = require('./mycalculator');
const calcElement = document.getElementById('calc');

calcElement.innerHTML += `<div>Adding: ${MyCalculator.add(1, 2)}</div>`;
calcElement.innerHTML += `<div>Subtracting: ${MyCalculator.subtract(40, 2)}</div>`;
calcElement.innerHTML += `<div>Dividing: ${MyCalculator.divide(12, 2)}</div>`;
calcElement.innerHTML += `<div>Multiplying: ${MyCalculator.multiply(40, 1)}</div>`;
