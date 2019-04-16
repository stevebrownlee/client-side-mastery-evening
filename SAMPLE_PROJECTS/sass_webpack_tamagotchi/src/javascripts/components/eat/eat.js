import util from '../../helpers/util';

import './eat.scss';

let full = 100;

const getFull = () => full;

const setFull = (amount) => {
  full += amount;
  if (full > 100) {
    full = 100;
  }
};

const domStringBuilder = () => {
  let domString = '';
  domString += '<h2>Eating</h2>';
  domString += `<h3>Fullness: ${getFull()}</h3>`;
  domString += '<h4>Select food to eat:</h4>';
  domString += '<button id="kale">Kale</button>';
  domString += '<button id="kandy">Kandy</button>';
  util.printToDom('eat', domString);
  document.getElementById('kale').addEventListener('click', () => {
    setFull(10);
    domStringBuilder();
  });
  document.getElementById('kandy').addEventListener('click', () => {
    setFull(-3);
    domStringBuilder();
  });
};

export default { domStringBuilder, getFull };
