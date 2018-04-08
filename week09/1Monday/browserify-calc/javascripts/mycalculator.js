'use strict';

const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const calc = {
  add, subtract, multiply, divide,
};

module.exports = calc;
