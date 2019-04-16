import cart from './components/cart.js';

const init = () => {
  document.getElementById('makeIt').addEventListener('click', cart.collectIngredients);
};

init();