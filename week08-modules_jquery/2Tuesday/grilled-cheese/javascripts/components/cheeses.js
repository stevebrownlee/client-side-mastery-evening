import cheeseData from '../helpers/data/cheeseData.js';
import util from '../helpers/util.js';
import sandwhich from './sandwich.js';

const addCheese = (e) => {
  const cheeseId = e.target.id;
  cheeseData.setCheese(cheeseId);
  sandwhich.sandwichMaker();
}

const cheeseButtonEvent = (e) => {
  const buttons = document.getElementsByClassName('cheeseButton');
  for(let i=0; i<buttons.length; i++){
    buttons[i].addEventListener('click', addCheese);
  }
}

const makeCheeseButtons = () => {
  const allCheeses = cheeseData.getCheeses();
  let domString = '';

  allCheeses.forEach((cheese) => {
    domString += `<button class="btn btn-dark cheeseButton" id="${cheese.id}">${cheese.type}</button>`;
  });
  util.printToDom('cheese-container', domString);
  cheeseButtonEvent();
}

export default { makeCheeseButtons };