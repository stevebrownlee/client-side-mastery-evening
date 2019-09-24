import cheese from './components/cheese.js';
import order from './components/order.js';

const init = () => {
  cheese.makeCheese();
  order.makeOrder();
};

init();