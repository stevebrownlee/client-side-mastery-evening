import cheese from './components/cheese.js';
import meat from './components/meat.js';
import order from './components/order.js';
import veggie from './components/veggie.js';


const init = () => {
  cheese.makeCheese();
  meat.makeMeat();
  order.makeOrder();
  veggie.makeVeggie();
};

init();