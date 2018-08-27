// A local nightclub is having a Battle of the Bands night in a few months.
// They expect many bands to sign up because the grand prize is $20,000.
// To make things easier on the nightclub management, they want each band
// to be assigned a number so that they can easily keep track of the order
// in which the bands will perform.

// Your job is to write a function that accepts any band name as an argument.
//The function will increment a global variable by one each time it is invoked,
//and return that number, and the band name concatenated together.

let bandNumber = 1

const takeNumber = function (bandName) {
  const finalAnswer = '<h3>' + bandNumber + '. ' + bandName + '</h3>';
  bandNumber++;
  printToDom(finalAnswer, 'garage');
};

takeNumber('Galactic Scum'); // This should display "1. Galactic Scum" in the DOM
takeNumber('Underdogs'); // This should display "2. Underdogs" in the DOM