console.log("in functions.js");

console.log(cutUpInput);
var outputNumber = cutUpInput(5);
console.log(outputNumber);

// Example of 'Single Responsiblity Principle'

function nuggetFactory (animalInput) {
  // chickens are cut up
  cutUpInput(animalInput);
  // chickens are separated into chunks
  // take the chunks and fry them
  // package the nuggets
}


function cutUpInput (input) {
  var output = input.length * 20;
  return output;
}

// Function Declarations

var summation;
var constant = 40;

function doesAddition (numberOne, numberTwo) {
  summation = numberOne + numberTwo + constant;
}

doesAddition(2, 3);

console.log(summation);

// Function Expression

console.log(additionAction(4, 9)); // will give an error

var additionAction = function (first, second) {
  return first + second;
}

console.log(additionAction(4, 9));











