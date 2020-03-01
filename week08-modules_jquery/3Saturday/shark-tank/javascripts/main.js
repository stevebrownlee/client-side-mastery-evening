import tank from './components/tank.js';
import graveyard from './components/graveyard.js';
import personData from './helpers/data/personData.js';

const sharkAttackEvent = () => {
  personData.randomMurder();
  tank.tankBuilder();
  graveyard.buildGraveyard();
};

const init = () => {
  tank.tankBuilder();
  graveyard.buildGraveyard();
  $('#bite-me').click(sharkAttackEvent);
};

init();

// DEAD TO US:
// document.getElementById
// document.getElementsByClassName
// document.ANYTHING
//.classList - add, remove, contains
// .addEventListener