(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

const add = (num1, num2) => {
  return num1 + num2;
};

module.exports = add;

},{}],2:[function(require,module,exports){
'use strict';

const divide = (num1, num2) => {
  return num1 / num2;
};

module.exports = divide;

},{}],3:[function(require,module,exports){
// This is the file that RULES THEM ALL
'use strict';

const MyCalculator = require('./mycalculator');
const calcElement = document.getElementById('calc');

calcElement.innerHTML += `<div>Adding: ${MyCalculator.add(1, 2)}</div>`;
calcElement.innerHTML += `<div>Subtracting: ${MyCalculator.subtract(40, 2)}</div>`;
calcElement.innerHTML += `<div>Dividing: ${MyCalculator.divide(12, 2)}</div>`;
calcElement.innerHTML += `<div>Multiplying: ${MyCalculator.multiply(40, 1)}</div>`;

},{"./mycalculator":5}],4:[function(require,module,exports){
'use strict';

const multiply = (num1, num2) => {
  return num1 * num2;
};

module.exports = multiply;

},{}],5:[function(require,module,exports){
'use strict';

const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const calc = {
  add, subtract, multiply, divide,
};

module.exports = calc;

},{"./add":1,"./divide":2,"./multiply":4,"./subtract":6}],6:[function(require,module,exports){
'use strict';

const sub = (num1, num2) => {
  return num1 - num2;
};

module.exports = sub;

},{}]},{},[3]);
