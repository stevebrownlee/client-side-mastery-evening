import {printToDom} from './../helpers/util.js'
import {add, subtract, multiply, divide} from './../helpers/maths.js'

const calcualte = (num1, num2, mathType) => {
  let answer = 0;
  switch (mathType) {
    case 'add':
      answer = add(num1, num2);
      break;
    case 'subtract':
      answer = subtract(num1, num2);
      break;
    case 'multiply':
      answer = multiply(num1, num2);
      break;
    case 'divide':
      answer = divide(num1, num2);
      break;
    default:
      answer = 'you broke it'
  }

  printToDom(answer, 'result');
};

export default calcualte;