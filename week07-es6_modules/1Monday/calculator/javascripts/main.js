import calc from './components/calculator.js';
import buttonEvents from './helpers/buttonEvents.js';

const initializeApp = () => {
  calc.calculate(4, 1, 'subtract');
  buttonEvents();
};

initializeApp();