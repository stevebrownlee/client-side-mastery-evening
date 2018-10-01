import {printToDom} from './../helpers/util.js'
import {add, subtract, multiply, divide} from './../helpers/maths.js'

let calc = {
  firstNumber: '',
  secondNumber: '',
  mathType: '',
  display: ''
};


const calculate = () => {
  let answer = 0;
  switch (calc.mathType) {
    case 'add':
      answer = add(calc.firstNumber, calc.secondNumber);
      break;
    case 'subtract':
      answer = subtract(calc.firstNumber, calc.secondNumber);
      break;
    case 'multiply':
      answer = multiply(calc.firstNumber, calc.secondNumber);
      break;
    case 'divide':
      answer = divide(calc.firstNumber, calc.secondNumber);
      break;
    default:
      answer = 'you broke it'
  }
  setDisplay(answer);
};

const setDisplay = (num) => {
  calc.display = num;
  printToDom(calc.display, 'result');
};

const setMathType = (newType) => {
  calc.mathType = newType;
};

const initialDisplay = () => {
  printToDom(0, 'result');
};

const addNumber = (num) => {
  if(calc.mathType === '') {
    calc.firstNumber += num;
    setDisplay(calc.firstNumber);
  } else {
    calc.secondNumber += num;
    setDisplay(calc.secondNumber);
  }
};

export default {calculate, setMathType, initialDisplay, addNumber};