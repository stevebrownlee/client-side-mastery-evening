// take a number and add 3.  then print it to the DOM - LONG Way
// const startingNumber = 22;
// const newNumber = startingNumber + 3;
// const numberKeeper = document.getElementById('numberKeeper');
// numberKeeper.innerHTML += newNumber;

// const startingNumber2 = 23;
// const newNumber2 = startingNumber2 + 3;
// const numberKeeper2 = document.getElementById('numberKeeper2');
// numberKeeper2.innerHTML += newNumber2;

// const startingNumber3 = 24;
// const newNumber3 = startingNumber3 + 3;
// const numberKeeper3 = document.getElementById('numberKeeper3');
// numberKeeper3.innerHTML += newNumber3;

// const startingNumber4 = 25;
// const newNumber4 = startingNumber4 + 3;
// const numberKeeper4 = document.getElementById('numberKeeper4');
// numberKeeper4.innerHTML += newNumber4;


const numberAdder = (startingNumber, divId) => {
  const newNumber = startingNumber + 3;
  printToDom(newNumber, divId);
};

const printToDom = (stringToPrint, divId) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML += stringToPrint;
};

numberAdder(2, 'numberKeeper');
numberAdder(3, 'numberKeeper2');
numberAdder(4, 'numberKeeper3');
numberAdder(5, 'numberKeeper4');