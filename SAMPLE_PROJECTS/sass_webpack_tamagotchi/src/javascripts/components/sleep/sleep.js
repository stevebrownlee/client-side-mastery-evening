import util from '../../helpers/util';

import './sleep.scss';

let energy = 10;

const getEnergy = () => energy;

const setEnergy = (amount) => {
  energy += amount;
  if (energy > 100) {
    energy = 100;
  }
};

const domStringBuilder = () => {
  let domString = '';
  domString += '<h2>Sleeping</h2>';
  domString += `<h3>Energy: ${getEnergy()}</h3>`;
  domString += '<h4>Select duration:</h4>';
  domString += '<button id="nap">Cat nap</button>';
  domString += '<button id="slumber">DEEP slumber</button>';
  util.printToDom('sleep', domString);
  document.getElementById('nap').addEventListener('click', () => {
    setEnergy(5);
    domStringBuilder();
  });
  document.getElementById('slumber').addEventListener('click', () => {
    setEnergy(60);
    domStringBuilder();
  });
};

export default { domStringBuilder, getEnergy };
