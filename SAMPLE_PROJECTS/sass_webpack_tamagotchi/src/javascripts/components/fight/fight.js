import util from '../../helpers/util';

import './fight.scss';

let strength = 100;

const getStrength = () => strength;

const setStrength = (amount) => {
  strength += amount;
  if (strength > 100) {
    strength = 100;
  }
};

const domStringBuilder = () => {
  let domString = '';
  domString += '<h2>Fighting</h2>';
  domString += `<h3>Strength: ${getStrength()}</h3>`;
  domString += '<h4>Select action:</h4>';
  domString += '<button id="flee">Flee</button>';
  domString += '<button id="punch">Punch em</button>';
  util.printToDom('fight', domString);
  document.getElementById('flee').addEventListener('click', () => {
    setStrength(1);
    domStringBuilder();
  });
  document.getElementById('punch').addEventListener('click', () => {
    setStrength(-10);
    domStringBuilder();
  });
};

export default { domStringBuilder, getStrength };
