import calc from './components/calculator.js';
import buttonEvents from './helpers/buttonEvents.js';

const initializeApp = () => {
  buttonEvents();
  calc.initialDisplay();
};

initializeApp();