import calc from './../components/calculator.js';

const divideButton = document.getElementById('divideButton');
const multiplyButton = document.getElementById('multiplyButton');
const subtractButton = document.getElementById('subtractButton');
const addButton = document.getElementById('addButton');
const equalsButton = document.getElementById('equalsButton');
const oneButton = document.getElementById('oneButton');
const twoButton = document.getElementById('twoButton');
const threeButton = document.getElementById('threeButton');
const fourButton = document.getElementById('fourButton');
const fiveButton = document.getElementById('fiveButton');
const sixButton = document.getElementById('sixButton');
const sevenButton = document.getElementById('sevenButton');
const eightButton = document.getElementById('eightButton');
const nineButton = document.getElementById('nineButton');
const zeroButton = document.getElementById('zeroButton');

const addNumber = (e) => {
  console.log('you clicked ', e.target.innerHTML);
};

const divideButtonEvent = () => {
  divideButton.addEventListener('click', (e) => {
    e.target.className += " selectedButton";
    calc.setMathType('divide');
  });
};

const addButtonEvent = () => {
  addButton.addEventListener('click', (e) => {
    e.target.className += " selectedButton";
    calc.setMathType('add');
  });
};

const multiplyButtonEvent = () => {
  multiplyButton.addEventListener('click', (e) => {
    e.target.className += " selectedButton";
    calc.setMathType('multiply');
  });
};

const subtractButtonEvent = () => {
  subtractButton.addEventListener('click', (e) => {
    e.target.className += " selectedButton";
    calc.setMathType('subtract');
  });
};

const equalsButtonEvent = () => {
  equalsButton.addEventListener('click', () => {
    calc.calculate();
  });
};

const oneButtonEvent = () => {
  oneButton.addEventListener('click', addNumber);
};

const twoButtonEvent = () => {
  twoButton.addEventListener('click', addNumber);
};

const threeButtonEvent = () => {
  threeButton.addEventListener('click', addNumber);
};

const fourButtonEvent = () => {
  fourButton.addEventListener('click', addNumber);
};

const fiveButtonEvent = () => {
  fiveButton.addEventListener('click', addNumber);
};

const sixButtonEvent = () => {
  sixButton.addEventListener('click', addNumber);
};

const sevenButtonEvent = () => {
  sevenButton.addEventListener('click', addNumber);
};

const eightButtonEvent = () => {
  eightButton.addEventListener('click', addNumber);
};

const nineButtonEvent = () => {
  nineButton.addEventListener('click', addNumber);
};

const zeroButtonEvent = () => {
  zeroButton.addEventListener('click', addNumber);
};


const attachEvents = () => {
  divideButtonEvent();
  addButtonEvent();
  multiplyButtonEvent();
  subtractButtonEvent();
  equalsButtonEvent();
  oneButtonEvent();
  twoButtonEvent();
  threeButtonEvent();
  fourButtonEvent();
  fiveButtonEvent();
  sixButtonEvent();
  sevenButtonEvent();
  eightButtonEvent();
  nineButtonEvent();
  zeroButtonEvent();
};

export default attachEvents;